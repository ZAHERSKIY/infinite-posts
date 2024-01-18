import { AppRouter } from './providers/AppRouter';
import { StoreProvider } from './providers/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
