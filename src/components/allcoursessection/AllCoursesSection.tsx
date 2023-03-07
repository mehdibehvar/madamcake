import "./allcoursessection.scss";
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import CourseCard from "../common/CourseCard";
interface ICard{
    title:string,
    src:string,
    price:number
}
const cardsData:ICard[]=[
    {
    title:"کیک های کافی شاپی",
    src:"1.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},
{
    title:"دکو اسپونج",
    src:"2.png",
     price:980000
},

]
const AllCoursesSection = () => {
  return (
    <section className="all_courses_section ">
        <div className="header d-flex justify-content-between">
            <div className="right flex-center ">
               <img className="d-none d-sm-block" src="/assets/images/cherry.png" alt="cherry" />
               <h4 className="fs-34 d-none d-sm-block text-secondary fw-bold m-0 p-0"><span className="text-primary-75">شیرینی</span> و کیک هاش کافی شاپی</h4>
               <h4 className="fs-34 d-block d-sm-none text-secondary fw-bold m-0 p-0"><span className="text-primary-75">جدیدترین </span>دوره ها</h4>
            </div>
            <div className="left flex-center ">
                <button className="d-none d-sm-block border border-1  bg-none flex-center p-3 fs-16 text-black">مشاهده همه</button>
                <button className="d-block d-sm-none border border-1  bg-none flex-center p-3 fs-16 text-black">همه</button>
            </div>
        </div>
        <div className="slider_wrapper  mt-5">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={4}
    //   onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="d-none d-sm-block"
    >
    
{cardsData.map((item,index)=><SwiperSlide key={index}><CourseCard  title={item.title} src={item.src} price={item.price}/></SwiperSlide>)}
         </Swiper>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={-27}
      slidesPerView={1}
    //   onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="d-block d-sm-none"
    >
    
{cardsData.map((item,index)=><SwiperSlide key={index}><CourseCard  title={item.title} src={item.src} price={item.price}/></SwiperSlide>)}
         </Swiper>
    <div className="box_shadow"></div>
        </div>
    </section>
  )
}

export default AllCoursesSection