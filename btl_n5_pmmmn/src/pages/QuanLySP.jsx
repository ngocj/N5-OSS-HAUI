import axios from "axios";
import { useEffect, useState } from "react";
export const QuanLy = () => {
    const [value, setValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        axios({
            url: "http://localhost:8080/product",
            method: "get"
        })
            .then(res => {
                setValue(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    })

    return (
        <div className="pt-16">
            <div className="flex items-center justify-between px-5 mt-3">
                <div className="flex">
                    <h1 className="font-semibold text- p-3">QUẢN LÝ SẢN PHẨM</h1>
                    <button className="font-semibold text-white rounded-md px-5 bg-blue-500 mx-2">NAM</button>
                    <button className="font-semibold text-white rounded-md px-5 bg-blue-500 mx-2">NỮ</button>
                    <button className="font-semibold text-white rounded-md px-5 bg-blue-500 mx-2">PHỤ KIỆN</button>
                </div>
                <button className="font-semibold text-white rounded-md p-3 bg-green-500 ml-2">+ ADD PRODUCT</button>
            </div>
            <form className="py-2">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only
                 dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            <table className="border-collapse border border-slate-400 text-center mx-auto">
                <thead className="bg-slate-600 text-white">
                    <tr>
                        <th className="border border-slate-300 px-7 py-4">ID</th>
                        <th className="border border-slate-300 px-7 py-4">Ảnh sản phẩm</th>
                        <th className="border border-slate-300 px-7 py-4">Tên sản phẩm</th>
                        <th className="border border-slate-300 px-7 py-4">Giá sản phẩm</th>
                        <th className="border border-slate-300 px-7 py-4">Giá gốc</th>
                        <th className="border border-slate-300 px-7 py-4">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-slate-300 px-4 font-semibold">{item._id}</td>
                                <td className="border border-slate-300 px-4">
                                    <img
                                        className="w-24 h-24"
                                        src={item.product_img}
                                        alt={item.product_name}
                                    />
                                </td>
                                <td className="border border-slate-300 px-4 hover:text-blue-600 font-semibold">
                                    {item.product_name}
                                </td>
                                <td className="border border-slate-300 px-4">{item.product_price_old}00đ</td>
                                <td className="border border-slate-300 px-4">
                                    {item.product_price}00đ
                                </td>
                                <td className="border border-slate-300 px-4">
                                    <button className="text-white font-semibold rounded-md p-3 bg-yellow-500 mr-2">UPDATE</button>
                                    <button className="text-white font-semibold rounded-md p-3 bg-red-500 px-2">DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
