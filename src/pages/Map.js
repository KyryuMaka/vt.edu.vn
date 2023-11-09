import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Map(){
    return(
        <>
            <Navbar />
            <div className="container mx-auto my-10 w-full flex items-center justify-center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5863963710876!2d106.67207661148545!3d10.76632498933755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f94177a522f%3A0xce9e70b86f07c16a!2zVHLGsOG7nW5nIFRydW5nIEPhuqVwIFbhuqFuIFTGsOG7nW5n!5e0!3m2!1svi!2s!4v1699244258255!5m2!1svi!2s" 
                    width="1200" height="450" style={{border: "0"}} title=" " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer />
        </>
    )
}

export default Map;