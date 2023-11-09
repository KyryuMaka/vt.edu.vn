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

const dataTest = [{
    name: "GIỚI THIỆU",
    link: "/gioi-thieu/",
    children: [{
        name: "Lịch sử phát triển",
        link: "/gioi-thieu/lich-su-phat-trien/",
        children: []
    },{
        name: "Sứ mạng, tầm nhìn",
        link: "/gioi-thieu/su-mang-tam-nhin/",
        children: []
    },{
        name: "Sơ đồ đến trường",
        link: "/gioi-thieu/so-do-den-truong/",
        children: []
    },{
        name: "Môi trường học tập",
        link: "/gioi-thieu/moi-truong-hoc-tap/",
        children: []
    }]
},{
    name: "TUYỂN SINH",
    link: "/category/tuyen-sinh/",
    children: [{
        name: "Tuyển sinh Trung cấp",
        link: "/tuyen-sinh/trung-cap/",
        children: [{
            name: "Du lịch lữ hành",
            link: "/tuyen-sinh/trung-cap/du-lich-lu-hanh/",
            children: []
        },{
            name: "Hướng dẫn du lịch",
            link: "/tuyen-sinh/trung-cap/huong-dan-du-lich/",
            children: []
        },{
            name: "Thiết kế đồ họa",
            link: "/tuyen-sinh/trung-cap/thiet-ke-do-hoa/",
            children: []
        },{
            name: "Tin học ứng dụng",
            link: "/tuyen-sinh/trung-cap/tin-hoc-ung-dung/",
            children: []
        },{
            name: "Tài chính – Ngân hàng",
            link: "/tuyen-sinh/trung-cap/tai-chinh-ngan-hang/",
            children: []
        },{
            name: "Thư ký văn phòng",
            link: "/tuyen-sinh/trung-cap/thu-ky-van-phong/",
            children: []
        },{
            name: "Thiết kế và quản lý website",
            link: "/tuyen-sinh/trung-cap/thiet-ke-va-quan-ly-website/",
            children: []
        },{
            name: "Kinh doanh xuất nhập khẩu",
            link: "/tuyen-sinh/trung-cap/kinh-doanh-xuat-nhap-khau/",
            children: []
        },{
            name: "Kế toán doanh nghiệp",
            link: "/tuyen-sinh/trung-cap/ke-toan-doanh-nghiep/",
            children: []
        },{
            name: "Dược",
            link: "/tuyen-sinh/trung-cap/duoc",
            children: []
        },{
            name: "Điều dưỡng",
            link: "/tuyen-sinh/trung-cap/dieu-duong/",
            children: []
        },{
            name: "Công nghệ kỹ thuật chế biến và bảo quản thực phẩm",
            link: "/tuyen-sinh/trung-cap/cong-nghe-ky-thuat-che-bien-va-bao-quan-thuc-pham/",
            children: []
        },{
            name: "Lập trình máy tính",
            link: "/tuyen-sinh/trung-cap/lap-trinh-may-tinh/",
            children: []
        },{
            name: "Quản trị mạng máy tính",
            link: "/tuyen-sinh/trung-cap/quan-tri-mang-may-tinh/",
            children: []
        }]
    },{
        name: "Tuyển sinh Sơ cấp",
        link: "/tuyen-sinh/so-cap/",
        children: [{
            name: "Nghiệp vụ lễ tân",
            link: "/tuyen-sinh/so-cap/nghiep-vu-le-tan-sc/",
            children: []
        },{
            name: "Tin học văn phòng",
            link: "/tuyen-sinh/so-cap/tin-hoc-van-phong-sc/",
            children: []
        }]
    },{
        name: "Tuyển sinh Liên thông",
        link: "/tuyen-sinh/lien-thong/",
        children: []
    },{
        name: "Tuyển sinh Đại học hệ trực tuyến",
        link: "/tuyen-sinh/tuyen-sinh-dai-hoc-he-truc-tuyen/",
        children: []
    },{
        name: "Tuyển sinh Văn bằng 2",
        link: "/tuyen-sinh/van-bang-2/",
        children: [{
            name: "Ngôn ngữ Anh",
            link: "/tuyen-sinh/van-bang-2/ngon-ngu-anh-vb2/",
            children: []
        }]
    }]
},{
    name: "CÁC PHÒNG, BAN",
    link: "/phong-ban/",
    children:[{
        name: "Quản lý Đào tạo",
        link: "/phong-ban/quan-ly-dao-tao/",
        children:[]
    },{
        name: "Công tác Sinh viên",
        link: "/phong-ban/cong-tac-sinh-vien-va-huong-nghiep/",
        children:[]
    },{
        name: "Hành chính nhân sự",
        link: "/phong-ban/hanh-chinh-nhan-su/",
        children:[]
    },{
        name: "Kế toán",
        link: "/phong-ban/tai-chinh-ke-toan/",
        children:[]
    },{
        name: "Tuyển sinh",
        link: "/phong-ban/tuyen-sinh-truyen-thong/",
        children:[]
    }]
},{
    name: "SINH VIÊN",
    link: "#",
    children:[{
        name: "Thời khóa biểu",
        link: "/category/thoi-khoa-bieu/",
        children:[{
            name: "Thời khóa biểu",
            link: "/category/thoi-khoa-bieu/",
            children:[]
        }]
    },{
        name: "Thông báo",
        link: "/category/thong-bao/",
        children:[{
            name: "Thông báo",
            link: "/category/thong-bao/",
            children:[]
        }]
    },{
        name: "Lịch thi",
        link: "/category/lich-thi/",
        children:[{
            name: "Lịch thi",
            link: "/category/lich-thi/",
            children:[]
        }]
    },{
        name: "Điểm",
        link: "#",
        children:[{
            name: "Điểm khóa 16",
            link: "/category/diem-khoa-16/",
            children:[]
        },{
            name: "Điểm khóa 17",
            link: "/category/diem-khoa-17/",
            children:[]
        },{
            name: "Điểm khóa 18",
            link: "//category/diem-khoa-18/",
            children:[]
        },{
            name: "Điểm khóa 19",
            link: "//category/diem-khoa-19/",
            children:[]
        },{
            name: "Điểm khóa 20",
            link: "/category/diem-khoa-20/",
            children:[]
        },{
            name: "Điểm khóa 21",
            link: "/category/diem-khoa-21/",
            children:[]
        },{
            name: "Điểm khóa 22",
            link: "/category/diem-khoa-22/",
            children:[]
        },{
            name: "Điểm Tốt nghiệp văn hóa/Khác",
            link: "/category/diem-tot-nghiep-van-hoa-khac/",
            children:[]
        }]
    },{
        name: "Biểu mẫu",
        link: "#",
        children:[{
            name: "Biểu mẫu",
            link: "/category/bieu-mau/",
            children:[]
        }]
    }]
},{
    name: "TIN TỨC - HOẠT ĐỘNG",
    link: "/category/tin-tuc-hoat-dong/",
    children:[]
},{
    name: "QUY ĐỊNH - HƯỚNG DẪN",
    link: "/category/quy-dinh-huong-dan/",
    children:[]
},{
    name: "ĐÀO TẠO TRỰC TUYẾN",
    link: "/category/dao-tao-truc-tuyen/",
    children:[]
},{
    name: "XÉT TUYỂN ONLINE",
    link: "https://xettuyen.vt.edu.vn/",
    children:[]
},{
    name: "LIÊN HỆ",
    link: "/lien-he/",
    children:[]
}]

