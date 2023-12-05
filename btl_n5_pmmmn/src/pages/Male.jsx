import axios from "axios";
import { useEffect, useState } from "react";
export const Nam = () => {
    const [value, setValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        axios({
            url: "http://localhost:8080/product",
            method: "get",
        })
            .then(res => {
                setValue(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },[])
    const searchProduct = (e) => {
        e.preventDefault();
        axios({
            url: "http://localhost:8080/product/search",
            method: "post",
            data:{
                "keyword" : searchValue
            }
        })
            .then(res => {
                setValue(res.data);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="pt-16">
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
                        {value.map((item, index) => {
                           if(item.product_type === "boys"){
                            return (
                                <div key={index} className="px-4">
                                <img
                                    className="cursor-pointer hover:scale-105 duration-300 ease-linear"
                                    src={item.product_img}
                                    alt=""
                                />
                                <a className="hover:text-blue-600 font-semibold">{item.product_name}</a>
                                <p className="text-red-500 font-semibold">{item.product_price}00đ</p>
                                <s className="font-semibold">
                                    {item.product_price_old}00đ
                                    <button className="bg-red-600 text-white rounded-lg px-1 text-sm ml-2">
                                        53%
                                    </button>
                                </s>
                            </div>
                            )
                        }  
                        })}



                    </div>
                </div>
            </div>
        </div>
    );
};
