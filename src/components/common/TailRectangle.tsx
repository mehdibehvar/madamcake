import "./tailrectangle.scss";
interface IProps{
    borderclass:string
}
const TailRectangle = ({borderclass}:IProps) => {
  return (
    <div className="tail_rectangle position-absolute flex-center d-none d-sm-flex">
    <div className="line_gray border border-1 border-secondary"></div>
    <div className={`rec bg-secondary-50 ${borderclass}`}></div>
  </div>
  )
}

export default TailRectangle