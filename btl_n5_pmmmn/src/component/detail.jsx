import axios from "axios"
import { useEffect, useState } from "react"


export const ChiTiet = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        axios({
            url: "http://localhost:8080/product",
            method: "get",
        })
            .then(res => {
                setValue(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
    return (
        <div className="pt-24 px-24 text-xl">
            {value.map((item, index) => {
                return (
                    <div className="grid grid-cols-2 gap-4">
                        <div key={index}>
                            <img src={item.product_img} alt="" />
                            <div className="grid grid-cols-2 gap-5 pt-5">
                                <img src={item.product_images[0]} alt="" className="w-full"/>
                                <img src={item.product_images[1]} alt="" className="w-full" />
                            </div>
                        </div>
                        <div>
                            <b>{item.product_name}</b>
                            <div className="flex gap-4">
                                <p>Thương hiệu: <span className="text-blue-600 ">Sport</span></p>
                                <p>Mã sản phẩm: <span className="text-blue-500">{item.product_code}</span></p>
                            </div>
                            <div className="flex gap-4">
                                <p>{item.product_price}00đ </p>
                                <del>{item.product_price_old}00đ</del>
                                <button className="bg-red-600 text-white rounded-lg px-1 text-sm ml-2">
                                    53%
                                </button>
                            </div>
                            <div>
                                <div className="flex gap-3 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    <p>KHUYẾN MÃI</p>
                                </div>
                                <ul className=" border border-dashed border-orange-500 w-full p-3 ">
                                    <li>ƯU ĐÃI THÁNG 11: SALE OFF 30-50%+++</li>
                                    <li> SPORT60: Giảm 60K cho đơn từ 500K</li>
                                    <li>SPORT100: Giảm 100K cho đơn từ 1 triệu</li>
                                    <li>SPORT200: Giảm 200K cho đơn từ 2 triệu</li>
                                    <li>Áp dụng sản phẩm có mức giảm giá 50%</li>
                                </ul>
                            </div>
                            <div className="flex ">
                                <p>Kích thước:</p>
                                <u className="ml-36">Hướng dẫn chọn size</u>
                            </div>
                            <div className="flex">
                                <button className=" rounded-sm border border-gray-500 px-2 mt-3 mb-3 mr-3">S</button>
                                <button className=" rounded-sm border border-gray-500 px-2 m-3">M</button>
                                <button className=" rounded-sm border border-gray-500 px-2 m-3">L</button>
                                <button className=" rounded-sm border border-gray-500 px-2 m-3">XL</button>
                            </div>

                            <div className="flex ">
                                <div className="border border-gray-500 rounded-md w-32 text-center font-semibold">
                                    <button className="p-2 mr-4">-</button>
                                    <button className="p-2">1</button>
                                    <button className="p-2 ml-4">+</button>
                                </div>
                                <button className="border border-orange-500 ml-4 w-96
                                 rounded-md font-semibold text-orange-500">THÊM VÀO GIỎ</button>
                            </div>
                            <button className="border border-orange-500 
                                 rounded-md font-semibold bg-orange-500 text-white w-full mt-6 h-12">MUA NGAY</button>





                        </div>

                    </div>
                )
            })}


        </div>
    )
}