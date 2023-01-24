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
        <div>
            <img className="w-[200px] rounded" src={data.imageUrl} alt={data.alternativeText}/>
            <div>
                <span>{data.projectName}</span>
            </div>
        </div>
    )
}