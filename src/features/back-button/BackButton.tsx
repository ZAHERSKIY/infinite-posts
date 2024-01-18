import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return <Button onClick={goBack}>Назад</Button>;
};
