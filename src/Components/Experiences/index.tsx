import { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import '../../global.css';
import { CollapseButton } from '../CollapseButton';

export const Experiences = () => {
    const [ expanded, setExpanded ] = useState<boolean>(true);
    return (
        <div className='flex flex-col p-5 bg-[#333] rounded gap-3'>
            <header className='flex items-center'>
                <span className='text-lg text-white font-bold'>Experiências</span>
                <CollapseButton onClick={() => setExpanded(!expanded)} />
            </header>
            <section className={`${expanded ? 'collapse-section' : 'expand-section'}`}>
                <p className="text-white text-md">Sou desenvolvedor front-end, sempre estudando um pouco de tudo. Tenho experiência em Angular e React, no meu tempo livre gosto de estudar outras tecnologias como React Native e NodeJS em busca de me tornar um dev fullstack, seja o front web ou mobile.</p>
            </section>
        </div>
    );
}