import React from 'react';
import AppRouter from './entrypoint/router';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <AppRouter />
    </FavoritesProvider>
  );
}

export default App;
