import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

export const ViewPostButton = ({ postId }: { postId: number }) => {
  const navigate = useNavigate();

  const handleViewPost = () => {
    navigate(`/post/${postId}`);
  };
  return <Button onClick={handleViewPost}>Просмотр</Button>;
};