function Navbar(){
    return(
        <>
        <nav className="bg-white border-gray-200 py-2">
            <div className="container mx-auto grid grid-cols-3 lg:grid-cols-2">
                <div className="justify-self-start grid content-center ml-3 lg:hidden">
                    <button className="border p-3" onClick={toggleDrawer}><FaBars /></button>
                </div>
                <a href="/" className="justify-self-center lg:justify-self-start flex">
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
                            <a href="/" className="max-lg:flex max-lg:items-center max-lg:p-2 max-lg:text-gray-900 max-lg:rounded-lg text-xl max-lg:hover:bg-gray-100">
                                <span className="flex-1 text-left whitespace-nowrap"><FaHome /></span>
                                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 font-medium">3</span> */}
                            </a>
                        </li>
                        {(dataTest.length === 0)?<></>:dataTest.map((dt)=>(
                            (dt.children.length === 0)?
                            <li className="lg:text-white lg:inline-block lg:relative lg:pt-3" key={dt.name}>
                                <button 
                                    type="button" 
                                    className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                        max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                                >
                                    <a href={dt.link} className="flex-1 text-left whitespace-nowrap">{dt.name}</a>
                                </button>
                            </li>:
                            <li className="group/main lg:text-white lg:inline-block lg:relative lg:pt-3" key={dt.name}>
                                <a 
                                    href={dt.link}
                                    className="flex items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                        max-lg:rounded-lg max-lg:hover:bg-gray-100 lg:border-r lg:px-3 lg:mb-3"
                                >
                                    <p className="flex-1 text-left whitespace-nowrap me-2">{dt.name}</p>
                                    <FaChevronDown />
                                </a>
                                <div className="lg:invisible lg:group-hover/main:visible lg:absolute lg:bg-white lg:z-10 lg:w-max">
                                    <ul className="max-lg:py-2 max-lg:space-y-2 lg:text-sm lg:text-gray-700 lg:shadow-2xl">
                                        {dt.children.map((dc) => (
                                            <li key={dc.name} className="group/sub">
                                                <a 
                                                    href={dc.link} 
                                                    className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                        max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-6 max-lg:group 
                                                        hover:bg-[#fbae3c] hover:text-white lg:block lg:px-4 lg:py-2"
                                                >
                                                    {dc.name}
                                                </a>
                                                <ul 
                                                    className="lg:invisible lg:group-hover/sub:visible lg:shadow-xl 
                                                        lg:absolute lg:left-full lg:-mt-9 lg:bg-white 
                                                        lg:z-10 lg:w-full lg:text-sm lg:text-gray-700"
                                                >
                                                    {(dc.children.length === 0)?<></>:dc.children.map((dcc) => (
                                                        <li key={dcc.name}>
                                                            <a 
                                                                href={dcc.link} 
                                                                className="max-lg:flex max-lg:items-center max-lg:w-full max-lg:p-2 max-lg:text-gray-900 
                                                                    max-lg:transition max-lg:duration-75 max-lg:rounded-lg max-lg:pl-12 max-lg:group 
                                                                    hover:bg-[#2e8927] hover:text-white lg:block lg:px-4 lg:py-2 lg:text-[#2e8927]"
                                                            >
                                                                {dcc.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
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