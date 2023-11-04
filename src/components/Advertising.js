import KhoaYD from "../images/KhoaYD.jpg"
import KhoaKTDL from "../images/KhoaKTDL.jpg"
import KhoaKTCN from "../images/KhoaKTCN.jpg"

function Advertising(){
    return(
        <>
            <div className="max-w-sm my-3 bg-white border border-gray-200 rounded-lg shadow">
                <a href=" ">
                    <img className="rounded-t-lg" src={KhoaYD} alt="" />
                    <h5 className="p-5 font-normal text-gray-700">KHOA Y - DƯỢC</h5>
                </a>
            </div>
            <div className="max-w-sm my-3 bg-white border border-gray-200 rounded-lg shadow">
                <a href=" ">
                    <img className="rounded-t-lg" src={KhoaKTDL} alt="" />
                    <h5 className="p-5 font-normal text-gray-700">KHOA KINH TẾ - DU LỊCH</h5>
                </a>
            </div>
            <div className="max-w-sm my-3 bg-white border border-gray-200 rounded-lg shadow">
                <a href=" ">
                    <img className="rounded-t-lg" src={KhoaKTCN} alt="" />
                    <h5 className="p-5 font-normal text-gray-700">KHOA KỸ THUẬT - CÔNG NGHỆ</h5>
                </a>
            </div>
        </>
    )
}

export default Advertising;