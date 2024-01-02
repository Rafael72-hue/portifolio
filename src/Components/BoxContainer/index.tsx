import { useState } from 'react';

import '../../global.css';
import { CollapseButton } from '../CollapseButton';

interface BoxContainerInterface {
    containerTitle: string;
    children: any;
}

export const BoxContainer = ({containerTitle, children}: BoxContainerInterface) => {
    const [ expanded, setExpanded ] = useState<boolean>(true);
    return (
        <div className='flex flex-col p-5 bg-[#333] rounded gap-3 over-scrolls'>
            <header className='flex items-center'>
                <span className='text-xl text-white font-bold'>{containerTitle}</span>
                <CollapseButton onClick={() => setExpanded(!expanded)} />
            </header>
            <section className={`${expanded ? 'collapse-section' : 'expand-section'}`}>
                {children}
            </section>
        </div>
    );
}