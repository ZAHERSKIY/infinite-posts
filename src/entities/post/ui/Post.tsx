import { PostType } from '../model/types';
import { Card, Description, Title } from './styled';

type PostProps = {
  post: PostType;
  actionSlot: React.ReactNode;
};

export const Post = (props: PostProps) => {
  const { post, actionSlot } = props;
  return (
    <Card>
      <Title>
        {post.id}. {post.title}
      </Title>
      <Description>{post.body}</Description>
      {actionSlot}
    </Card>
  );
};

export default Post;
