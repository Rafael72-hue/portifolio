import { useEffect, useState } from "react";
import { PROJECT_DATA } from "../../Utils/projectsData";
import { CardComponent } from "../CardComponent";
import { ProjectDataProps } from "../Intefaces/ProjectDataInterface";

export const Projects = () => {
    const [ data, setData ] = useState<any>();

    useEffect(() => {
        setData(PROJECT_DATA);
    }, []);

    console.log(data);
    return (
        <div className='flex flex-col items-center p-5 bg-[#333] rounded gap-3'>
            <header>
                <span className='text-lg text-white font-bold'>Projetos</span>
            </header>
            <section>
                <div>
                    <div className="grid grid-cols-4">

                    {data && data.map((item: ProjectDataProps) => {
                        return (
                            <div id={item.id} >
                                <CardComponent 
                                    data={{imageUrl: item.poster, 
                                           alternativeText: item.posterText, 
                                           projectName: item.projectName
                                           }}
                                />
                            </div>
                        )})}
                    </div>
                </div>
            </section>
        </div>
    );
}