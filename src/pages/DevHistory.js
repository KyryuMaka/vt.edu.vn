import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DevHistory(){
    return(
        <>
            <Navbar />
            <div className="text-justify container mx-auto my-10">
                <p className="my-5 max-lg:mx-5">
                    Trường Trung Cấp Vạn Tường được thành lập theo Quyết định số 6577/QĐ-UB ngày 10/10/2001 
                    của Chủ tịch Uỷ ban Nhân dân thành phố Hồ Chí Minh với tên gọi ban đầu là Trường Trung 
                    học tư thục Kinh tế – Kỹ thuật Vạn Tường. Ngày 25/5/2009 Trường đổi tên thành Trường 
                    Trung cấp Vạn Tường theo Quyết định số 2580/QĐ-UBND của Chủ tịch UBND thành phố Hồ Chí Minh.
                </p>
                <p className="my-5 max-lg:mx-5">
                    Tháng 01 năm 2017 đánh dấu cột mốc quan trọng trong quá trình hình thành và phát triển 
                    của Nhà trường, đó là Trường Trung cấp Vạn Tường chính thức là thành viên Hệ thống giáo 
                    dục HEDU, trực thuộc Công ty Cổ phần Phát triển Hùng Hậu – HungHau Holdings. Hệ thống 
                    giáo dục HEDU gồm 5 trường thành viên, bao gồm: ĐH Văn Hiến, CĐ KT-CN Vạn Xuân, TC Vạn 
                    Tường, TC Y – Dược Vạn Hạnh, TC Âu Lạc – Huế và Trường mầm non Âu Lạc. Với triết lý giáo 
                    dục “Thành nhân trước thành danh”, Hệ thống giáo dục HEDU nói chung và Trường Trung cấp 
                    Vạn Tường nói riêng luôn quan tâm đặc biệt đến sự phát triển toàn diện của học sinh, sinh viên.
                </p>
                <p className="my-5 max-lg:mx-5">
                    Ngày 11/7/2017, Vạn Tường hoàn thành đăng ký Hoạt động giáo dục nghề nghiệp theo giấy 
                    chứng nhận số 25/GCNĐKHĐ-SLĐTBXH của Sở Lao động Thương binh & Xã hội TPHCM.
                </p>
                <p className="my-5 max-lg:mx-5">
                    Từ năm học 2017-2018, trường chính thức áp dụng chương trình đào tạo theo hệ thống tín chỉ 
                    trong hoạt động đào tạo, đây được xem như hình thức đào tạo linh hoạt, hiện đại và phù hợp 
                    với xu thế phát triển của xã hội.
                </p>
                <p className="my-5 max-lg:mx-5">
                    Với hơn 17 năm hình thành và phát triển, Trường Trung cấp Vạn Tường tự hào là trường trung 
                    cấp ngoài công lập đầu tiên tại thành phố Hồ Chí Minh trong lĩnh vực đào tạo nghề, góp 
                    phần không nhỏ vào công cuộc công nghiệp hóa, hiện đại hóa đất nước. Với những nỗ lực 
                    không ngừng, những đóng góp bằng sức lực và tâm huyết của nhiều thế hệ, Trường Trung cấp 
                    Vạn Tường đã nhận được nhiều bằng khen, cờ thi đua của UBND TP. HCM, Công đoàn ngành Giáo dục, 
                    Sở Giáo dục và Đào tạo TP. HCM, Bảng vàng của UNESCO, Kỷ niệm chương của Chủ tịch nước Trương 
                    Tấn Sang… Với những thành tích đã đạt được trong gần hai thập kỷ qua, Trường Trung cấp Vạn 
                    Tường tự hào đã cung cấp cho xã hội một đội ngũ nguồn nhân lực không chỉ đạt về chuẩn mực 
                    đạo đức mà còn giỏi về tay nghề, kỹ năng sống, sẵn sàng đáp ứng nhu cầu của xã hội với 
                    phương châm “Thành nhân trước khi thành danh”, góp phần không nhỏ vào sự phát triển của 
                    Tp. Hồ Chí Minh nói riêng và cả nước nói chung.
                </p>
                <p className="my-5 max-lg:mx-5">
                    Với những nỗ lực không ngừng, những đóng góp bằng sức lực và tâm huyết của nhiều thế hệ, 
                    Trường Trung cấp Vạn Tường đã nhận được nhiều Bằng khen, Cờ thi đua của UBND thành phố Hồ 
                    Chí Minh, Sở Giáo dục và Đào tạo… Với những thành tích đã đạt được trong gần hai thập kỷ qua, 
                    Trường Trung cấp Vạn Tường tự hào cung cấp cho xã hội một đội ngũ nguồn nhân lực không chỉ 
                    hoàn thiện về nhân phẩm mà còn giỏi về tay nghề, góp phần không nhỏ vào sự phát triển của 
                    Thành phố Hồ Chí Minh nói riêng và đất nước nói chung.
                </p>
                <form className="p-10 bg-[#000000]/[.05] mt-10">
                    <p className="font-semibold text-xl">Trả lời</p>
                    <p className="my-5 font-medium text-gray-500">Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                    <div className="my-5">
                        <label for="message" className="font-bold text-sm">Bình luận*</label>
                        <textarea 
                            id="message" rows="5" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30" 
                            required
                        ></textarea>
                    </div>
                    <div className="grid max-lg:grid-cols-1 max-lg:gap-y-5 lg:grid-cols-3 lg:gap-x-10 my-5">
                        <div>
                            <label for="email" className="font-bold text-sm">Tên*</label>
                            <input type="text" id="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        </div>
                        <div>
                            <label for="email" className="font-bold text-sm">Email*</label>
                            <input type="email" id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        </div>
                        <div>
                            <label for="email" className="font-bold text-sm">Trang web</label>
                            <input type="email" id="web" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                    </div>
                    <div className="flex items-center my-5">
                        <input id="saveInfo" type="checkbox" className="max-lg:w-12 max-lg:h-12 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                        <label for="saveInfo" className="ml-2 text-sm font-bold">Lưu tên của tôi, email và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi</label>
                    </div>
                    <button type="submit" className="bg-[#0079c1] text-white font-bold py-2 px-4 rounded-md">PHẢN HỒI</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default DevHistory;