import { useEffect, useState } from "react";
import DLLHIcon from "../images/icons/DLLH.png";
import HDDLIcon from "../images/icons/HDDL.png";
import TKDHIcon from "../images/icons/TKDH.png";
import THUDIcon from "../images/icons/THUD.png";
import TCNHIcon from "../images/icons/TCNH.png";
import TKVPIcon from "../images/icons/TKVP.png";
import TKnQLWebIcon from "../images/icons/TK&QLWeb.png";
import KDXNKIcon from "../images/icons/KDXNK.png";
import KTDNIcon from "../images/icons/KTDN.png";
import DuocIcon from "../images/icons/Duoc.png";
import DieuDuongIcon from "../images/icons/DieuDuong.png";
import CNKTCBnBQTPIcon from "../images/icons/CNKTCB&BQTP.png";
import LTMTIcon from "../images/icons/LTMT.png";
import QTMMTIcon from "../images/icons/QTMMT.png";
import KTCBMAIcon from "../images/icons/KTCBMA.png";
import MarketingIcon from "../images/icons/Marketing.png";
import QTKSIcon from "../images/icons/QTKS.png";

import CNTTIcon from "../images/icons/CNTT.png";
import KTDTVTIcon from "../images/icons/KTDTVT.png";
import NNAIcon from "../images/icons/NNA.png";
import QTDVDLnLH from "../images/icons/QTDVDL&LH.png";
import QTKDIcon from "../images/icons/QTKD.png";

import KTIcon from "../images/icons/KeToan.png";
import LuatIcon from "../images/icons/Luat.png";
import KTLIcon from "../images/icons/KTLuat.png";

import NVLTIcon from "../images/icons/NVLT.png";
import THVPIcon from "../images/icons/THVP.png";


