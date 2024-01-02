interface TopicProps {
    nomeTecnologia: string;
    porcentagem: string;
    color: string;
    children: any;
}

export const TopicComponent = (props: TopicProps) => {
    return (
        <div className='flex items-center gap-2'>
            {props.children}
            <div className='flex flex-col gap-1 items-center'>
                <span className='text-white font-bold'>{props.nomeTecnologia}</span>
                <div className='flex h-[5px] bg-white w-28 rounded'>
                    <span className={`${props.color} ${props.porcentagem} rounded`}></span>
                </div>
            </div>
        </div>
    );
}