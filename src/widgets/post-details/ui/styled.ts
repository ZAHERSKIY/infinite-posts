import styled from 'styled-components';

export const PostContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 600px; // Большая ширина для подробной информации
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const Body = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #666;
`;
