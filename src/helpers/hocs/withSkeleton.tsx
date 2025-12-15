import Skeleton from "../../Components/Skeleton/Skeleton";

import { SkeletonType } from "../../interfaces";
import { DirectionType } from "../../interfaces";

interface Props {
  loading: boolean;
}

const withSkeleton = <T extends object>(
  Component: React.ComponentType<T>,
  count?: number,
  type?: SkeletonType,
  direction?: DirectionType
) => {
  return function WithSkeleton(props: Props & T) {
    const { loading, ...otherProps } = props;

    if (loading) {
      return (
        <Skeleton count={count} type={type} direction={direction}></Skeleton>
      );
    }

    return <Component {...(otherProps as T)}></Component>;
  };
};

export default withSkeleton;
