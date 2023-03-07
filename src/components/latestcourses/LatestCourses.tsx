import "./latestcourses.scss";

import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import CourseCard from "../common/CourseCard";
interface ICard {
  title: string;
  src: string;
  price: number;
}
const cardsData: ICard[] = [
  {
    title: "کیک های کافی شاپی",
    src: "1.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
  {
    title: "دکو اسپونج",
    src: "2.png",
    price: 980000,
  },
];
const LatestCourses = () => {
  return (
    <section className="latest_courses_section container-fluid ">
      <div className="content">
        <div className="header d-flex justify-content-between">
          <div className="right flex-center ">
            <h4 className="fs-34  text-white fw-bold m-0 p-0">اخرین دوره ها</h4>
          </div>
          <div className="left flex-center d-none d-sm-flex">
            <span className=" flex-center p-3 fs-16 text-white">
              شیرینی مدرن{" "}
            </span>
            <span className=" flex-center p-3 fs-16 text-white">
              شیرینی سنتی
            </span>
            <span className="border border-1 border-white flex-center p-3 fs-16 text-white">
              مشاهده همه
            </span>
          </div>
        </div>
        <div className="slider_wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            //   onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="d-none d-sm-block"
          >
            {cardsData.map((item, index) => (
              <SwiperSlide key={index}>
                <CourseCard
                  title={item.title}
                  src={item.src}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            //   onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="d-block d-sm-none"
          >
            {cardsData.map((item, index) => (
              <SwiperSlide key={index}>
                <CourseCard
                  title={item.title}
                  src={item.src}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="box_shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;
