import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import Layout from "../components/GlobalComponents/Layout/Layout";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/boardpage" element={<BoardPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
