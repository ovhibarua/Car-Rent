



function Divide(add) {
    const { divide, view } = add;
    return (
        <div className="flex justify-between items-center mb-8">
            <p className="paraSkys font-[500]">{divide}</p>
            <p className="text-[#3563E9] font-bold cursor-pointer">{view}</p>
        </div>
    )
}

export default Divide