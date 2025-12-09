import Skeleton from "../../Components/Skeleton/Skeleton";

const withSkeleton = (Component, count, type, direction) => {
  return function WithSkeleton(props) {
    const { loading, ...otherProps } = props;

    if (loading) {
      return (
        <Skeleton count={count} type={type} direction={direction}></Skeleton>
      );
    }

    return <Component {...otherProps}></Component>;
  };
};

export default withSkeleton;
