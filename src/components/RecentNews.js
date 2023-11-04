import { FaAngleRight } from "react-icons/fa6";

function RecentNews(){
    
    return (
        <>
            <div className="bg-[#2E8927] font-semibold">
                <p className="text-white text-lg ps-4 pt-4">TIN MỚI NHẤT</p>
                <ul className="text-xs text-white">
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Lập Trình Máy Tính với C#: Ứng Dụng và Định Hướng Việc Làm
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Thời khóa biểu tháng 07/2023
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Lịch thi kết thúc học phần tháng 7/2023
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Thông báo danh sách đăng ký thi Tiếng anh trình độ A1 (Lần 2)
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Thông báo về thời gian thi tốt nghiệp các môn văn hóa khoá 21 và các khoá trước thi lại Lần 2 (Đợt 1), năm học 2022 – 2023
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Ngôn ngữ lập trình C++: Khám phá Sức mạnh và Định hướng Công việc
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Thông báo thi Chứng nhận Tiếng Anh A1 (Đợt 2) năm học 2022-2023
                        </a>
                    </li>
                    <li className="mx-4 py-2 border-b border-gray-600">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Thông báo Bổ sung hồ sơ xét tốt nghiệp nghề khoá 20
                        </a>
                    </li>
                    <li className="mx-4 py-2">
                        <a href=" " className="flex truncate">
                            <div className="w-3">
                                <FaAngleRight />
                            </div>
                            &nbsp;Điểm thi Tốt nghiệp Văn hoá khoá 21 và các khoá trước thi lại (Đợt 1), năm học 2022-2023
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RecentNews;