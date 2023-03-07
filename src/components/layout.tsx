
import HeroHeader from './heroheader/HeroHeader'
import { ReactNode } from "react";
import Footer from './footer/Footer';
import ConsultTime from './consulttime/ConsultTime';
const Layout = ({children}: { children: ReactNode}) => {
  return (
   <section className='container-fluid'>
        <HeroHeader/>
<main>
    {children}
</main>
<ConsultTime/>
<Footer/>
   </section>
  )
}

export default Layout