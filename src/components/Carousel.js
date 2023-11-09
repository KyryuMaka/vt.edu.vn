import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import banner1 from "../images/carouselImg/Banner1.png";
import banner2 from "../images/carouselImg/Banner2.jpg";
import banner3 from "../images/carouselImg/Banner3.png";
import banner4 from "../images/carouselImg/Banner4.jpg";
import banner5 from "../images/carouselImg/Banner5.png";
import banner6 from "../images/carouselImg/Banner6.jpg";
import banner7 from "../images/carouselImg/Banner7.png";
import banner8 from "../images/carouselImg/Banner8.png";
import banner9 from "../images/carouselImg/Banner9.jpg";
import banner10 from "../images/carouselImg/Banner10.png";
import banner11 from "../images/carouselImg/Banner11.jpg";
import banner12 from "../images/carouselImg/Banner12.jpg";
import banner13 from "../images/carouselImg/Banner13.png";

function Carousel(props){
    const [slides, setSlides] = useState();

    let slideIndex = 0;
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n, slides);
    }

    function showSlides(n, slides) {
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    function showSlidesAuto() {
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
    }

    useEffect(()=>{
        setSlides(document.getElementsByClassName(props.id));
        if(slides !== undefined){
            // showSlides(slideIndex, slides); //Bật dòng này thì tắt dòng dưới
            showSlidesAuto(slides); //Bật lên để chạy tự động và tắt dòng trên
        }
        // eslint-disable-next-line
    },[slides])
    

    return(
        <>        
        <div className="min-w-[20px] relative m-auto">
            <div className={`${props.id} hidden`}>
                <img src={banner1} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner2} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner3} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner4} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner5} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner6} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner7} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner8} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner9} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner10} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner11} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner12} className="w-full" alt="..." />
            </div>
            <div className={`${props.id} hidden`}>
                <img src={banner13} className="w-full" alt="..." />
            </div>
            <button id="prev" onClick={() => (slides !== undefined)?plusSlides(-1):console.log("vt.edu.vn")} 
                className="cursor-pointer absolute w-auto top-1/2 lg:-mt-[22px] -mt-3 lg:p-[16px] p-2 lg:ml-10 ml-1
                    text-white font-bold lg:text-[18px] text-sm bg-sky-600
                    transition duration-75 ease-in-out rounded-full hover:bg-sky-600/70">
                <FaAngleLeft />
            </button>
            <button id="next" onClick={() => (slides !== undefined)?plusSlides(1):console.log("vt.edu.vn")} 
                className="cursor-pointer absolute w-auto top-1/2 lg:-mt-[22px] -mt-3 lg:p-[16px] p-2 lg:mr-10 mr-1
                    text-white font-bold lg:text-[18px] text-sm bg-sky-600
                    transition duration-75 ease-in-out rounded-full hover:bg-sky-600/70 right-0">
                <FaAngleRight />
            </button>
        </div>
        </>
    )
}

export default Carousel;