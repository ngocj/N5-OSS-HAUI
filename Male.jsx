import {  useState } from "react";
export const Nam = () => {
    const [searchValue, setSearchValue] = useState("");
    const products = [
        {
            name: "Áo khoác thể thao nam Anta 852237724-3",
            price: "739,500₫",
            originalPrice: "1,599,000₫",
            discount: "-47%",
            image: "https://product.hstatic.net/1000150581/product/852237724-2__2__1ad562a4ef1949ddac2869e5e3d8eaf0_large.jpg",
        },
        {
            name: "Áo khoác thể thao nam Anta 852237724-2",
            price: "739,500₫",
            originalPrice: "1,599,000₫",
            discount: "-46%",
            image: "https://product.hstatic.net/1000150581/product/852237724-3__4__4fdd96f7e31c43faa8cf3593eac2ebfa_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "899,500₫",
            originalPrice: "1,599,000₫",
            discount: "-50%",
            image: "https://product.hstatic.net/1000150581/product/852237613-2_5ff76b4cb266421798ead49da1f842a9_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "899,500₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852237613-3_b4ff9c8a4d344e6e88e0a623aac64de5_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,035,300₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852315413-1__1__b9b71caeb5ef4e0981e04ab2106daecb_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852315411-3__7__7996128c15144f39bd5f48e6bbd1823e_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852317713-2__1__be750963696e45b8b3bdadf3e70ae506_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852317701-2__2__e719557351534d768819e4229612f47e_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852317745-2__2__b366d3c814ab46418677d20316f09eed_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852317701-3__2__1e07a200f1f74a588f3df30882cb1f71_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-3",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852237613-3_b4ff9c8a4d344e6e88e0a623aac64de5_large.jpg",
        },
        {
            name: "Áo khoác gió thể thao nam Anta 852237613-2",
            price: "1,080,000₫",
            originalPrice: "1,599,000₫",
            discount: "-49%",
            image: "https://product.hstatic.net/1000150581/product/852317745-2__2__b366d3c814ab46418677d20316f09eed_large.jpg",
        },
    ];
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
                    <h1 className="font-semibold text-xl p-4 text-center">QUẦN ÁO NAM</h1>
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
