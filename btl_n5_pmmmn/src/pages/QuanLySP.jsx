import axios from "axios";
import { useEffect, useState } from "react";
export const QuanLy = () => {
    const [value, setValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [modal, setModal] = useState(false);
    const [valueAdd, setValueAdd] = useState({
        namepd:"",
        price:"",
        price_old:""
    })
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = () => {
        axios.get("http://localhost:8080/product")
            .then(res => {
                setValue(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const resetData = () => {
        setValueAdd({
            namepd:"",
            price:"",
            price_old:""
        })
    }
    const searchProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product/search",{
            keyword: searchValue
        })
            .then(res => {
                setValue(res.data);
            })
            .catch(error => {
                console.log(error);
            })

    }
    const showModal = () => {
        setModal(!modal);
    }

    const addProduct = () => {
        axios.post("http://localhost:8080/product",{
            product_name: valueAdd.namepd,
            product_price: valueAdd.price,
            product_price_old: valueAdd.price_old,
            product_img: 'abc',
            product_image: [],
            product_type: 'girls'
        })
            .then(res => {
                fetchData();
                setValue(res.data);
                resetData();
                setModal(false);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="pt-16">
            <div className="flex items-center justify-between px-5 mt-3">
                <h1 className="font-semibold text- p-3">QUẢN LÝ SẢN PHẨM</h1>
                <button className="font-semibold text-white 
                rounded-md p-1.5 bg-green-500 ml-2" onClick={showModal}>+ ADD PRODUCT</button>
            </div>
         { modal &&    <div class="w-1/3 mx-auto ">
                <form class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Tên sản phẩm:
                        </label>
                        <input value={valueAdd.namepd}  onChange={(e) => setValueAdd({ ...valueAdd, namepd: e.target.value })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Giá khuyến mãi sản phẩm:
                        </label>
                        <input value={valueAdd.price} onChange={(e) => setValueAdd({ ...valueAdd, price: e.target.value })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Giá gốc sản phẩm:
                        </label>
                        <input value={valueAdd.price_old} onChange={(e) => setValueAdd({ ...valueAdd, price_old: e.target.value })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button onClick={addProduct} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Thêm
                        </button>
                        <a onClick={showModal} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Hủy
                        </a>
                    </div>
                </form>
            </div>}
            <form className="py-2">
                <div className="flex items-center justify-center">
                    <input type="text" placeholder="Nhập để tìm kiếm..."
                        className="w-3/4 border border-gray-300 py-2 px-2 rounded-md"
                        value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                    <button className="px-5 bg-gray-500 -ml-1 rounded-e  text-white py-2.5"
                        onClick={searchProduct}
                    >Tìm kiếm</button>
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
                        value && value.length > 0 && value.map((item, index) => (
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
                                    <button className="text-white font-semibold rounded-md p-1.5 bg-yellow-500 mr-2">UPDATE</button>
                                    <button className="text-white font-semibold rounded-md p-1.5 bg-red-500 px-2">DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
