import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Forgot = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const back = () => {
        navigate('/login')
    }
    const retake = (e) => {
        e.preventDefault()
        if(email === ""){
            alert("Vui lòng không để trống!")
        }
        else{
            navigate('/login')
        }
    }
    return(
        <div className=" pt-20 text-center">
        <form className=" w-2/5 mx-auto font-sans bg-white px-12 py-10 " >
            <div className="text-center">
                <h1 className="text-3xl font-semibold">ĐĂNG NHẬP TÀI KHOẢN</h1>
                <p>Bạn chưa có tài khoản ? <a href="" className="text-blue-500"  >Đăng ký tại đây</a></p>
            </div>
            <h1 className="text-xl font-semibold mt-8 mb-4">ĐẶT LẠI MẬT KHẨU</h1>
            <p>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</p>
            <div className="mt-8">
                <label htmlFor="" className="block font-semibold">Email</label>
                <input type="email" className=" mb-4 w-full p-2 rounded-md border border-gray-300"
                placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit" className="bg-black text-white w-full 
                    py-2 rounded-md hover:bg-blue-600 duration-300 ease-in-out mb-2"  onClick={retake}> 
                    Lấy lại mật khẩu
                </button>
                <p onClick={back} className="cursor-pointer">Quay lại</p>
            </div>
        </form>
    </div>
    )
}