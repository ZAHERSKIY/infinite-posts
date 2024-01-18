import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  margin: 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const Description = styled.p`
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  align-self: flex-start;
`;
