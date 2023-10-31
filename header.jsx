import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
    const [showlogin, setShowlogin] = useState(false);

    const navigate = useNavigate();
    const Login = () => {
        navigate('/login')
    }
    const register = () => {
        navigate('/dangky')
    }
    const show = () => {
        setShowlogin(!showlogin)
    }
    return (
        <div className="">
            <div className="flex items-center justify-between p-4 bg-white font-semibold shadow-md fixed w-full z-10">
                <div>
                    <i href="" className="font-bold text-2xl cursor-pointer">SPORTVN</i>
                </div>
                <div>
                    <ul className="flex">
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><NavLink to={'/'}>TRANG CHỦ</NavLink></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><NavLink to={'/nam'}>NAM</NavLink></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><NavLink to={'/nu'}>NỮ</NavLink></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><NavLink to={'/phukien'}>PHỤ KIỆN</NavLink></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><a href="">UP TO 50%</a></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><a href="">DÒNG SẢN PHẨM</a></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><a href="">ANTA KIDS</a></li>
                        <li className="px-2 text-base hover:text-blue-500 duration-300 ease-in-out"><NavLink to={'/quanly'}></NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex">
                        <li className="px-3 py-1 ">
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-3 py-1" onClick={show}>
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </NavLink>
                            {showlogin && (
                                <div className="absolute top-14 bg-gray-900 text-white w-32 p-2 text-center rounded">
                                    <p className="hover:text-blue-500 duration-500 ease-in-out cursor-pointer text-sm" onClick={Login}>Đăng nhập</p>
                                    <p className="hover:text-blue-500 duration-500 ease-in-out cursor-pointer text-sm pt-3" onClick={register}>Đăng ký</p>
                                </div>
                            )}
                        </li>
                        <li className="px-3 py-1">
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="px-2 py-1 flex items-center" >
                            <NavLink to={'/giohang'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export { Header }