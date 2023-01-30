import { useEffect, useState } from "react";
import { PROJECT_DATA } from "../../Utils/projectsData";
import { CardComponent } from "../CardComponent";
import { ProjectDataProps } from "../../Intefaces/ProjectDataInterface";
import Modal from "../ModalComponent";

import './style.css';

export const Projects = () => {
    const [ data, setData ] = useState<any>();
    const [ dataModal, setDataModal ] = useState<ProjectDataProps>();
    const [ showModal, setShowModal ] = useState<any>(false);

    useEffect(() => {
        setData(PROJECT_DATA);
    }, []);
    
    const handleOpeningModal = (idCard: string) => {
        const modalData = data.filter((item: any) => {return item.id === idCard});
        setDataModal(modalData);
        setShowModal(!showModal)
    }

    const showModal_ = (close: any) => {
        setShowModal(close);
    }
    
    return (
        <div className='flex flex-col items-center p-5 bg-[#333] rounded gap-3 over-scroll'>
            <header>
                <span className='text-lg text-white font-bold'>Projetos</span>
            </header>
            <section>
                <div>
                    <div className="grid-card gap-5">

                    {data && data.map((item: ProjectDataProps) => {
                        return (
                            <div id={item.id} onClick={() => handleOpeningModal(item.id)}>
                                <CardComponent 
                                    data={{imageUrl: item.poster, 
                                           alternativeText: item.posterText, 
                                           projectName: item.projectName
                                           }}
                                />
                            </div>
                    )})}
                        {showModal && <Modal data={dataModal} closeModal={showModal_}/>}
                    </div>
                </div>
            </section>
        </div>
    );
}

// import { useState } from 'react';
// import { Child } from '../ModalComponent';

// export function Projects() {
//   const [data, setData] = useState('');
  
//   const childToParent = (childdata: any) => {
//     setData(childdata);
//   }

//   return (
//     <div className="App">
//      {data}
//       <div>
//         <Child childToParent={childToParent}/>
//       </div>
//     </div>
//   );
// }

