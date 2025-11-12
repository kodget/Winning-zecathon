const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <button
        key={1}
        className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium leading-normal transition-colors ${
          currentPage === 1
            ? 'text-white bg-pulse-cyan font-bold'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    // Show page 2 and 3 if not current page
    if (currentPage !== 1) {
      [2, 3].forEach(page => {
        if (page <= totalPages) {
          pages.push(
            <button
              key={page}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium leading-normal transition-colors ${
                currentPage === page
                  ? 'text-white bg-pulse-cyan font-bold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        }
      });
    }

    // Show ellipsis if needed
    if (totalPages > 4) {
      pages.push(
        <span key="ellipsis" className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-normal leading-normal text-gray-700 dark:text-gray-300">
          ...
        </span>
      );
    }

    // Show last page if more than 3 pages
    if (totalPages > 3) {
      pages.push(
        <button
          key={totalPages}
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium leading-normal transition-colors ${
            currentPage === totalPages
              ? 'text-white bg-pulse-cyan font-bold'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <button
        className="flex h-9 w-9 items-center justify-center text-gray-500 dark:text-gray-400 hover:text-pulse-cyan dark:hover:text-pulse-cyan transition-colors disabled:opacity-50"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      
      {renderPageNumbers()}
      
      <button
        className="flex h-9 w-9 items-center justify-center text-gray-500 dark:text-gray-400 hover:text-pulse-cyan dark:hover:text-pulse-cyan transition-colors disabled:opacity-50"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;