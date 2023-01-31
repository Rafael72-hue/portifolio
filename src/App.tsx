import React from 'react';
import { AboutMe } from './Components/AboutMe';
import { Experiences } from './Components/Experiences';
import { ImageProfileComponent } from './Components/ImageProfileComponent';
import { Projects } from './Components/Projects';
import { TecnologiesComponent } from './Components/TecnologiesComponent';


function App() {
  return (
    <div className="flex bg-[#1d1d1d] w-screen h-screen absolute justify-center gap-5 p-10">
      <div className='flex flex-col gap-5'>
        <ImageProfileComponent />
        <TecnologiesComponent />
      </div>
      <div className='flex flex-col gap-5 w-[60rem]'>
        <AboutMe />
        {/* <Experiences /> */}
        <Projects />
      </div>
    </div>
  );
}

export default App;
