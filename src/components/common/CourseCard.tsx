import "./coursecard.scss";
import { TomanIcon } from "./icons";
interface IProps {
  title: string;
  src: string;
  price: number;
}

const CourseCard = ({ title, src, price }: IProps) => {
  return (
    <div className="course_card d-flex flex-column bg-white">
      <div className="image_wrapper">
        <img src={`assets/images/${src}`} alt="title" width={306} />
      </div>
      <div className="details d-flex flex-column ">
        <h4 className="title flex-center fs-34 fw-bold text-secondary">
          {title}
        </h4>

        <div className="price_section px-1 d-flex justify-content-between align-items-center">
          <div>
            <span className="text-primary fw-bold fs-18">1,700</span>
          </div>
          <div className="flex-center dashed_price_wrapper fs-26 fw-bold text-secondary px-3">
            <span>{price.toLocaleString("fa-IR")}</span>
            <span className="fs-11 fw-light d-flex flex-column gap-0 p-0">
              <TomanIcon />
            </span>
          </div>
        </div>
        <div className="button_wrapper flex-center w-100 px-1">
          <a href="/" className="w-100">
            {" "}
            <button className="bg-primary fs-16 border-0 w-100">
              شرکت در دوره
            </button>
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default CourseCard;