function TabCTDT(){
    function click(e){
        //Thay đổi content
        var id1 = e.target.id; //Lấy id của button đang chọn
        var content = "";
        switch(id1){
            case "tc": 
                content = ` 
                    <div class="text-center my-10">
                        <img src=${DLLHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Du lịch lữ hành</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${HDDLIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Hướng dẫn du lịch</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKDHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Thiết kế đồ họa</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${THUDIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tin học ứng dụng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TCNHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tài chính ngân hàng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKVPIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tài chính văn phòng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKnQLWebIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Thiết kế và quản lý website</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KDXNKIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kinh doanh xuất nhập khẩu</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTDNIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kế toán doanh nghiệp</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${DuocIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Dược</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${DieuDuongIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Điều dưỡng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${CNKTCBnBQTPIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Công nghệ kỹ thuật chế biến và bảo quản thực phẩm</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${LTMTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Lập trình máy tính</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTMMTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị mạng máy tính</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTCBMAIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kỹ thuật chế biến món ăn</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${MarketingIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Marketing</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTKSIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị khách sạn</p>
                    </div>
                `; 
                break;
            case "lt":
                content = ` 
                    <div class="text-center my-10">
                        <img src=${CNTTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Công nghệ thông tin</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTDTVTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kỹ thuật điện tử - viễn thông</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${NNAIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Ngôn ngữ Anh</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTDVDLnLH} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị dịch vụ du lịch <br /> và lữ hành</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTKSIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị khách sạn</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTKDIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị kinh doanh</p>
                    </div>
                `;
                break;
            case "vb2": 
                content = ` <div class="text-center my-10">
                                <img src=${NNAIcon} alt="" class="w-2/5 mx-auto"/>
                                <p class="text-[#555] font-bold pt-1">Ngôn ngữ Anh</p>
                            </div>`;  
                break;
            case "dhtx": 
                content = ` 
                    <div class="text-center my-10">
                        <img src=${CNTTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Công nghệ thông tin</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kế toán</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${LuatIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Luật</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTLIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kinh tế luật</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${NNAIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Ngôn ngữ Anh</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTDVDLnLH} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị dịch vụ du lịch <br /> và lữ hành</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTKDIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị kinh doanh</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TCNHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tài chính ngân hàng</p>
                    </div>
                `;
                break;
            case "sc":
                content = ` 
                    <div class="text-center my-10">
                        <img src=${NVLTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Nghiệp vụ lễ tân</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${THVPIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tin học văn phòng</p>
                    </div>
                `;
                break;
            default: 
                content = ` 
                    <div class="text-center my-10">
                        <img src=${DLLHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Du lịch lữ hành</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${HDDLIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Hướng dẫn du lịch</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKDHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Thiết kế đồ họa</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${THUDIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tin học ứng dụng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TCNHIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tài chính ngân hàng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKVPIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Tài chính văn phòng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${TKnQLWebIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Thiết kế và quản lý website</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KDXNKIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kinh doanh xuất nhập khẩu</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTDNIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kế toán doanh nghiệp</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${DuocIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Dược</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${DieuDuongIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Điều dưỡng</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${CNKTCBnBQTPIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Công nghệ kỹ thuật chế biến và bảo quản thực phẩm</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${LTMTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Lập trình máy tính</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTMMTIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị mạng máy tính</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${KTCBMAIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Kỹ thuật chế biến món ăn</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${MarketingIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Marketing</p>
                    </div>
                    <div class="text-center my-10">
                        <img src=${QTKSIcon} alt="" class="w-2/5 mx-auto"/>
                        <p class="text-[#555] font-bold pt-1">Quản trị khách sạn</p>
                    </div>
                `;
        }
        document.getElementById("content").innerHTML=content;

        //toogle class active
        var x = document.getElementById("tabnav").querySelectorAll(".active");
        x[0].classList.remove("active")
        document.getElementById(id1).classList.add("active");
    }

    return (
        <>
        <div className="py-3">
            <h1 className="text-center font-bold text-[#555] my-5 text-4xl">Chương trình đào tạo</h1>
            <div id="tabnav" className="flex flex-wrap items-center justify-center">
                <button id="tc" onClick={click} className="rounded-full bg-[#eeeeee] hover:bg-[#49A942] hover:text-white p-3 m-2 text-[#777] text-xs font-bold active">
                    TRUNG CẤP
                </button>
                <button id="lt" onClick={click} className="rounded-full bg-[#eeeeee] hover:bg-[#49A942] hover:text-white p-3 m-2 text-[#777] text-xs font-bold">
                    LIÊN THÔNG
                </button>
                <button id="vb2" onClick={click} className="rounded-full bg-[#eeeeee] hover:bg-[#49A942] hover:text-white p-3 m-2 text-[#777] text-xs font-bold">
                    VĂN BẰNG 2
                </button>
                <button id="dhtx" onClick={click} className="rounded-full bg-[#eeeeee] hover:bg-[#49A942] hover:text-white p-3 m-2 text-[#777] text-xs font-bold">
                    ĐẠI HỌC HỆ TỪ XA
                </button>
                <button id="sc" onClick={click} className="rounded-full bg-[#eeeeee] hover:bg-[#49A942] hover:text-white p-3 m-2 text-[#777] text-xs font-bold">
                    SƠ CẤP
                </button>
            </div>
            <div id="content" className="grid grid-cols-2 lg:grid-cols-6 justify-items-center">
                <div className="text-center my-10">
                    <img src={DLLHIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Du lịch lữ hành</p>
                </div>
                <div className="text-center my-10">
                    <img src={HDDLIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Hướng dẫn du lịch</p>
                </div>
                <div className="text-center my-10">
                    <img src={TKDHIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Thiết kế đồ họa</p>
                </div>
                <div className="text-center my-10">
                    <img src={THUDIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Tin học ứng dụng</p>
                </div>
                <div className="text-center my-10">
                    <img src={TCNHIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Tài chính ngân hàng</p>
                </div>
                <div className="text-center my-10">
                    <img src={TKVPIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Tài chính văn phòng</p>
                </div>
                <div className="text-center my-10">
                    <img src={TKnQLWebIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Thiết kế và quản lý website</p>
                </div>
                <div className="text-center my-10">
                    <img src={KDXNKIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Kinh doanh xuất nhập khẩu</p>
                </div>
                <div className="text-center my-10">
                    <img src={KTDNIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Kế toán doanh nghiệp</p>
                </div>
                <div className="text-center my-10">
                    <img src={DuocIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Dược</p>
                </div>
                <div className="text-center my-10">
                    <img src={DieuDuongIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Điều dưỡng</p>
                </div>
                <div className="text-center my-10">
                    <img src={CNKTCBnBQTPIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Công nghệ kỹ thuật chế biến và bảo quản thực phẩm</p>
                </div>
                <div className="text-center my-10">
                    <img src={LTMTIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Lập trình máy tính</p>
                </div>
                <div className="text-center my-10">
                    <img src={QTMMTIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Quản trị mạng máy tính</p>
                </div>
                <div className="text-center my-10">
                    <img src={KTCBMAIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Kỹ thuật chế biến món ăn</p>
                </div>
                <div className="text-center my-10">
                    <img src={MarketingIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Marketing</p>
                </div>
                <div className="text-center my-10">
                    <img src={QTKSIcon} alt="" className="w-2/5 mx-auto"/>
                    <p className="text-[#555] font-bold pt-1">Quản trị khách sạn</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TabCTDT;