import Button from "../Button"
import Dropbox from "../Home/Dropbox"
import CardData from "../../Data/CardLIst.json"
import Card from "../Home/Card"



function NavbarContent() {
  return (
    <div className="w-full">
        <div className="flex justify-between items-center gap-5 relative mb-8">
            <Dropbox className={`flex-1`} DropTitle={`Pick - Up`}/>
            <div className="absolute top-11 left-[47%] translate-[50%,-50%]">
                    <Button btnStyle={'p-4 rounded-[10px] cursor-pointer shadow-xs'} button={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4H21C21.5523 4 22 4.44772 22 5V12H20V6H6V9L1 5L6 1V4ZM18 20H3C2.44772 20 2 19.5523 2 19V12H4V18H18V15L23 19L18 23V20Z"></path></svg>} />
            </div>
            <Dropbox className={`flex-1`} DropTitle={`Drop - Off`}/>
        </div>
        <div>
            <div className="grid grid-cols-3 gap-8 mb-16">
                {CardData.map((list, index) => <Card key={index} carName={list.cardTitle} type={list.cardText} cardImg={list.cardImg} gas={list.cardGas} handle={list.cardManual} people={list.cardPeople} price={list.cardPrice} />)}
            </div>
            <div className="flex justify-center items-center">
                <Button button={"Show more car"} />
            </div>
        </div>
    </div>
  )
}

export default NavbarContent
