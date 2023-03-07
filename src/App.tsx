import AllCoursesSection from "./components/allcoursessection/AllCoursesSection";
import CategorySection from "./components/categorysection/CategorySection";
import Layout from "./components/layout";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LatestCourses from "./components/latestcourses/LatestCourses";
import CofeeShopSection from "./components/coffeshopsection/CofeeShopSection";
import ArticlesSection from "./components/articlessection/ArticlesSection";



function App() {
  return (
<Layout>
  <CategorySection/>
  <AllCoursesSection/>
  <LatestCourses/>
  <CofeeShopSection/>
  <ArticlesSection/>
  
</Layout>
  );
}

export default App;
