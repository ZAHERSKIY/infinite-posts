import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function RootLayout() {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}
