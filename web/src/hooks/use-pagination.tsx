"use client";
export const usePagination = () => {
  // Function to calculate the visible range based on the current page
  const getVisibleRange = ({
    currentPage,
    pageCount,
    rangeSize,
  }: {
    currentPage: number;
    pageCount: number;
    rangeSize: number;
  }) => {
    // Adjust the range size as needed
    let start = Math.max(1, currentPage - Math.floor(rangeSize / 2));
    let end = Math.min(pageCount, start + rangeSize - 1);

    // Adjust the start and end positions if the visible range is near the edges
    if (end - start + 1 < rangeSize) {
      start = Math.max(1, end - rangeSize + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return { getVisibleRange };
};
