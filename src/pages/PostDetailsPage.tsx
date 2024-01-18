import { PostDetails } from '@/widgets/post-details';
import { useParams } from 'react-router-dom';

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const postId = Number(id);

  return <PostDetails postId={postId} />;
};
