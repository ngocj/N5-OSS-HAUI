import axios from "axios";
import {  useEffect, useState } from "react";
export const Nu = () => {
    const [searchValue, setSearchValue] = useState("");
    const products = [
        {
            name: "Áo khoác gió thể thao nữ Anta 852237724-3",
            price: "559,300₫",
            originalPrice: "1,599,000₫",
            discount: "-47%",
            image: "https://product.hstatic.net/1000150581/product/862327704-7__2__c9df8c05220c451ab0b93c81e52a7e3b_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nữ Anta 852237724-2",
            price: "559,300₫",
            originalPrice: "1,599,000₫",
            discount: "-46%",
            image: "https://product.hstatic.net/1000150581/product/862327704-6__3__cbf7a701b39e448c8020f739a0657424_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,119,300₫",
            originalPrice: "1,599,000₫",
            discount: "-50%",
            image: "https://product.hstatic.net/1000150581/product/862327704-4__5__32190634ce5d4f1e97e515b8cb9a0307_large.jpg",
        },
        {
            name: "Áo polo nữ A-CHILL TOUCH Anta 862327134-5",
            price: "1,119,300₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327206-3__1__b6ef81787cc742938de078be26c96da9_large.jpg",
        },
        {
            name: "Áo polo nữ A-CHILL TOUCH Anta 862327134-5",
            price: "1,035,300₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327134-5__5__055938f59f464d20936aaaa6b33ee722_large.jpg",
        },
        {
            name: "Áo polo nữ A-CHILL TOUCH Anta 862327134-5",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327134-1__3__70b7cd5910ec489cb48413e43a3e0df1_large.jpg",
        },
        {
            name: "Áo polo nữ A-CHILL TOUCH Anta 862327134-5",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327206-4__4__7ecaf5d25f3f47eeafc59a6b148da40b_large.jpg",
        },
        {
            name: "Áo polo nữ A-CHILL TOUCH Anta 862327134-5",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327704-4__5__32190634ce5d4f1e97e515b8cb9a0307_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nữ Anta 852237724-3",
            price: "559,300₫",
            originalPrice: "1,599,000₫",
            discount: "-47%",
            image: "https://product.hstatic.net/1000150581/product/862327704-7__2__c9df8c05220c451ab0b93c81e52a7e3b_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nữ Anta 852237724-2",
            price: "559,300₫",
            originalPrice: "1,599,000₫",
            discount: "-46%",
            image: "https://product.hstatic.net/1000150581/product/862327704-6__3__cbf7a701b39e448c8020f739a0657424_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,119,300₫",
            originalPrice: "1,599,000₫",
            discount: "-50%",
            image: "https://product.hstatic.net/1000150581/product/862327704-4__5__32190634ce5d4f1e97e515b8cb9a0307_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "1,119,300₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/862327206-3__1__b6ef81787cc742938de078be26c96da9_large.jpg",
        },
    ];
    const [value, setValue] = useState([])


    useEffect(() => {
            axios({
                url : "http://localhost:8080/product",
                method : "get"
            })
            .then(res => {
                setValue(res.data)
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    },[])
   

    return (
        <div className="pt-16">
            <form className="py-2">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="grid grid-cols-4">
                <div className="col-span-1 px-10" >
                    <h1 className="font-semibold text-xl p-4 text-center">QUẦN ÁO NỮ</h1>
                    <h1 className="font-semibold text-xl p-4">PHÂN LOẠI </h1>
                    <div>
                        <p><input type="radio" />  23Q1</p>
                        <p><input type="radio" />  23Q2</p>
                        <p><input type="radio" />  23Q3</p>
                        <p className="pb-4"><input type="radio" />  23Q4</p>
                    </div>
                    <hr className="" />
                    <h1 className="font-semibold text-xl p-4">MỨC GIÁ</h1>
                    <div>
                        <p><input type="checkbox" />  Giá dưới 300,000₫</p>
                        <p><input type="checkbox" />  300,000₫ - 500,000₫</p>
                        <p><input type="checkbox" />  500,000₫ - 700,000₫</p>
                        <p><input type="checkbox" />  700,000₫ - 1,000,000₫</p>
                        <p className="pb-4"><input type="checkbox" />  Giá trên 2,000,000₫</p>
                    </div>
                    <hr />
                    <h1 className="font-semibold text-xl p-4">SẢN PHẨM</h1>
                    <div>
                        <p><input type="checkbox" />  Sản Phẩm Bán Tốt Nhất</p>
                        <p><input type="checkbox" />  Hàng Mới Về</p>
                        <p><input type="checkbox" />  Hàng Giảm Giá</p>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-4 gap-4 ">
                        {products
                            .filter((product) =>
                                product.name.toLowerCase().includes(searchValue.toLowerCase())
                            )
                            .map((product, index) => (
                                <div key={index} className="px-4">
                                    <img
                                        className="cursor-pointer hover:scale-105 duration-300 ease-linear"
                                        src={product.image}
                                        alt=""
                                    />
                                    <a className="hover:text-blue-600 font-semibold">{product.name}</a>
                                    <p className="text-red-500">{product.price}</p>
                                    <s>
                                        {product.originalPrice}{" "}
                                        <button className="bg-red-600 text-white rounded-lg px-1 text-sm ml-2">
                                            {product.discount}
                                        </button>
                                    </s>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
