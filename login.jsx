
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate('/quanly');
        }
        else if (username === "" || password === "") {
            alert("Vui lòng điền thông tin!")
        }
        else {
            navigate('/');
        }
    };
    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/dangky')
    }
    const forgot = (e) => {
        e.preventDefault();
        navigate('/forgot')
    }
    return (
        <div className=" pt-20 ">
            <form className=" w-2/5 mx-auto font-sans bg-white px-12 py-10 " onSubmit={handleLogin}>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">ĐĂNG NHẬP TÀI KHOẢN</h1>
                    <p>Bạn chưa có tài khoản ? <a href="" className="text-blue-500"  onClick={handleRegister}>Đăng ký tại đây</a></p>
                </div>
                <div className="mt-8">
                    <label htmlFor="" className="block font-semibold">Username</label>
                    <input type="text" className=" mb-4 w-full p-2 rounded-md border border-gray-300"
                        placeholder="User name" value={username} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="" className="block font-semibold">PassWord</label>
                    <input type="password" className="mb-2 w-full p-2 rounded-md border border-gray-300"
                        placeholder="Pass word" value={password} onChange={e => setPassWord(e.target.value)} />
                    <p className="pb-2 text-sm">Quên mật khẩu ? Nhấn vào <a onClick={forgot} href="" className="text-blue-500">đây</a></p>
                    <button type="submit" className="bg-black text-white w-full 
                        py-2 rounded-md hover:bg-blue-600 duration-300 ease-in-out">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}
