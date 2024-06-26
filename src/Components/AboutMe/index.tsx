import { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import '../../global.css';
import { CollapseButton } from '../CollapseButton';

export const AboutMe = () => {
    const [ expanded, setExpanded ] = useState<boolean>(true);
    return (
        <div className='flex flex-col p-5 bg-[#333] rounded gap-3'>
            <header className='flex items-center'>
                <span className='text-lg text-white font-bold'>Sobre mim</span>
                <CollapseButton onClick={() => setExpanded(!expanded)} />
            </header>
            <section className={`${expanded ? 'collapse-section' : 'expand-section'}`}>
                <p className="text-white text-md">Fullstack developer since 2020, seeking to expand my knowledge through various technologies
                    and excited to learn more each day. Currently, I am focused on developing websites, building
                    APIs, creating new features, performing maintenance, and always looking forward to new
                    adventures. In my free time, I build one or two games using JavaScript to improve my knowledge
                    of logic.
                    </p>
            </section>
        </div>
    );
}