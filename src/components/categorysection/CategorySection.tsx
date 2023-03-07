import { LeftFlower, RightFlower } from "../common/icons";
import "./categorysection.scss";

const CategorySection = () => {
  return (
    <section className="category_section d-none d-sm-block">
      <div className="container ">
        <div className="row">
          <div className="header d-flex justify-content-center align-items-center gap-3">
            <div className="right_pic">
              <RightFlower />
            </div>
            <div className="title fs-34 d-flex">
              <h1 className="text-secondary">دسته بندی </h1>
              <h1 className="text-primary-25">ها</h1>
            </div>
            <div className="left_pic">
              <LeftFlower />
            </div>
          </div>
          <div className="categories flex-center gap-2 mt-5">
            <div className="flex-center ">
              <RightFlower />
            </div>
            <div className="center   position-relative flex-center">
              <div className="line_border "></div>
              <div className="category_item rounded-circle item-one bg-violet d-flex flex-column align-items-center justify-content-center">
                <div className="icon_wrapper">
                  <img src="assets/images/sweet.png" alt="sweet" width={50} height={50}/>
                </div>
                <h4 className="subtitle fs-22 fw-bold text-white">شیرینی عید</h4>
              </div>
              <div className="little_cube bg-primary"></div>
              <div className="category_item rounded-circle item-two bg-pink d-flex flex-column align-items-center justify-content-center">
              <div className="icon_wrapper">
                  <img src="assets/images/cake (2).png" alt="sweet" width={50} height={50}/>
                </div>
                <h4 className="subtitle fs-22 fw-bold text-white"> کیک عروسی</h4>
              </div>
              <div className="little_cube bg-violet"></div>
              <div className="category_item rounded-circle item-three bg-info d-flex flex-column align-items-center justify-content-center">
              <div className="icon_wrapper">
                  <img src="assets/images/cupcake.png" alt="sweet" width={50} height={50}/>
                </div>
                <h4 className="subtitle fs-22 fw-bold text-white"> کافی شاپی</h4>
              </div>
              <div className="little_cube bg-info"></div>
              <div className="category_item rounded-circle item-four bg-primary-25 d-flex flex-column align-items-center justify-content-center">
              <div className="icon_wrapper">
                  <img src="assets/images/candlecake.png" alt="sweet" width={50} height={50}/>
                </div>
                <h4 className="subtitle fs-22 fw-bold text-white">تزئین کیک</h4>
              </div>
         
            </div>
            <div className="flex-center">
              <LeftFlower />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
