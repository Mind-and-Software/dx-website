import utils from '../utils';
import testArticleListData from './testData/testContentData';

const { getNewTagArray, filterItems, getItemsForPage, getPages } = utils;

describe('utility functions', () => {
  it('getNewTagArray forms a new tag array based on the current tag values and a new selected tag value', () => {
    // Add the selected value to the list of tags if the list is empty
    expect(getNewTagArray('VALUE1', [])).toEqual(['VALUE1'])
    // Remove the selected value from the list if it is found in the list. After this the list should be empty, so the ALL tag is added
    expect(getNewTagArray('VALUE1', ['VALUE1'])).toEqual(['ALL'])
    // If ALL is selected, remove all other selected tags from the list and only return ALL
    expect(getNewTagArray('ALL', ['VALUE1', 'VALUE2', 'VALUE3'])).toEqual(['ALL'])
    // Remove the selected value from the list
    expect(getNewTagArray('VALUE2', ['VALUE1', 'VALUE2', 'VALUE3'])).toEqual(['VALUE1', 'VALUE3'])
    // If ALL is in the list and any other value is selected, remove ALL and add the new value to the list
    expect(getNewTagArray('VALUE2', ['ALL'])).toEqual(['VALUE2'])
    expect(getNewTagArray('ALL', ['ALL'])).toEqual(['ALL'])
  });


  it('filterItems filters the items based on the search value and selected tags', () => {
    expect(filterItems([])).toEqual([])
    expect(filterItems(testArticleListData)).toEqual(testArticleListData)
    expect(filterItems(testArticleListData, 'Test Author')).toEqual([testArticleListData[1], testArticleListData[2], testArticleListData[3]])
    expect(filterItems(testArticleListData, 'Test Author 2')).toEqual([testArticleListData[1]])
    expect(filterItems(testArticleListData, '', ['TAG1'])).toEqual([testArticleListData[0], testArticleListData[1]])
    expect(filterItems(testArticleListData, '', ['TAG1', 'TAG2'])).toEqual([testArticleListData[0], testArticleListData[1]])
    expect(filterItems(testArticleListData, 'Test Article 1', ['TAG1'])).toEqual([testArticleListData[0]])
    expect(filterItems(testArticleListData, 'Test Description 2')).toEqual([testArticleListData[1]])
    expect(filterItems(testArticleListData, 'Test Description 2', ['TAG3'])).toEqual([])
  });

  it('getItemsForPage finds the correct items/articles for the current page number from the total amount of items', () => {
    // If we are at page 1, and we have 3 items per page, return first 3 items of the article array
    expect(getItemsForPage(1, 3, testArticleListData, jest.fn(), false)).toEqual(testArticleListData.slice(0, 3))
    expect(getItemsForPage(1, 2, testArticleListData, jest.fn(), false)).toEqual(testArticleListData.slice(0, 2))
    expect(getItemsForPage(2, 2, testArticleListData, jest.fn(), false)).toEqual(testArticleListData.slice(2, 4))
    // Since there is only 4 total items, when we go to page 3 with 2 items per page, go back to page 2 and return the items for that
    expect(getItemsForPage(3, 2, testArticleListData, jest.fn(), false)).toEqual(testArticleListData.slice(2, 4))
    expect(getItemsForPage(3, 0, testArticleListData, jest.fn(), false)).toEqual([])
  })

  it('getPages returns an array of page numbers', () => {
    // For example for 9 total items and 3 items per page should return [0, 1, 2]
    expect(getPages(9, 3)).toEqual([0, 1, 2])
    expect(getPages(9, 2)).toEqual([0, 1, 2, 3, 4])
    expect(getPages(1, 2)).toEqual([0])
    expect(getPages(0, 2)).toEqual([0])
  })
})