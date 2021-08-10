const getNewTagArray = (tagValue, currentTags) => {
  // If the all tag is toggled, all other tags are disabled
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

const filterBySearch = (article, searchValue) =>
  article.node.frontmatter.title
    .toLowerCase()
    .includes(searchValue.toLowerCase()) ||
  (article.node.frontmatter.author &&
    article.node.frontmatter.author
      .toLowerCase()
      .includes(searchValue.toLowerCase())) ||
  (article.node.frontmatter.description &&
    article.node.frontmatter.description
      .toLowerCase()
      .includes(searchValue.toLowerCase()));

const filterByTags = (article, selectedTags) => {
  if (selectedTags.includes('ALL')) {
    return true;
  }
  return article.node.frontmatter.tags.some((tag) =>
    selectedTags.includes(tag.toUpperCase())
  );
};

const filterItems = (items, searchValue, selectedTags) =>
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
  /* 
    If we are not at the first page and the page has no items, try moving to the previous page,
    until we find a page that has items or reach the first page.
  */
  if (pageItems.length === 0 && pageNumber !== 1) {
    getItemsForPage(
      pageNumber - 1,
      itemsPerPage,
      allItems,
      handlePageChange,
      true
    );
  }
  if (move) {
    handlePageChange(pageNumber);
  }
  return pageItems;
};

// Forms an array of the page numbers required for the pager component
const getPages = (items, itemsPerPage) => {
  const pageAmount = Math.ceil(items.length / itemsPerPage);
  if (pageAmount === 0) return [0];
  return Array.from({ length: pageAmount }, (x, i) => i);
};

export default {
  getNewTagArray,
  filterItems,
  getItemsForPage,
  getPages,
};
