import Pagination from "../Pagination/Pagination";

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {
  return (
    <>
      {top && <Pagination {...paginationProps}></Pagination>}

      {children}

      {bottom && <Pagination {...paginationProps}></Pagination>}
    </>
  );
};

export default PaginationWrapper;
