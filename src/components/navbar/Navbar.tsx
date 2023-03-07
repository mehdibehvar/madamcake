import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar_section  position-absolute text-white fs-16  w-100 ">
      <div className="d-flex justify-content-start align-items-center container ">
       <div className="w-100 d-flex  d-sm-none justify-content-center">
       <div className="hamburguer_menu   d-flex flex-column align-items-center gap-1 border border-1 border-white p-2">
          <div className="line bg-white border  border-white rounded-pill"></div>
          <div className="line bg-white border  border-white rounded-pill"></div>
          <div className="line bg-white border  border-white rounded-pill"></div>
        </div>
       </div>
        <div className="logo-wrapper w-100  d-flex justify-content-center d-sm-block">
          <img
            className="logo_image"
            src="assets/images/Logo.png"
            alt="madamcake"
            width="48"
            height="52"
          />
        </div>
        <div className="navigation  d-none d-sm-flex w-100 align-items-center">
          <ul className="link_list  w-100 d-flex justify-content-between align-items-center">
            <li className="active">
              <a href="/" className="nav_link">
                خانه
              </a>
            </li>
            <li>
              <a href="/" className="nav_link">
                دوره ها
              </a>
            </li>
            <li>
              <a href="/" className="nav_link">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="/courses" className="nav_link">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
        <div className="buttons_wrapper  w-100 d-flex justify-content-center align-items-center">
          <div className="basket d-none d-sm-flex justify-content-center align-items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                fill="white"
              />
              <path
                d="M19.65 10.7001H4.35996C4.05996 10.7001 3.74996 10.6901 3.45996 10.6201L4.71996 18.3001C4.99996 20.0201 5.74996 22.0001 9.07996 22.0001H14.69C18.06 22.0001 18.66 20.3101 19.02 18.4201L20.53 10.6201C20.25 10.6801 19.95 10.7001 19.65 10.7001ZM10.61 17.1601C10.61 17.5501 10.3 17.8601 9.90996 17.8601C9.51996 17.8601 9.20996 17.5501 9.20996 17.1601V13.8601C9.20996 13.4701 9.51996 13.1601 9.90996 13.1601C10.3 13.1601 10.61 13.4701 10.61 13.8601V17.1601ZM14.89 17.1601C14.89 17.5501 14.58 17.8601 14.19 17.8601C13.8 17.8601 13.49 17.5501 13.49 17.1601V13.8601C13.49 13.4701 13.8 13.1601 14.19 13.1601C14.58 13.1601 14.89 13.4701 14.89 13.8601V17.1601Z"
                fill="white"
              />
            </svg>
          </div>
          <button className="login_register d-none d-sm-block  bg-primary text-dark fs-18 border-0">
            ثبت نام/ورود
          </button>
          <button className="register d-block d-sm-none  bg-primary text-dark fs-14 border-0 ">
            ثبت نام
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
