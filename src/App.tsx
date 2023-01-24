import React from 'react';
import { AboutMe } from './Components/AboutMe';
import { ImageProfileComponent } from './Components/ImageProfileComponent';
import { Projects } from './Components/Projects';
import { TecnologiesComponent } from './Components/TecnologiesComponent';

function App() {
  return (
    <div className="flex bg-[#1d1d1d] w-screen h-screen absolute justify-center items-center gap-5">
      <div className='flex flex-col gap-5'>
        <ImageProfileComponent />
        <TecnologiesComponent />
      </div>
      <div className='flex flex-col gap-5 w-[60rem]'>
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
