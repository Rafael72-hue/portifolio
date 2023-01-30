import { ProjectDataProps, ScreenshotProps } from "../../Intefaces/ProjectDataInterface";
import { AiOutlineCloseCircle } from 'react-icons/ai';

export interface ModalDataProps{
    data: any;
    closeModal: any;
}

export default function Modal({data, closeModal}: ModalDataProps) {
    const showModal = false;

    return (
        <>
            {data && data.map((item: ProjectDataProps) => {
                return <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-3xl ">
                        <div className="rounded-lg shadow-lg relative flex bg-[#333] flex-col w-full">
                            {/* header */}
                            <div className="flex items-center justify-between gap-5 p-5 border-b border-slate-200">
                                <span className="text-2xl font-semibold text-white">
                                    {item.projectName}
                                </span>
                                <button onClick={() => closeModal(showModal)} className="flex items-center cursor-pointer" title="Fechar">
                                    <AiOutlineCloseCircle size={28} color={"#FFF"}/>
                                </button>
                            </div>
                            {/* content */}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-white text-lg leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="grid grid-cols-3 gap-5">
                                    {item.screenshots && item.screenshots.map((item: ScreenshotProps) => {
                                        return(
                                            <>
                                                <a href={item.imageUrl} target="_blank" rel="noreferrer">
                                                    <img className="w-56 h-56 object-cover rounded-md" key={item.id} src={item.imageUrl} alt={item.alternativeText}/>
                                                </a>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 z-40 backdrop-blur-lg"></div>
            </>
            })
        }
        </>
    );
}