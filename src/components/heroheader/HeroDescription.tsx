const HeroDescription = () => {
  return (
    <section className="hero_description   w-100 h-100  position-absolute ">
      <div className="d-flex   h-100 flex-column container  flex-sm-row justify-content-start ">
        <section className="right   text-white  d-flex justify-content-center align-items-center w-100 ">
          <div className="d-flex gap-3">
            <div className="d-flex  flex-column align-items-center ">
              <div className="bg-white rounded-circle overflow-hidden">
                <img
                  src="assets/images/cake.png"
                  alt="cake"
                  width={42}
                  height={42}
                />
              </div>
              <div className="border-1 border border-secondary  flex-grow-1 w-1 position-relative">
              <div className="yellow_rec bg-primary position-absolute"></div>
              </div>
              <div className="bg-info blue_cube mb-3"></div>
              
            </div>
            <div className="title d-flex flex-column ">
                <div className="title_border">
                <h6 className="fs-6 m-0 p-0">
                بیش از ۱۰۰۰۰ دانشجو با مادام کیک همراه شدند!
              </h6>
                </div>
           
              <div className="slogan">
              <p className="p-0 m-0 text-white">
              فاصله شما تا دنیای
کیک های خوشمزه یک کلیکه!
                </p>         
              </div>
              <div>
                <button className="see_courses_button bg-primary text-dark  fs-16 border-0">
                  مشاهده دوره ها
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="left m-1 d-flex justify-content-start text-white w-100 position-relative">
          <div className="image_wrapper position-absolute ">
            <div className="yellow_top_rec d-none d-sm-block bg-primary position-absolute"></div>
            <img
              src="assets/images/Mask group.png"
              width={481}
              height={711}
              alt="madamcake"
              className="d-none d-sm-block"
            />
            <img
              src="assets/images/mobile-heroimage.png"
              width={334}
              height={329}
              alt="madamcake"
              className="d-block d-sm-none mobile_hero_pic"
            />
              <div className="white_bottom_rec d-none d-sm-block bg-white position-absolute "></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroDescription;
