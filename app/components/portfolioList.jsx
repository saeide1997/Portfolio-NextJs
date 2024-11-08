'use client'



const PortfolioList = ({id, title, active, setSelected}) => {
    return (
        <li className={'text-[18px] w-32 flex portBoxShadow boldShab ml-12 p-3 rounded-lg cursor-pointer justify-center items-center' + (active && ' pListActive')}
        onClick={()=>setSelected(id)}>
            {title} 
            </li>
    );
};

export default PortfolioList;