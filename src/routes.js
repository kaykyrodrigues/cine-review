import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Review from "./pages/Review";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Catalog";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/review/:id" element={<Review />}></Route>
        <Route path="/catalog" element={<Search />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
