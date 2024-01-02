import ProfilePicture from '../../assets/profile_picture.jpg';

export const ImageProfileComponent = () => {
    return(
        <div className='flex flex-col items-center p-5 bg-[#333] rounded'>
            <img className="rounded-full" width={150} src={ProfilePicture}  alt="imagem de perfil"/>
            <span className='text-lg text-white font-bold mt-2'>Rafael Eliú</span>
            <span className='text-sm text-white font-thin'>Software Engineering Analyst</span>
        </div>
    );
}