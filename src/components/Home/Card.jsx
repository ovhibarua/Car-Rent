import Image from "../Image"
import UnactiveLike from "../../assets/Icons/LikeLite.png"
import Gas from "../../assets/Icons/gas-station.png"
import CarHandle from "../../assets/Icons/car.png"
import People from "../../assets/Icons/profile-2user.png"
import Button from "../Button"
import Shadow from "../../assets/Icons/shadow.png"


function Card(add) {
    const { carName, type, cardImg, gas, handle, people, price } = add;
    return (
        <div className="p-6 rounded-[10px] shadow-xs flex flex-col justify-between bg-white h-[435px]">
            <div>
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-1">
                        <h2 className="paraDark">{carName}</h2>
                        <Image addImg={UnactiveLike} />
                    </div>
                    <h5 className="paraSkys">{type}</h5>
                </div>
                <div className="flex justify-center relative">
                    <Image addImg={cardImg} />
                    <div className="absolute bottom-0">
                        <Image addImg={Shadow} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-1.5">
                        <Image addImg={Gas} />
                        <h5 className="paraSkys">{gas}</h5>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image addImg={CarHandle} />
                        <h5 className="paraSkys">{handle}</h5>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image addImg={People} />
                        <h5 className="paraSkys">{people}</h5>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="paraDark">{price}/ <span className="paraSkys !important">Day</span></h2>
                    <Button button={"Rent Now"} />
                </div>
            </div>

        </div>
    )
}

export default Card