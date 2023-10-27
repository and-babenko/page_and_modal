export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const maxPageSizeChecker = (pageSize: number) => {
  let validatedPageSize = Number(pageSize);
  if (validatedPageSize > 500 || validatedPageSize < 0) {
    validatedPageSize = 25;
  }
  return validatedPageSize;
};

export const validateQueryParams = (queryParams: {
  pageId: unknown;
  pageSize: unknown;
}) => {
  // If query params (page, pageSize) are exist, but not valid (not numbers) return false.
  // If query don't exist then just setting default value.
  const { pageId, pageSize } = queryParams;

  const pageNum = Number(pageId);
  const pageSizeNum = Number(pageSize);

  if (Object.is(pageNum, NaN) || Object.is(pageSizeNum, NaN)) {
    return false;
  }

  return {
    pageId: pageNum || 0,
    pageSize: pageSizeNum || 25,
  };
};
