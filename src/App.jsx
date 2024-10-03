import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Education, Services, Works, StarsCanvas } from "./components";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#151030] via-[#195C60] to-[#0D3B66]'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className=" bg-teal-pattern bg-cover bg-no-repeat bg-center">
        <Services />
        </div>
        <Experience />
        <Tech />
        <Education />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

