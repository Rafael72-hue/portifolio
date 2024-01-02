import { 
    FaAngular,
    FaReact,
    FaNodeJs

} from 'react-icons/fa';
import { 
    SiVuedotjs,
    SiMysql
} from 'react-icons/si';
import { TopicComponent } from '../TopicComponent';
import CSharpIcon from "../../assets/external_icons/Csharp_icon.png"

export const TecnologiesComponent = () => {
    return (
        <div className='flex flex-col items-center p-5 bg-[#333] rounded gap-3'>
            <span className='text-lg text-white font-bold'>Tecnologias</span>
            <div className='flex flex-col gap-3'>
                <TopicComponent color='bg-angular' nomeTecnologia='Angular' porcentagem='w-[50%]'>
                    <FaAngular size={34} color={'#d2002f'}/>
                </TopicComponent>
                <TopicComponent color='bg-react' nomeTecnologia='React' porcentagem='w-[45%]'>
                    <FaReact size={34} color={'#5ccfee'}/>
                </TopicComponent>
                <TopicComponent color='bg-vue' nomeTecnologia='Vue' porcentagem='w-[35%]'>
                    <SiVuedotjs size={34} color={'#42d392'}/>
                </TopicComponent>
                <TopicComponent color='bg-csharp' nomeTecnologia='C#' porcentagem='w-[35%]'>
                    <img src={CSharpIcon} width={34}/>
                </TopicComponent>
                <TopicComponent color='bg-nodejs' nomeTecnologia='NodeJS' porcentagem='w-[25%]'>
                    <FaNodeJs size={34} color={'#81b640'}/>
                </TopicComponent>
                <TopicComponent color='bg-mysql' nomeTecnologia='MySQL' porcentagem='w-[35%]'>
                    <SiMysql size={34} color={'#1c4863'}/>
                </TopicComponent>
            </div>
        </div>
    )
}