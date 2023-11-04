import bannerTB from "../images/BannerThongBao.jpg"
import { FaAngleRight } from "react-icons/fa6";

function TSNotification(){
    
    return (
        <>
        <div className="bg-[#214287] pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
                <div>
                    <h1 className="text-white text-3xl font-bold pt-4 text-center">Thông báo tuyển sinh</h1>
                    <div className="text-xs font-medium text-white py-10">
                        <div className="mx-4 mb-6 grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-20 hidden lg:block"></div>
                            <div>
                                <a href=" " className="flex items-center text-base font-bold py-2 border-b border-gray-600">
                                    <div className="w-10">
                                        <FaAngleRight />
                                    </div>
                                    Lập Trình Máy Tính với C#: Ứng Dụng và Định Hướng Việc Làm
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 mb-6 grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-20 hidden lg:block"></div>
                            <div>
                                <a href=" " className="flex items-center text-base font-bold py-2 border-b border-gray-600">
                                    <div className="w-10">
                                        <FaAngleRight />
                                    </div>
                                    Những lý do ngành quản trị mạng máy tính đang thiếu hụt nhân sự trầm trọng
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 mb-6 grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-20 hidden lg:block"></div>
                            <div>
                                <a href=" " className="flex items-center text-base font-bold py-2 border-b border-gray-600">
                                    <div className="w-10">
                                        <FaAngleRight />
                                    </div>
                                    Định hướng công việc cho chuyên viên thiết kế đồ họa
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 mb-6 grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-20 hidden lg:block"></div>
                            <div>
                                <a href=" " className="flex items-center text-base font-bold py-2 border-b border-gray-600">
                                    <div className="w-10">
                                        <FaAngleRight />
                                    </div>
                                    5 ngôn ngữ lập trình máy tính thông dụng bậc nhất hiện nay
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 mb-6 grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-20 hidden lg:block"></div>
                            <div>
                                <a href=" " className="flex items-center text-base font-bold py-2 border-b border-gray-600">
                                    <div className="w-10">
                                        <FaAngleRight />
                                    </div>
                                    Những Thắc Mắc Thường Gặp Về Ngành Kỹ Thuật Điện - Điện Tử
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a href=" " className="flex items-center bg-[#49a942] text-white font-bold py-2 px-4 rounded-md">XEM THÊM <FaAngleRight /></a>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={bannerTB} alt="" className="w-full lg:ml-5 max-lg:mt-10" />
                </div>
            </div>
        </div>
        </>
    )
}

export default TSNotification;