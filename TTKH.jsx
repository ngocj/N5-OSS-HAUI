import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const TTKH = () => {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState({
        name: "",
        email: "",
        sdt: "",
        address: "",
    })
    const [selectedButton, setSelectedButton] = useState(null);

    ;
    const navigate = useNavigate()
    const ShowModal = () => {
        if (value.address === "" || value.name === "" || value.email === "" || value.sdt === "") {
            alert("Vui lòng điền đầy đủ thông tin!")
        }
        else {
            setModal(!modal)

        }
    }
    const handleButtonClick = (buttonName) => {
        if (selectedButton === buttonName) {

            setSelectedButton(null);
        } else {

            setSelectedButton(buttonName);
        }
    };
    const closeModalAndNavigate = () => {
        setModal(false);
        navigate('/');
    };
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/product')
            .then(res => {
                setProduct(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    const firstThreeProducts = product.slice(0, 3);
    return (
        <div className="pt-16 flex">
            {modal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        <p className="text-lg font-semibold">Đơn hàng đã thành công!</p>
                        <p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
                        <button className="bg-blue-500 text-white p-2 mt-4 rounded-md" onClick={closeModalAndNavigate}>
                            Đóng
                        </button>
                    </div>
                </div>
            )}
            <div className="flex flex-col w-1/2 px-24">
                <h1 className="p-2 m-1 text-3xl font-bold italic">SPORT VIET NAM</h1>
                <p className="p-2 m-1 font-semibold">THÔNG TIN GIAO HÀNG</p>
                <input onChange={e => setValue({ ...value, name: e.target.value })} className="border border-gray-500 rounded-sm w-full p-2 m-2" type="text" placeholder="Họ và tên" />
                <div className="flex w-full">
                    <input onChange={e => setValue({ ...value, email: e.target.value })} className="border border-gray-500 rounded-sm w-2/3 p-2 m-2" type="email" placeholder="Email" />
                    <input onChange={e => setValue({ ...value, sdt: e.target.value })} className="border border-gray-500 rounded-sm w-1/3 p-2 m-2 " type="tel" placeholder="Số điện thoại" />
                </div>
                <input onChange={e => setValue({ ...value, address: e.target.value })} className="border border-gray-500 rounded-sm w-full p-2 m-2 " type="text" placeholder="Địa chỉ" />
                <select className="border border-gray-500 rounded-sm w-full p-2 m-2">
                    <option value="" disabled selected hidden>Chọn thành phố</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hochiminh">Hồ Chí Minh</option>
                    <option value="danang">Đà Nẵng</option>
                </select>
                <p className="p-2 m-1 font-semibold">PHƯƠNG THỨC THANH TOÁN</p>
                <ul className="border border-gray-300 w-full rounded-md">
                    <li className="p-2 border border-b-gray-300"><input className="m-2" type="radio" />Thanh toán khi giao hàng (COD)</li>
                    <li className="p-2 border border-b-gray-300"><input className="m-2" type="radio" />Chuyển khoản qua ngân hàng</li>
                    <li className="p-2 border border-b-gray-300" ><input className="m-2" type="radio" />Ví MoMo</li>
                    <li className="p-2 border border-b-gray-300"><input className="m-2" type="radio" />Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</li>
                </ul>
                <button className="bg-blue-500 p-2 mt-4 text-white rounded-md" onClick={ShowModal}>Hoàn tất đơn hàng</button>
            </div>
            <div className="w-1/2 bg-gray-50">
                {firstThreeProducts.map((item, index) => {
                    return (
                        <div>
                            <div key={index} className="flex items-center m-2">
                                <div className="flex items-center w-1/2">
                                    <img src={item.product_img} alt="" className="w-20 h-20 m-1" />
                                    <p >{item.product_name}</p>
                                </div>
                                <p className="w-1/2">{item.product_price}000đ</p>
                            </div>
                        </div>
                    )
                })}
                <div className="flex">
                    <input className="border border-gray-500 rounded-sm w-3/4 p-2 m-2" type="text" placeholder="Mã giảm giá" />
                    <button className="bg-blue-500 w-1/4 p-2 m-2 text-white rounded-md hover:bg-blue-600">Sử dụng</button>
                </div>
                <button
                    className={`m-2 p-2 border border-blue-500 text-blue-500 rounded-md font-semibold ${selectedButton === 'giảm10' ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => handleButtonClick('giảm10')}>
                    Giảm 10%
                </button>
                <button
                    className={`m-2 p-2 border border-blue-500 text-blue-500 rounded-md font-semibold ${selectedButton === 'giảm30' ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => handleButtonClick('giảm30')}>
                    Giảm 30%
                </button>
                <button
                    className={`m-2 p-2 border border-blue-500 text-blue-500 rounded-md font-semibold ${selectedButton === 'giảm40' ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => handleButtonClick('giảm40')}>
                    Giảm 40%
                </button>
                <button
                    className={`m-2 p-2 border border-blue-500 text-blue-500 rounded-md font-semibold ${selectedButton === 'giảm60' ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => handleButtonClick('giảm60')}>
                    Giảm 60.000đ
                </button>
                <button
                    className={`m-2 p-2 border border-blue-500 text-blue-500 rounded-md font-semibold ${selectedButton === 'giảm100' ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => handleButtonClick('giảm100')}>
                    Giảm 100,000đ
                </button>
                <textarea className="m-2 p-2 w-full h-52" placeholder="Ghi chú đơn hàng..."></textarea>
            </div>
        </div>
    )
}
