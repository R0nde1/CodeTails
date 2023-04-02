export function createPagination(totalResults, pageSize, pageNumber) {
  const pagesCount = Math.ceil(totalResults / pageSize);
  if (pagesCount === 1) {
    return '';
  }
  let inactive = pageNumber === 1 ? ' inactive' : '';
  let result = `<li class="pagination__number left-arrow${inactive}" data-page="${
    pageNumber - 1
  }">&lt;</li>`;
  for (let i = 1; i <= pagesCount; i++) {
    const active = i === pageNumber ? ' inactive' : '';
    result += `<li class="pagination__number${active}" data-page="${i}">${i}</li>`;
  }
  inactive = pageNumber === pagesCount ? ' inactive' : '';
  result += `<li class="pagination__number right-arrow${inactive}" data-page="${
    pageNumber + 1
  }">&gt;</li>`;
  return result;
}
