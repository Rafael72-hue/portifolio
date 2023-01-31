import { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const CollapseButton = (props:{onClick:()=>void}) => {
    const [ expanded, setExpanded ] = useState<boolean>(true);

    const handleExpandSection = () => {
        setExpanded(!expanded);
        props.onClick();
    }
    return (
        <button 
            onClick={handleExpandSection} 
            className={`outline-none`} title={`${expanded ? 'Diminuir' : 'Expandir'}`}>
                {expanded ? <MdOutlineKeyboardArrowUp color='#fff' size={24}/> : <MdOutlineKeyboardArrowDown color='#fff' size={24}/>}
        </button>
    )
}