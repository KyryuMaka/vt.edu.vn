import { FaFacebook, FaEnvelope, FaLinkedin, FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function Post(){
    return(
        <>
            <div className="text-center mb-10">
                <a href=" " className="font-bold text-xs text-gray-400 hover:text-gray-900">LỊCH THI</a>
                <h1 className="font-bold text-3xl text-gray-600 my-3">Lịch thi kết thúc học phần tháng 7/2023</h1>
                <hr className="w-20 border-2 m-auto my-3"/>
                <p className="font-semibold text-xs text-gray-400">POSTED ON 28/06/2023 BY DUONGTV</p>
            </div>
            <div>
                <p>
                    <a 
                        href="https://hunghaugroup-my.sharepoint.com/:b:/g/personal/minhtq_vt_edu_vn/EUrd6dzQq7BDl1xUQGbwIyMBt1JapGqN9bParXbBiWtaiQ?e=z5pwJd"
                        className="font-semibold hover:underline hover:font-bold"
                    >
                        &gt;&gt;&gt; Xem lịch thi
                    </a>
                </p>
            </div>
            <div className="text-center mt-10">
                <hr className="w-20 border-2 m-auto my-3"/>
                <div className="flex items-center justify-center">
                    <a href=" " className="text-3xl font-semibold mx-1 text-gray-400 hover:text-[#0866ff]"><FaFacebook /></a>
                    <a href=" " className="text-4xl font-semibold mx-1 text-gray-400 hover:text-gray-600"><FaEnvelope /></a>
                    <a href=" " className="text-4xl font-semibold mx-1 text-gray-400 hover:text-[#0a66c2]"><FaLinkedin /></a>
                </div>
            </div>
            <div className="grid grid-cols-2 my-10 py-2 border-y">
                <div className="flex items-center justify-start">
                    <FaAngleLeft />
                    <p className="pl-3 p-5">Thông báo danh sách đăng ký thi Tiếng Anh trình độ A1 (Lần 2)</p>
                </div>
                <div className="flex items-center justify-end">
                    <p className="pr-3 p-5">Thời khóa biểu tháng 07/2023</p>
                    <FaAngleRight />
                </div>
            </div>
        </>
    )
}

export default Post;