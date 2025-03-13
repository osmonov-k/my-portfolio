// src/App.jsx
import React from "react";
import { SkinProvider } from "./context/SkinContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <SkinProvider>
      <AppRoutes />
    </SkinProvider>
  );
};

export default App;
