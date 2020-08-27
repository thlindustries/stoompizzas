import React from 'react';
// import { AuthProvider } from './auth';
import { FoodProvider } from './food';

const AppProvider: React.FC = ({ children }) => {
  return <FoodProvider>{children}</FoodProvider>;
};

export default AppProvider;
