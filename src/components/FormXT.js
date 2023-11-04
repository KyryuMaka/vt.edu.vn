import bgVT from "../images/vtbg.jpg";
import HHLogo from "../images/hhh-newlogo.png";
import VHULogo from "../images/Vhu-logo.png";
import HHELogo from "../images/2-1.png";
import ALCLogo from "../images/AL-logo.png";
import VHLogo from "../images/Van-Hanh-logo.png";
import BMSGLogo from "../images/AURORA-LOGO-1.png"

function FormXT(){
    
    return (
        <>
            <div className="" style={{backgroundImage: `url(${bgVT})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="bg-[#214287]/80">
                    <div className="py-20 container mx-auto">
                        <h1 className="text-center text-white font-bold text-3xl pt-10">Đăng ký xét tuyển</h1>
                        <p className="text-center text-white py-2">*Lưu ý: Sinh viên bắt buộc điền đầy đủ những mục có dấu (*)</p>
                        <form className="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-3 mx-2 lg:mx-40 pb-6">
                            <input id="" className="rounded-md h-10 px-5" type="" placeholder="Họ và tên *" />
                            <input id="" className="rounded-md h-10 px-5" type="date" placeholder="Ngày sinh (dd/mm/yyyy) *" />
                            <input id="" className="rounded-md h-10 px-5" type="" placeholder="Số điện thoại *" />
                            <input id="" className="rounded-md h-10 px-5" type="" placeholder="Email *" />
                            <input id="" className="rounded-md h-10 px-5" type="" placeholder="Bạn đang sống ở đâu *" />
                            <select className="rounded-md h-10 px-5" name="nganhXT" id="nganhXT">
                                <option value="" selected disabled hidden>Chọn ngành xét tuyển *</option>
                                <option value="HuongDanDuLich">Hướng dẫn du lịch</option>
                                <option value="DuLichLuHanh">Du lịch lữ hành</option>
                                <option value="KinhDoanhXuatNhapKhau">Kinh doanh xuất nhập khẩu</option>
                                <option value="TaiChinhNganHang">Tài chính – Ngân hàng</option>
                                <option value="ThuKyVanPhong">Thư ký văn phòng</option>
                                <option value="CNKTCBvaBQTP">Công nghệ kỹ thuật chế biến và bảo quản thực phẩm</option>
                                <option value="ThietKeDoHoa">Thiết kế đồ họa</option>
                                <option value="TinHocUngDung">Tin học ứng dụng</option>
                                <option value="Duoc">Dược</option>
                                <option value="DieuDuong">Điều dưỡng</option>
                            </select>
                        </form>
                        <button type="submit" href=" " className="flex items-center bg-[#49a942] text-white font-bold py-2 px-4 rounded-md mx-auto">Submit</button>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center container px-2 lg:mx-auto pb-24">
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={HHLogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={VHULogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={HHELogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={ALCLogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={VHLogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            <a href=" " className="flex justify-center items-center bg-white">
                                <img src={BMSGLogo} alt="" className="h-10 lg:h-40" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormXT;