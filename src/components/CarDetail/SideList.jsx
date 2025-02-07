import checkImg from "../../assets/Icons/Ceklist.png"
import checkAtiveImg from "../../assets/Icons/CeklistActive.png"
import { useState } from "react"
import Image from "../Image"

function SideList(add) {
    const {type, stock} = add
    const [checked, setChecked] = useState(true)

    const checkFunc = () =>{
        setChecked( prevCheck => !prevCheck)
    };
  return (
    <li className="flex items-center gap-2">
        <span onClick={checkFunc} className="cursor-pointer mb-0.5">
            <Image addImg={checked ? checkImg : checkAtiveImg}/>
        </span>
        {type}
        <span className="paraSkys">
            ({stock})
        </span>
    </li>
  )
}

export default SideList