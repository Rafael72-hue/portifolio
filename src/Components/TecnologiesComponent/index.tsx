import { 
    FaAngular,
    FaBootstrap,
    FaReact,
    FaNodeJs
} from 'react-icons/fa';
import { 
    SiTailwindcss,
    SiMysql
} from 'react-icons/si';
import { TopicComponent } from '../TopicComponent';

export const TecnologiesComponent = () => {
    return (
        <div className='flex flex-col items-center p-5 bg-[#333] rounded gap-3'>
            <span className='text-lg text-white font-bold'>Tecnologias</span>
            <div className='flex flex-col gap-3'>
                <TopicComponent color='bg-angular' nomeTecnologia='Angular' porcentagem='w-[50%]'>
                    <FaAngular size={34} color={'#d2002f'}/>
                </TopicComponent>
                <TopicComponent color='bg-bootstrap' nomeTecnologia='Bootstrap' porcentagem='w-[35%]'>
                    <FaBootstrap size={34} color={'#6e10ea'}/>
                </TopicComponent>
                <TopicComponent color='bg-react' nomeTecnologia='React' porcentagem='w-[35%]'>
                    <FaReact size={34} color={'#5ccfee'}/>
                </TopicComponent>
                <TopicComponent color='bg-react' nomeTecnologia='React Native' porcentagem='w-[35%]'>
                    <FaReact size={34} color={'#5ccfee'}/>
                </TopicComponent>
                <TopicComponent color='bg-tailwind' nomeTecnologia='Tailwind css' porcentagem='w-[35%]'>
                    <SiTailwindcss size={34} color={'#35b3eb'}/>
                </TopicComponent>
                <TopicComponent color='bg-nodejs' nomeTecnologia='NodeJS' porcentagem='w-[35%]'>
                    <FaNodeJs size={34} color={'#81b640'}/>
                </TopicComponent>
                <TopicComponent color='bg-mysql' nomeTecnologia='MySQL' porcentagem='w-[35%]'>
                    <SiMysql size={34} color={'#1c4863'}/>
                </TopicComponent>
            </div>
        </div>
    )
}