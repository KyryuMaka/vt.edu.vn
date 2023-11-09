import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MissionVision(){
    return(
        <>
            <Navbar />
            <div className="text-justify container mx-auto my-10">
                <ol className="list-decimal lg:mx-8 mx-3">
                    <li className="my-5 font-semibold text-gray-600 max-lg:mx-5">
                        Sứ mệnh
                    </li>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Đào tạo người học có phẩm chất đạo đức chính trị, có trình độ 
                        chuyên môn nghiệp vụ chất lượng cao đáp ứng nhu cầu của người 
                        học và của thị trường lao động, phù hợp với sự phát triển của 
                        Thành phố Hồ Chí Minh nói riêng và đất nước nói chung.
                    </p>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Phát triển đồng bộ các yếu tố trong đào tạo nghề như: chương 
                        trình, giáo trình, cơ sở vật chất, trang thiết bị, giáo viên 
                        và cán bộ quản lý để đáp ứng yêu cầu đào tạo nguồn nhân lực 
                        chất lượng cao, có khả năng ứng dụng công nghệ tiên tiến vào 
                        sản xuất, phù hợp với thời kỳ công nghiệp 4.0.
                    </p>
                    <li className="my-5 font-semibold text-gray-600 max-lg:mx-5">
                        Tầm nhìn
                    </li>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Trường Trung cấp Vạn Tường trở thành một Trung tâm đào tạo nghề, 
                        nghiên cứu uy tín ở các lĩnh vực như Kinh tế, Du lịch, Khoa học – 
                        Kỹ thuật và Sức khỏe, đáp ứng tốt nguồn nhân lực chất lượng cao 
                        phục vụ sự phát triển của Thành phố Hồ Chí Minh nói riêng và đất 
                        nước nói chung.
                    </p>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Đến năm 2020, xây dựng Trường Trung cấp Vạn Tường trở thành Trường 
                        Cao đẳng Vạn Tường chất lượng cao của Khu vực miền Nam nói riêng 
                        và cả nước nói chung, đặc biệt ở các ngành nghề trọng điểm như Kinh 
                        tế, Du lịch, Công nghệ thông tin, Kỹ thuật chế biến và bảo quản 
                        thực phẩm…
                    </p>
                    <li className="my-5 font-semibold text-gray-600 max-lg:mx-5">
                        Giá trị cốt lõi
                    </li>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Đào tạo nguồn nhân lực không chỉ đạt về chuẩn mực đạo đức mà 
                        còn giỏi về tay nghề, sẵn sàng đáp ứng nhu cầu của xã hội với 
                        phương châm “Thành nhân trước khi thành danh”.
                    </p>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Tạo môi trường học tập, nghiên cứu thuận lợi để người học phát 
                        huy tính sáng tạo, phát triển năng lực bản thân.
                    </p>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Mang lại cho người học môi trường học tập, nghiên cứu tiên tiến 
                        để nâng cao kiến thức, phát triển kỹ năng nghề, sáng kiến lập 
                        nghiệp, sẵn sàng cạnh tranh việc làm trong thời kỳ hội nhập khu 
                        vực và quốc tế.
                    </p>
                    <p className="my-5 max-lg:mx-5 text-gray-500">
                        Lấy chất lượng đào tạo, nghiên cứu làm thước đo cho sự phát 
                        triển bền vững của Nhà trường.
                    </p>
                </ol>
                
                
            </div>
            <Footer />
        </>
    )
}

export default MissionVision;