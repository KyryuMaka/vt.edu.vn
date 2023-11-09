import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Advertising from '../components/Advertising';

import img1 from '../images/postImg/post1.jpg';
import img2 from '../images/postImg/post2.jpg';
import img3 from '../images/postImg/post3.jpg';
import img4 from '../images/postImg/post4.webp';
import img5 from '../images/postImg/post5.jpg';
import img6 from '../images/postImg/post6.png';
import img7 from '../images/postImg/post7.png';
import img8 from '../images/postImg/post8.png';

function TSNews(){
    return(
        <>
            <Navbar />
            <div className="grid justify-items-center my-3 max-lg:grid-cols-1 lg:grid-cols-3 lg:container lg:mx-auto">
                <div className="lg:col-span-2 lg:h-0">
                    <div className="grid justify-items-center gap-5 max-lg:grid-cols-1 lg:grid-cols-3 my-3">
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img1} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Lập Trình Máy Tính với C#: Ứng Dụng và Định Hướng Việc Làm
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img2} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Những lý do ngành quản trị mạng máy tính đang thiếu hụt nhân sự trầm trọng
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img3} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Định hướng công việc cho chuyên viên thiết kế đồ họa
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img4} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    5 ngôn ngữ lập trình máy tính thông dụng bậc nhất hiện nay
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img5} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Những Thắc Mắc Thường Gặp Về Ngành Kỹ Thuật Điện - Điện Tử
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img6} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    4 điều giúp ngành Quản trị Mạng máy tính thu hút học viên hiện nay
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img7} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Trường Trung Cấp Vạn Tường công bố chính sách giảm học phí năm 2023
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img8} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Học trung cấp nghề - lựa chọn khôn ngoan để thành công ở tuổi 18
                                </h5>
                            </a>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow">
                            <a href=" ">
                                <img class="rounded-t-lg h-48 w-full" src={img8} alt="" />
                                <h5 class="mb-2 font-bold tracking-tight text-gray-900 text-center p-5">
                                    Thông báo tuyển sinh hệ Trung cấp năm 2023
                                </h5>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-10">
                        <button 
                            className="cursor-pointer p-2 mx-2 text-white font-bold 
                                bg-sky-600 transition
                                duration-75 ease-in-out rounded-full hover:bg-sky-600/70">
                            <p className="w-5 h-5 flex items-center justify-center"><FaAngleLeft /></p>
                        </button>
                        <button 
                            className="cursor-pointer p-2 mx-2 text-white font-bold 
                                bg-sky-600 transition
                                duration-75 ease-in-out rounded-full hover:bg-sky-600/70">
                            <p className="w-5 h-5 flex items-center justify-center">1</p>
                        </button>
                        <button 
                            className="cursor-pointer p-2 mx-2 text-white font-bold 
                                bg-sky-600 transition
                                duration-75 ease-in-out rounded-full hover:bg-sky-600/70">
                            <p className="w-5 h-5 flex items-center justify-center">2</p>
                        </button>
                        <button 
                            className="cursor-pointer p-2 mx-2 text-white font-bold 
                                bg-sky-600 transition
                                duration-75 ease-in-out rounded-full hover:bg-sky-600/70">
                            <p className="w-5 h-5 flex items-center justify-center"><FaAngleRight /></p>
                        </button>
                    </div>
                </div>
                <div>
                    <Advertising />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TSNews;