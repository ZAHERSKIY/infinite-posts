import { postApi } from '@/entities/post';
import { BackButton } from '@/features';
import { Body, PostContainer, Title } from './styled';

export const PostDetails = ({ postId }: { postId: number }) => {
  const isValidPostId = !isNaN(postId) && postId > 0;

  const { useGetPostByIdQuery } = postApi;

  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery(postId, {
    skip: !isValidPostId,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки поста</div>;
  if (!post) return <div>Пост не найден</div>;

  return (
    <PostContainer>
      <BackButton />
      <Title>User: {post.id}</Title>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </PostContainer>
  );
};
