import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

type ViewPostButtonProps = {
  postId: number;
  index: number;
};

export const ViewPostButton = ({ postId, index }: ViewPostButtonProps) => {
  const navigate = useNavigate();

  const handleViewPost = () => {
    sessionStorage.setItem('lastViewedPostIndex', String(index));
    navigate(`/post/${postId}`);
  };
  return <Button onClick={handleViewPost}>Просмотр</Button>;
};
