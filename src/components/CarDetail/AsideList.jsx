import SideList from "./SideList"




const carsType = [
    {
        type : 'Sport',
        stock : '10'
    },
    {
        type : 'SUV',
        stock : '12'
    },
    {
        type : 'MPV',
        stock : '16'
    },
    {
        type : 'Sedan',
        stock : '20'
    },
    {
        type : 'Coupe',
        stock : '14'
    },
    {
        type : 'Hatchback',
        stock : '18'
    }
]

const capacity = [
    {
        type : '2 Person',
        stock : '10'
    },
    {
        type : '4 Person',
        stock : '14'
    },
    {
        type : '6 Person',
        stock : '12'
    },
    {
        type : '8 Person',
        stock : '16'
    }
]



function AsideList() {
    
    return (
        <div>
            <h6 className="mb-7 uppercase paraSkys">type</h6>
            <div className="mb-14">
                <ul className="flex flex-col justify-center gap-5">
                    {carsType.map((types, index)=>
                        <SideList key={index} type={types.type} stock={types.stock} />
                    )}
                </ul>
            </div>
            <h6 className="mb-7 uppercase paraSkys">capacity</h6>
            <div>
                <ul className="flex flex-col justify-center gap-5">
                    {capacity.map((types, index)=>
                        <SideList key={index} type={types.type} stock={types.stock} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default AsideList