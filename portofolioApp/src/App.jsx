import IdentityCard from "./components/IdentityCard/Identity";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer.jsx";

import "./index.css";

function App() {
  return (
    <>
      <section>
        <IdentityCard />
        <ProjectCard />
      </section>
      <footer className="flex justify-center bg-black mt-4">
        <Footer />
      </footer>
    </>
  );
}

export default App;
