import PageNotFound from "views/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";

export const RoutesNoMatch = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
