
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email.length === 0 || password.length === 0) {
                alert("Không được để trống");
            } else {
                const res = await axios.post("https://reqres.in/api/login", {
                    email,
                    password,
                });
                const token = res.data.token;
                if (token) {
                    localStorage.setItem('token', token);
                    alert("ĐĂNG NHẬP THÀNH CÔNG")
                    navigate('/');
                } else {
                    alert("không có token");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="h-screen bg-gradient-to-r from-indigo-500 pt-32">
            <form className=" w-1/3 mx-auto font-sans bg-white px-12 py-10 rounded-lg shadow-md" onSubmit={handleLogin}>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">ĐĂNG NHẬP TÀI KHOẢN</h1>
                </div>
                <div className="mt-8">
                    <label htmlFor="" className="block font-semibold">Email</label>
                    <input type="email" className=" mb-4 w-full p-2 rounded-md border border-gray-300"
                        placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="" className="block font-semibold">Mật khẩu</label>
                    <input type="password" className="mb-4 w-full p-2 rounded-md border border-gray-300"
                        placeholder="Mật khẩu" value={password} onChange={e => setPassWord(e.target.value)} />
                    <button type="submit" className="bg-blue-500 text-white w-full 
                        py-2 rounded-md hover:bg-blue-600 duration-300 ease-in-out" >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}
