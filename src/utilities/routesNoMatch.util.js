import { Route, Routes } from "react-router-dom";

export const RoutesNoMatch = ({ children }) => {
  return (
    <Routes>
      {children}
      {/* <Route path="*" element={<Navigate to={routes.HOME} />} /> */}
      <Route path="*" element={<div>404 - not found</div>} />
    </Routes>
  );
};
