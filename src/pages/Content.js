import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Advertising from '../components/Advertising';

function Content(){
    return(
        <>
            <Navbar />
            <div className="grid justify-items-center my-3 max-lg:grid-cols-1 lg:grid-cols-3 lg:container lg:mx-auto">
                <div className="lg:col-span-2">
                    <Post />
                </div>
                <div>
                    <Advertising />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Content;