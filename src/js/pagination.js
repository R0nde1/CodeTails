export function createPagination(totalResults, pageSize, pageNumber) {
  const pagesCount = Math.ceil(totalResults / pageSize);
  if (pagesCount === 1) {
    return '';
  }
  let inactive = pageNumber === 1 ? ' inactive' : '';
  let result = `<div class = "pagination-line"><li class="pagination__number left-arrow${inactive}" data-page="${
    pageNumber - 1
  }">&lt;</li>`;
  const pagesToShow = [
    1,
    pageNumber - 1,
    pageNumber,
    pageNumber + 1,
    pagesCount,
  ];
  let dotsAdded = false;
  for (let i = 1; i <= pagesCount; i++) {
    const active = i === pageNumber ? ' inactive' : '';
    
    if (pagesToShow.includes(i)) {
      result += `<li class="pagination__number${active}" data-page="${i}">${i}</li>`;
      dotsAdded = false;
    }
    else if(!dotsAdded) {
      result += `<li class="pagination__number inactive dots">...</li>`;
      dotsAdded = true;
    }
  }
  inactive = pageNumber === pagesCount ? ' inactive' : '';
  result += `<li class="pagination__number right-arrow${inactive}" data-page="${
    pageNumber + 1
  }">&gt;</li></div>`;
  return result;
}
