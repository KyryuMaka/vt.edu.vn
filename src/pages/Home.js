import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import RecentNews from '../components/RecentNews';
import Info8block from '../components/Info8block';
import TabCTDT from '../components/TabCTDT';
import TSNotification from '../components/TSNotification';
import FormXT from '../components/FormXT';
import Footer from '../components/Footer';

function Home(){
    return(
        <>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-3">
                <Carousel />
                </div>
                <div className="lg:bg-[#2E8927]">
                <RecentNews />
                </div>
            </div>
            <div className="container mx-auto">
                
                
                <Info8block />
                <TabCTDT />
                
            </div>
            <TSNotification />
            <FormXT />
            <Footer />
        </>
    )
}

export default Home;