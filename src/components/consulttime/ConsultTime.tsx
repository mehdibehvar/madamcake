import "./consulttime.scss"

const ConsultTime = () => {
  return (
   <section className="consulte_section  position-relative">

 <div className="bgImage_wrapper w-100 position-absolute" style={{backgroundImage:"url(assets/images/par-2.png)",backgroundSize:"cover",backgroundPosition:"center"}}>
<form className="consulte_form d-flex flex-column justify-content-center align-items-center bg-white position-absolute ">
        <div className="d-flex flex-column justify-content-center align-items-start">
        <h4 className="fs-34 d-flex text-secondary fw-bold m-0 mb-4 p-0">
            <span className="text-primary-75 ms-1">   دریافت  </span>

            <span >وقت مشاوره </span> 
          </h4>
          <div className="d-flex flex-column gap-3 fs-16 text-secondary mb-3">
            <input placeholder="نام و نام خانوادگی شما" className="border border-1 pe-4"></input>
            <input placeholder="شماره  تماس شما" className="border border-1 pe-4"></input>
          </div>
          <button className="bg-primary flex-center text-white fs-16 px-4 py-3 border-0 ">رزرو وقت مشاوره</button>
        </div>
</form>
       </div>

   </section>
  )
}

export default ConsultTime