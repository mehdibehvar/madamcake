import  './footer.scss';

const Footer = () => {
  return (
   <footer className='footer_section position-relative' style={{backgroundImage:"url(assets/images/BGfooter.png)",backgroundSize:"cover",backgroundPosition:"center"}}>
<div className='overlay position-absolute top-0 bottom-0 end-0 start-0 '></div>
<div className='footer_text position-absolute'>
<h4 className="fs-34 d-flex text-white fw-bold m-0 p-0">
            <span className="text-primary-75">  درباره </span>
            <span className="">مادام کیک !</span> 
          </h4>
    <div className='description mt-3'>
        <p className='text-secondary-50 fs-18 fw-light'>لورم ساز ، لورم ســت وب سایت لورم ساز
 لورم ست یک ســـرویس کاملا رایـگان و
 ساده برای ارائه متن لورم ایپسوم است
 که به زبان  مختلف متن لورم ایـــپسوم !</p>
    </div>
</div>
   </footer>
  )
}

export default Footer