import Pagination from "../Pagination/Pagination";

import { IPaginationProps } from "../../interfaces";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: IPaginationProps & Props) => {
  return (
    <>
      {top && <Pagination {...paginationProps}></Pagination>}

      {children}

      {bottom && <Pagination {...paginationProps}></Pagination>}
    </>
  );
};

export default PaginationWrapper;
