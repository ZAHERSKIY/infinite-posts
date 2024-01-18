import { Post, useGetAllPostsQuery } from '@/entities/post';
import { ViewPostButton } from '@/features';
import { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const PostList = () => {
  const [page, setPage] = useState(1);
  const {
    data: posts,
    isFetching,
    isLoading,
    isError,
  } = useGetAllPostsQuery({ limit: 10, page });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки поста</div>;
  if (!posts) return <div>Пост не найден</div>;

  return (
    <Virtuoso
      data={posts}
      style={{ height: '800px', width: '100%' }}
      endReached={() => {
        if (!isFetching) {
          setPage((prevPage) => prevPage + 1);
        }
      }}
      itemContent={(index, post) => {
        return (
          <PostContainer>
            <Post
              key={post.id}
              post={post}
              actionSlot={<ViewPostButton postId={post.id} />}
            />
          </PostContainer>
        );
      }}
      components={{
        Footer: () => {
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
        },
      }}
    />
  );
};
