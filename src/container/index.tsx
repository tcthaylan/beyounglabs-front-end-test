import React from 'react';
import { Header } from './Header/Header';
const Container: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Container;
