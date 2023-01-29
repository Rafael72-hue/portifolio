import { ProjectDataProps, ScreenshotProps } from "../../Intefaces/ProjectDataInterface";
import { AiOutlineCloseCircle } from 'react-icons/ai';

export interface ModalDataProps{
    data: any;
    closeModal: any;
}

export default function Modal({data, closeModal}: ModalDataProps) {
    const showModal = false;
    console.log(data)
    return (
        <>
            {data && data.map((item: ProjectDataProps) => {
                return <>
                
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between gap-5 p-5 border-b border-solid border-slate-200 rounded-md">
                            <span className="text-2xl font-semibold">
                                {item.projectName}
                            </span>
                            <button onClick={() => closeModal(showModal)} className="flex items-center cursor-pointer">
                                <AiOutlineCloseCircle size={28}/>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                {item.description}
                            </p>
                            <div className="grid grid-cols-3 gap-5 object-cover">
                                {item.screenshots && item.screenshots.map((item: ScreenshotProps) => {
                                    return(
                                        <>
                                            <img className="w-56" key={item.id} src={item.imageUrl} alt={item.alternativeText}/>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            })
        }
        </>
    );
}