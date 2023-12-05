import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "./account/login";
import { Header } from "./component/header";
import { HomePage } from "./pages/trang chu";
import { Nam } from "./pages/Male";
import { Footer } from "./component/footer";
import { Nu } from "./pages/female";
import { PhuKien } from "./pages/PhuKien";
import { QuanLy } from "./pages/QuanLySP";
import { Detail } from "./pages/Detail";
import { GioHang } from "./pages/GioHang";
import { Register } from "./account/register";
import { Forgot } from "./account/fogotpw";
import { ChiTiet } from "./component/detail";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/nam" element={<Nam />} />
            <Route path="/nu" element={<Nu />} />
            <Route path="/phukien" element={<PhuKien />} />
            <Route path="/quanly" element={<QuanLy />} />
            <Route path="/chitiet" element={<Detail />} />
            <Route path="/giohang" element={<GioHang />} />
            <Route path="/dangky" element={ <Register/>} />
            <Route path="/forgot" element={ <Forgot/>} />
            <Route path="/detail" element={ <ChiTiet/>} />
           
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
