import { FaAngleRight } from "react-icons/fa6";
import line37 from "../images/line37.png"

function Footer(){
    return(
        <>
            <div className="bg-[#234287]">
                <div className="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 pt-10 pb-10">
                    <div className="pt-10">
                        <p className="text-white text-lg font-semibold ps-4">GIỚI THIỆU</p>
                        <hr className="w-10 border-2 ml-4 mt-2"/>
                        <ul className="text-xs font-medium text-white pt-5">
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Lịch sử phát triển
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Sứ mạng, tầm nhìn
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Thông điệp của Hiệu trưởng
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Sơ đồ đến trường
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="pt-10">
                        <p className="text-white text-lg font-medium ps-4">ABOUT</p>
                        <ul className="text-xs font-medium text-white pt-5">
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;History of development
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Mission, vision
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2 border-b border-gray-600">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Directions to the school
                                </a>
                            </li>
                            <li className="w-full lg:w-96 mx-4 py-2">
                                <a href=" " className="flex">
                                    <FaAngleRight />&nbsp;Study environment
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="pt-10">
                        <p className="text-white text-lg font-semibold ps-4">TRƯỜNG TRUNG CẤP VẠN TƯỜNG</p>
                        <hr className="w-10 border-2 ml-4 mt-2"/>
                        <p className="text-white lg:w-96 mx-4 py-2">Địa chỉ: 469 Lê Hồng Phong, Phường 02, Quận 10, Tp HCM</p>
                        <p className="text-white lg:w-96 mx-4 py-2">Điện thoại: 028.3835.5873</p>
                        <p className="text-white lg:w-96 mx-4 py-2">Hotline: 0964 380 333</p>
                        <p className="text-white lg:w-96 mx-4 py-2">Email: tuyensinh@vt.edu.vn</p>
                    </div>
                    <div className="pt-10">
                        <p className="text-white text-lg font-semibold ps-4">FANPAGE</p>
                        <hr className="w-10 border-2 ml-4 mt-2"/>
                        <div className="w-full lg:w-96 mx-4 py-2">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvt.edu.vn&tabs&width=350&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=547330582698933" 
                                width="350" height="130" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" 
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="fanpage"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#00155b]">
                <p className="text-white text-center py-2 text-xs lg:text-sm">Bản quyền &copy; 2023 <span className="font-bold">Trung cấp Vạn Tường</span></p>
            </div>
            <div>
                <img src={line37} alt=""/>
            </div>
        </>
    )
}

export default Footer;