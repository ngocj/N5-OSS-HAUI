export const Login = () => {
    return (
        <div className="h-screen w-1/3 mx-auto mt-20 font-sans">
            <div className="text-center">
                <h1 className="text-3xl">ĐĂNG NHẬP TÀI KHOẢN</h1>
                <p>Bạn chưa có tài khoản ? <a href="" className="border-b border-b-blue-500 text-blue-500">Đăng ký tại đây</a></p>
            </div>
            <div className="mt-8">
                <form action="" >
                    <label htmlFor="" className="block font-semibold">Email</label>
                    <input type="email" className=" mb-4 w-full p-2 rounded-md border border-gray-300"
                    placeholder="Email" />
                    <label htmlFor="" className="block font-semibold">Mật khẩu</label>
                    <input type="password" className=" w-full p-2 rounded-md border border-gray-300"
                    placeholder="Mật khẩu"/>
                    <p className="mb-4">Quên mật khẩu? Nhấn vào <a href="" className="text-blue-500">đây</a></p>
                    <button className="bg-black text-white w-full py-2 rounded-md">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}
