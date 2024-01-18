import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useInfiniteScroll = (
  isFetching: boolean,
  setPage: Dispatch<SetStateAction<number>>
) => {
  const loader = useRef(null);

  useEffect(() => {
    const currentLoader = loader.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isFetching, setPage]);

  return loader;
};
