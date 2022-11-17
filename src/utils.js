// Returns a new array of tags based on the current tag array and the new tagValue
const getNewTagArray = (tagValue, currentTags) => {
  // If the "ALL" tag is toggled, all other tags are disabled
  if (tagValue === 'ALL' && currentTags.length > 0) {
    return ['ALL'];
  }
  const newSelectedTags = currentTags;
  const indexOfTag = newSelectedTags.indexOf(tagValue);
  // If the toggled tag is found in the selected tags, remove it from the state, otherwise add it to the state
  if (indexOfTag > -1) {
    newSelectedTags.splice(indexOfTag, 1);
  } else {
    newSelectedTags.push(tagValue);
  }
  // If all tags are disabled, toggle the all tag on
  if (newSelectedTags.length === 0) {
    return ['ALL'];
  }
  // If the all tag is active and another tag is toggled, disable the all tag
  if (tagValue !== 'ALL' && newSelectedTags.includes('ALL')) {
    const indexOfAllTag = newSelectedTags.indexOf('ALL');
    newSelectedTags.splice(indexOfAllTag, 1);
  }
  return newSelectedTags;
};

// Returns true if the searchValue is found in the article title, author name or description, false otherwise
const filterBySearch = (article, searchValue) => {
  const { title, author, description } = article.node.frontmatter;
  return (
    title.toLowerCase().includes(searchValue.toLowerCase()) ||
    (author && author.toLowerCase().includes(searchValue.toLowerCase())) ||
    (description &&
      description.toLowerCase().includes(searchValue.toLowerCase()))
  );
};

const filterByTags = (article, selectedTags) => {
  // If "ALL" tag is selected, all of the articles are shown
  if (selectedTags.includes('ALL')) {
    return true;
  }
  // Check if the article has one of the selected tag
  const { tags } = article.node.frontmatter;
  if (tags === undefined) {
    return false;
  }
  return tags.some((tag) => selectedTags.includes(tag.toUpperCase()));
};

// Page items are filtered by the search value and tags selected by the user
const filterItems = (items, searchValue = '', selectedTags = ['ALL']) =>
  items.filter(
    (item) =>
      filterBySearch(item, searchValue) && filterByTags(item, selectedTags)
  );

const getItemsForPage = (
  pageNumber,
  itemsPerPage,
  allItems,
  handlePageChange,
  move
) => {
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = allItems.slice(start, end);
  if (move) {
    handlePageChange(pageNumber);
  }
  /* 
    If we are not on the first page and the page has no items, try moving to the previous page,
    until we find a page that has items or reach the first page.
  */
  if (pageItems.length === 0 && pageNumber !== 1) {
    return getItemsForPage(
      pageNumber - 1,
      itemsPerPage,
      allItems,
      handlePageChange,
      true
    );
  }
  return pageItems;
};

// Forms an array of the page numbers required for the pager component
const getPages = (itemAmount, itemsPerPage) => {
  const pageAmount = Math.ceil(itemAmount / itemsPerPage);
  if (pageAmount === 0) return [0];
  return Array.from({ length: pageAmount }, (x, i) => i);
};

export default {
  getNewTagArray,
  filterItems,
  getItemsForPage,
  getPages,
};
