

const Title = ({title}) => {
    return (
        <div className="flex items-center justify-between gap-1">
            <div className="h-[1px] w-full bg-black"></div>
            <div className="border-2 border-black px-5 py-2 rounded-full w-[500px] text-center"><span
            className="font-bold capitalize">{title}</span></div>
            <div className="h-[1px] w-full bg-black"></div>
        </div>
    );
};

export default Title;