import React, { FC } from 'react';
import AppRoutes from "routes";
import Header from "components/Header/Header";

const App: FC = () => {
  return (
      <>
        <Header/>
        <AppRoutes />
      </>
  );
};

export default App;
