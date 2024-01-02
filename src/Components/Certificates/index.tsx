import '../../global.css';
import { BoxContainer } from "../BoxContainer";

export const Certificates = () => {
    return (
        <BoxContainer containerTitle="Certificados">
            <ul className='text-white p-5'>
                <li className="list-disc">
                    <div className='flex flex-col'>
                        <span className="text-lg">Javascript - Curso em Vídeo</span>
                        <span className="">40 horas</span>
                    </div>
                </li>
            </ul>
        </BoxContainer>
    );
}