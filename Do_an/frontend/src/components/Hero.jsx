import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import baby1  from '../assets/img/baby1.jpg';
import baby2  from '../assets/img/baby2.jpg';
import baby3  from '../assets/img/baby3.jpg';
import baby4  from '../assets/img/baby4.jpg';
import baby5  from '../assets/img/baby5.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[600px] mt-[100px]">
      <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
        <SwiperSlide className="w-full flex items-center justify-center"><img src={baby1} alt="baby" className="w-full h-full object-cover"/></SwiperSlide>
        <SwiperSlide className="w-full flex items-center justify-center"><img src={baby2} alt="baby" className="w-full h-full object-cover"/></SwiperSlide>
        <SwiperSlide className="w-full flex items-center justify-center"><img src={baby3} alt="baby" className="w-full h-full object-cover"/></SwiperSlide>
        <SwiperSlide className="w-full flex items-center justify-center"><img src={baby4} alt="baby" className="w-full h-full object-cover"/></SwiperSlide>
        <SwiperSlide className="w-full flex items-center justify-center"><img src={baby5} alt="baby" className="w-full h-full object-cover"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero