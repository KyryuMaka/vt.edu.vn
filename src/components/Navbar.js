import logo from "../images/logo.png";
import { FaPhone, FaFacebook, FaEnvelope, FaYoutube, FaBars, FaChevronDown } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function toggleDrawer(e){
    e.preventDefault();
    var drawer = document.getElementById("drawer");
    var drawer1 = document.getElementById("drawer1");
    drawer.classList.toggle("max-lg:-translate-x-full");
    drawer1.classList.toggle("max-lg:-translate-x-full");
}

function Navbar(){
    return(
        <>
        <nav className="bg-white border-gray-200 py-2">
            <div className="container mx-auto grid grid-cols-3 lg:grid-cols-2">
                <div className="justify-self-start grid content-center ml-3 lg:hidden">
                    <button className="border p-3" onClick={toggleDrawer}><FaBars /></button>
                </div>
                <a href="https://vt.edu.vn/" className="justify-self-center lg:justify-self-start flex">
                    <img src={logo} className="h-20 lg:h-28" alt="Flowbite Logo" />
                    <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap ml-3">TRƯỜNG TRUNG CẤP<br/>VẠN TƯỜNG</span>
                </a>
                <div className="grid content-center justify-self-end">
                    <div className="p-3 hidden lg:flex items-center">
                        <a href="tel:0964 380 333" className="flex items-center text-2xl font-semibold"><FaPhone /><span className="mx-3">0964 380 333</span></a>
                        <a href=" " className="text-4xl font-semibold mx-1 text-[#0866ff]"><FaFacebook /></a>
                        <a href=" " className="text-4xl font-semibold mx-1"><FaEnvelope /></a>
                        <a href=" " className="text-5xl font-semibold mx-1 text-red-600"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </nav>
        <nav 
            id="drawer" 
            className="max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-40 max-lg:h-screen max-lg:w-screen 
                max-lg:overflow-y-auto max-lg:transition-transform max-lg:duration-0 max-lg:-translate-x-full 
                max-lg:bg-[#777]/75 lg:bg-[#234287]"
        >
            <div 
                id="drawer1" 
                className="max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-40 max-lg:h-screen max-lg:p-4 
                    max-lg:overflow-y-auto max-lg:transition-transform max-lg:duration-300 max-lg:-translate-x-full 
                    max-lg:bg-white max-lg:w-64 lg:px-3  lg:mx-auto lg:container" 
                tabIndex="-1"
            >
                {/* <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                    <a href=" " className="text-xl"><FaHome /></a>
                </h5> */}
                <div className="max-lg:overflow-y-auto lg:flex lg:items-center">
                    <ul className="max-lg:space-y-2 font-medium lg:flex lg:flex-row lg:mt-0 lg:text-xs lg:items-center lg:font-semibold">
                        <li className="lg:flex lg:text-white lg:border-r lg:pr-3">
                            <a href=" " className="max-lg:flex max-lg:items-center max-lg:p-2 max-lg:text-gray-900 max-lg:rounded-lg text-xl max-lg:hover:bg-gray-100">
                                <span className="flex-1 text-left whitespace-nowrap"><FaHome /></span>
                                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 font-medium">3</span> */}
                            </a>
                        </li>
                        <li className="group/main lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <p className="flex-1 text-left whitespace-nowrap me-2">GIỚI THIẸU</p>
                                <FaChevronDown />
                            </button>
                            <div className="lg:invisible lg:group-hover/main:visible lg:absolute lg:bg-white lg:z-10 lg:w-max">
                                <ul className="max-lg:py-2 max-lg:space-y-2 lg:text-sm lg:text-gray-700 lg:shadow-2xl">
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Lịch sử phát triển
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Sứ mạng, tầm nhìn
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Sơ đồ đến trường
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Môi trường học tập
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group/main lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <p className="flex-1 text-left whitespace-nowrap me-2">TUYỂN SINH</p>
                                <FaChevronDown />
                            </button>
                            <div className="lg:invisible lg:group-hover/main:visible lg:absolute lg:bg-white lg:z-10 lg:w-max">
                                <ul className="max-lg:py-2 max-lg:space-y-2 lg:text-sm lg:text-gray-700 lg:shadow-2xl">
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh Trung cấp
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Du lịch lữ hành
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Hướng dẫn du lịch
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Thiết kế đồ họa
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Tin học ứng dụng
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Tài chính - Ngân hàng
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Thư ký văn phòng
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Thiết kế và quản lý website
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Kinh doanh xuất nhập khẩu
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Kế toán doanh nghiệp
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Dược
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điều dưỡng
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Công nghệ kỹ thuật chế biến và bảo quản thực phẩm
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Lập trình máy tính
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Quản trị mạng máy tính
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh Sơ cấp
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Nghiệp vụ lễ tân
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Tin học văn phòng
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh Liên thông
                                        </a>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh Đại học hệ trực tuyến
                                        </a>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh Văn bằng 2
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Ngôn ngữ Anh
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <p className="flex-1 text-left whitespace-nowrap me-2">CÁC PHÒNG, BAN</p>
                                <FaChevronDown />
                            </button>
                            <div className="lg:invisible group-hover:visible lg:absolute lg:bg-white lg:z-10 lg:w-max">
                                <ul className="max-lg:py-2 max-lg:space-y-2 lg:text-sm lg:text-gray-700 lg:shadow-2xl">
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Quản lý Đào tạo
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Công tác Sinh viên
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Hành chính nhân sự
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Kế toán
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Tuyển sinh
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <p className="flex-1 text-left whitespace-nowrap me-2">SINH VIÊN</p>
                                <FaChevronDown />
                            </button>
                            <div className="lg:invisible group-hover:visible lg:absolute lg:bg-white lg:z-10 lg:w-max">
                                <ul className="max-lg:py-2 max-lg:space-y-2 lg:text-sm lg:text-gray-700 lg:shadow-2xl">
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Thời khóa biểu
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Thời khóa biểu
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Thông báo
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Thông báo
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Lịch thi
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Lịch thi
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Điểm
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 16
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 17
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 18
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 19
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 20
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 21
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm khóa 22
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Điểm Tốt nghiệp văn hóa/khác
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group/sub">
                                        <a 
                                            href=" " 
                                            className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                        >
                                            Biểu mẫu
                                        </a>
                                        <ul 
                                            className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                        >
                                            <li>
                                                <a 
                                                    href=" " 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                        hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                >
                                                    Biểu mẫu
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <a href=" " className="flex-1 text-left whitespace-nowrap">TIN TỨC - HOẠT ĐỘNG</a>
                            </button>
                        </li>
                        <li className="lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <a href=" " className="flex-1 text-left whitespace-nowrap">QUY ĐỊNH - HƯỚNG DẪN</a>
                            </button>
                        </li>
                        <li className="lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <a href=" " className="flex-1 text-left whitespace-nowrap">ĐÀO TẠO TRỰC TUYẾN</a>
                            </button>
                        </li>
                        <li className="lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <a href=" " className="flex-1 text-left whitespace-nowrap">XÉT TUYỂN ONLINE</a>
                            </button>
                        </li>
                        <li className="lg:text-white lg:inline-block lg:relative lg:pt-3">
                            <button 
                                type="button" 
                                className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                    max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                            >
                                <a href=" " className="flex-1 text-left whitespace-nowrap">LIÊN HỆ</a>
                            </button>
                        </li>
                        <li className="lg:hidden">
                            <div className="p-3 flex items-center">
                                <a href=" " className="text-4xl font-semibold mx-1 text-[#0866ff]"><FaFacebook /></a>
                                <a href=" " className="text-4xl font-semibold mx-1"><FaEnvelope /></a>
                                <a href=" " className="text-5xl font-semibold mx-1 text-red-600"><FaYoutube /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button 
                type="button" 
                onClick={toggleDrawer} 
                className="text-white bg-transparent rounded-lg 
                    text-sm w-8 h-8 absolute top-2.5 right-2.5 
                    inline-flex items-center justify-center 
                    hover:bg-gray-200 hover:text-gray-900" 
            >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
        </nav>
        </>
    )
}

export default Navbar