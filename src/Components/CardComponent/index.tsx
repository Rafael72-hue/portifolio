interface CardProps {
    data: CardDataProps;
}

interface CardDataProps {
    imageUrl: string;
    alternativeText: string;
    projectName: string;
}

export const CardComponent = ({data}: CardProps) => {
    return(
        <div className="relative cursor-pointer hover:border-selectedCard hover:opacity-80 duration-400">
            <img className="w-[200px] rounded-md" src={data.imageUrl} alt={data.alternativeText}/>
            <div className="absolute w-full bottom-0 p-4 bg-cardGradient text-lg rounded-b-md">
                <span className="text-white font-bold">{data.projectName}</span>
            </div>
        </div>
    )
}