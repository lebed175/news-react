import Skeleton from "../../Components/Skeleton/Skeleton";

const withSkeleton = (Component, count, type) => {
  return function WithSkeleton(props) {
    const { loading, ...otherProps } = props;

    if (loading) {
      return <Skeleton count={count} type={type}></Skeleton>;
    }

    return <Component {...otherProps}></Component>;
  };
};

export default withSkeleton;
