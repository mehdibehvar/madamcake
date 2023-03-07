import "./gallerycard.scss"

const GalleryCard = ({src,title}:{src:string,title:string}) => {
  return (
    <div className="card gallery_card border-0 rounded-0 m-0  position-relative" style={{width:"fit-content"}}>
        <div className="card_overlay position-absolute top-0 start-0 bottom-0 end-0 "></div>
  <img src={`assets/images/${src}`} className="card-img-top rounded-0" alt="..."/>
  <div className="card-body position-absolute d-flex justify-content-around align-items-center bottom-0 w-100">
    <h5 className="card-title text-white fs-29 fw-bold">{title}</h5>
      <a href="/" style={{width:"40px",height:"47px"}} className="btn border border-1 border-white flex-center rounded-0">
        <svg width="9" height="21" viewBox="0 0 9 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13254 20.075L0.840126 12.7788C-0.182874 11.5926 -0.182874 9.64545 0.840126 8.45926L7.13254 1.16307C7.41242 0.838547 7.87566 0.838547 8.15554 1.16307C8.43542 1.48759 8.43542 2.02474 8.15554 2.34926L1.86313 9.64545C1.39988 10.1826 1.39988 11.0555 1.86313 11.5926L8.15554 18.8888C8.43542 19.2133 8.43542 19.7505 8.15554 20.075C8.01077 20.2316 7.82741 20.3212 7.64404 20.3212C7.46067 20.3212 7.2773 20.2428 7.13254 20.075Z" fill="white"/>
</svg>
      </a>
  </div>
</div>
  )
}

export default GalleryCard