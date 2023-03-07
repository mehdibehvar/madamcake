
import "./cofeeshopsection.scss";
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import CourseCard from "../common/CourseCard";
import TailRectangle from "../common/TailRectangle";
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
const CofeeShopSection = () => {
  return (
    <section className="cofeeshop_section position-relative">
         <TailRectangle borderclass="border-pink-3"/>
    <div className="header d-flex justify-content-between ">
    
        <div className="right flex-center ">
           <h4 className="fs-34 d-flex text-secondary fw-bold m-0 p-0">
         
           <span className="d-none d-sm-block">دوره های</span> جشنواره
           <span className="text-primary-75">  پاییزه </span></h4>
     
        </div>
        <div className="left flex-center ">
            <button className="d-none d-sm-block border-cyan-1 bg-none flex-center p-3 fs-16 text-secondary">مشاهده همه</button>
            <button className="d-block d-sm-none border border-1 bg-none flex-center p-3 fs-16 text-secondary-25">همه</button>
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

export default CofeeShopSection