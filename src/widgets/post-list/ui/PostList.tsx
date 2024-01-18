import { Post, PostType, postApi } from '@/entities/post';
import { ViewPostButton } from '@/features';
import { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const limit = 10;

export const PostList = () => {
  const [page, setPage] = useState(1);

  const { useGetAllPostsQuery } = postApi;

  const {
    data: posts,
    isFetching,
    isLoading,
    isError,
  } = useGetAllPostsQuery({ limit, page });

  //   const loader = useInfiniteScroll(isFetching, setPage)

  useEffect(() => {
    if (posts && posts.length > 0) {
      const calculatedPage = Math.ceil(posts.length / limit);
      setPage(calculatedPage);
    }
  }, [posts]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('lastViewedPostIndex');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const loadMorePosts = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getIndex = () => {
    const savedIndex = sessionStorage.getItem('lastViewedPostIndex');

    if (savedIndex) {
      return +savedIndex;
    }

    return 0;
  };

  const renderItemContent = (index: number, post: PostType) => {
    return (
      <PostContainer>
        <Post
          key={`${post.id}-${index}`}
          post={post}
          actionSlot={<ViewPostButton postId={post.id} index={index} />}
        />
      </PostContainer>
    );
  };

  const footer = () => {
    return isFetching ? (
      <div
        style={{
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        Loading...
      </div>
    ) : null;
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки поста</div>;
  if (!posts) return <div>Пост не найден</div>;

  return (
    <Virtuoso
      data={posts}
      style={{ height: '800px', width: '100%' }}
      initialTopMostItemIndex={getIndex()}
      endReached={loadMorePosts}
      itemContent={renderItemContent}
      components={{
        Footer: footer,
      }}
    />
  );
};
