export default function LearnMoreBtn({ textColor }) {
    return (
        <button 
        type="button"
        className={`mr-auto
        bg-very-light-gray text-${textColor}
        py-[clamp(0.5rem,1.5vw,0.8rem)] px-[clamp(1.5rem,3.5vw,2rem)] rounded-full cursor-pointer
        hover:text-very-light-gray hover:bg-transparent hover:outline-2 hover:outline-very-light-gray
        mt-[clamp(1rem,2.5vw,4.5rem)] text-[clamp(0.9375rem,1.5vw,1.1rem)]
        `}     
        >
            Learn more
        </button>
    )
}