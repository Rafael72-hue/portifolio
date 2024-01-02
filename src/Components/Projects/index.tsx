import { useEffect, useState } from "react";

import { PROJECT_DATA } from "../../Utils/projectsData";
import { CardComponent } from "../CardComponent";
import { ProjectDataProps } from "../../Intefaces/ProjectDataInterface";
import Modal from "../ModalComponent";

import './style.css';
import '../../global.css';
import { BoxContainer } from "../BoxContainer";


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
        <BoxContainer containerTitle="Projetos">
            <div className={`grid-card gap-5`}>
                {data && data.map((item: ProjectDataProps) => {
                    return (
                        <div id={item.id} key={item.id} onClick={() => handleOpeningModal(item.id)} >
                            <CardComponent 
                                key={item.id}
                                data={{imageUrl: item.poster, 
                                        alternativeText: item.posterText, 
                                        projectName: item.projectName
                                        }}
                            />
                        </div>
                )})}
                {showModal && <Modal data={dataModal} closeModal={showModal_}/>}
            </div>
        </BoxContainer>                
    );
}
