import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import banner1 from "../images/Banner1.png"
import banner2 from "../images/Banner2.jpg"
import banner3 from "../images/Banner3.png"

function Carousel(){
    const [slides, setSlides] = useState();

    let slideIndex = 1;
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

    // function showSlidesAuto() {
    //     for (var i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}
    //     slides[slideIndex-1].style.display = "block";
    //     setTimeout(showSlidesAuto, 10000); // Change image every 2 seconds
    // }

    useEffect(()=>{
        setSlides(document.getElementsByClassName("mySlides"));
        if(slides !== undefined){
            showSlides(slideIndex, slides); //Bật dòng này thì tắt dòng dưới
            // showSlidesAuto(slides); //Bật lên để chạy tự động và tắt dòng trên
        }
        // eslint-disable-next-line
    },[slides])
    

    return(
        <>        
        <div className="slideshow-container min-w-[20px] relative m-auto">
            <div className="mySlides hidden">
                <img src={banner1} className="w-full" alt="..." />
            </div>

            <div className="mySlides hidden">
                <img src={banner2} className="w-full" alt="..." />
            </div>

            <div className="mySlides hidden">
                <img src={banner3} className="w-full" alt="..." />
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