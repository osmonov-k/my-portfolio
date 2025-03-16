import React from "react";
import { SkinProvider } from "./context/SkinContext";
import AppRoutes from "./routes/AppRoutes";
import { AsideProvider } from "./context/AsideContext";

const App = () => {
  return (
    <SkinProvider>
      <AsideProvider>
        <AppRoutes />
      </AsideProvider>
    </SkinProvider>
  );
};

export default App;
