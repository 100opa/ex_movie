import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./views/NavBar/navBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Items from "./views/Items/Items";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{
        minHeight: 'calc(100vh - 80px)'
      }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movie/:movieId" element={<Detail />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
