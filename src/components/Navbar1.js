import logo from "../images/logo.png"
import { FaPhone, FaFacebook, FaEnvelope, FaYoutube } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function Navbar1(){
    return(
        <>
        <nav class="bg-white border-gray-200">
            <div class="container flex flex-wrap justify-between items-center mx-auto p-4">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src={logo} class="h-28 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">TRƯỜNG TRUNG CẤP<br/>VẠN TƯỜNG</span>
                </a>
                <div class="flex items-center">
                    <a href="tel:0964 380 333" class="flex items-center text-2xl font-semibold"><FaPhone /><span className="mx-3">0964 380 333</span></a>
                    <a href=" " class="text-4xl font-semibold mx-1 text-blue-600"><FaFacebook /></a>
                    <a href=" " class="text-4xl font-semibold mx-1"><FaEnvelope /></a>
                    <a href=" " class="text-5xl font-semibold mx-1 text-red-600"><FaYoutube /></a>
                </div>
            </div>
        </nav>
        <nav class="bg-[#234287]">
            <div class="px-4 py-3 mx-auto container">
                <div class="flex items-center">
                    <ul class="flex flex-row font-medium mt-0 text-xs items-center">
                        <li class="text-white border-r pr-3">
                            <a href=" " class="text-xl"><FaHome /></a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">GIỚI THIỆU</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">TUYỂN SINH</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">CÁC PHÒNG, BAN</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">SINH VIÊN</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">TIN TỨC - HOẠT ĐỘNG</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">QUY ĐỊNH - HƯỚNG DẪN</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">ĐÀO TẠO TRỰC TUYỂN</a>
                        </li>
                        <li class="text-white border-r px-3">
                            <a href=" ">XÉT TUYỂN ONLINE</a>
                        </li>
                        <li class="text-white px-3">
                            <a href=" ">LIÊN HỆ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar1