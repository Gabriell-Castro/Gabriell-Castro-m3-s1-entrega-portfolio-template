import { Header } from "../src/Components/Header/index.jsx";
import { AboutMeSection } from "./Components/AbouteMeSection/index.jsx";
import { BannerSection } from "./Components/BannerSection/index.jsx";
import { TechSection } from "./Components/TechSection/index.jsx";
import { ProjectsSection } from "./Components/ProjectsSection/index.jsx";
import { Footer } from "./Components/Footer/index.jsx";
function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
