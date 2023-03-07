import GalleryCard from "../common/gallerycard/GalleryCard";
import TailRectangle from "../common/TailRectangle";
import "./articlesection.scss";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
interface IArticleData {
  src: string;
  title: string;
}
const articleData: IArticleData[] = [
  {
    src: "g1.png",
    title: "۵ روش برای تزئین",
  },
  {
    src: "g2.png",
    title: "۵ روش برای تزئین",
  },
  {
    src: "g3.png",
    title: "۵ روش برای تزئین",
  },
  {
    src: "g4.png",
    title: "۵ روش برای تزئین",
  },
  {
    src: "g5.png",
    title: "۵ روش برای تزئین",
  },
  {
    src: "g6.png",
    title: "۵ روش برای تزئین",
  },
];
const ArticlesSection = () => {
  return (
    <section className="articles_section position-relative">
      <TailRectangle borderclass={"border-primary-3"} />
      <div className="header mb-5 d-flex justify-content-between align-items-center">
        <div className="right flex-center ">
          <h4 className="fs-34 d-flex text-secondary fw-bold m-0 p-0">
            <span className="text-primary-75"> مقالات </span>
            <span className="">مادام کیک !</span>
          </h4>
        </div>
        <div className="left flex-center me-165">
          <button className="d-none d-sm-block border-cyan-1 bg-none flex-center p-3 fs-16 text-secondary">
            مشاهده همه
          </button>
          <button className="d-block d-sm-none border border-1 bg-none flex-center p-3 fs-16 text-secondary-25">
            همه
          </button>
        </div>
      </div>
      <div className="gallery_wrapper d-none d-sm-grid  p-0  me-165">
        {articleData.map((item, index) => (
          <div
            style={{ width: "fit-content" }}
            className={`p-0  item-${index + 1}`}
            key={index}
          >
            {" "}
            <GalleryCard src={item.src} title={item.title} />
          </div>
        ))}
      </div>
      <div className="slider_wrapper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          //   onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="d-block d-sm-none"
        >
          {articleData.map((item, index) => (
            <SwiperSlide key={index}>
              <GalleryCard src={item.src} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ArticlesSection;
