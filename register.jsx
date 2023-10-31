
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        ho: "",
        ten: "",
        sdt: "",
        email: "",
        mk: ""
    })
    const dangki = (e) => {
        e.preventDefault();
        if (value.ho === "" || value.ten === "" || value.sdt === ""
            || value.email === "" || value.mk === "") {
            alert('Vui lòng không để trống!');
        }
        else{
            navigate('/');
        }
    }
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div className=" pt-20 ">
            <form className=" w-2/5 mx-auto font-sans bg-white px-12 py-10 " >
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">ĐĂNG KÝ TÀI KHOẢN</h1>
                    <p>Bạn đã có tài khoản ? <a href="" onClick={handleLogin} className="text-blue-500">Đăng nhập tại đây</a></p>
                    <h1 className="text-xl font-semibold mt-8">THÔNG TIN CÁ NHÂN</h1>
                </div>
                <div className="mt-8">
                    <label htmlFor="" className="block font-bold">Họ</label>
                    <input value={value.ho} onChange={e => setValue(e.target.value)} placeholder="Họ" type="text" className=" mb-4 w-full p-2 rounded-md border border-gray-300" />
                    <label htmlFor="" className="block font-bold">Tên</label>
                    <input value={value.ten} onChange={e => setValue(e.target.value)} placeholder="Tên" type="text" className="mb-2 w-full p-2 rounded-md border border-gray-300" />
                    <label htmlFor="" className="block font-bold">Số điện thoại</label>
                    <input value={value.sdt} onChange={e => setValue(e.target.value)} placeholder="Số điện thoại" type="number" className="mb-2 w-full p-2 rounded-md border border-gray-300" />
                    <label htmlFor="" className="block font-bold">Email</label>
                    <input value={value.email} onChange={e => setValue(e.target.value)} placeholder="Email" type="email" className="mb-2 w-full p-2 rounded-md border border-gray-300" />
                    <label htmlFor="" className="block font-bold">Mật khẩu</label>
                    <input value={value.mk} onChange={e => setValue(e.target.value)} placeholder="Mật khẩu" type="password" className="mb-2 w-full p-2 rounded-md border border-gray-300" />
                    <button type="submit" className="bg-black text-white w-full 
                        py-2 rounded-md hover:bg-blue-600 duration-300 ease-in-out mt-4 font-bold" onClick={dangki}>
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    )
}