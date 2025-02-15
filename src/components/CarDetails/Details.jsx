import Image from "../Image";
import dtlImg from "../../../src/assets/Img/modelCar1.png";
import viewImg from "../../../src/assets/Img/View1.png";
import view2Img from "../../../src/assets/Img/View2.png";
import view3Img from "../../../src/assets/Img/View1.png";
import dtlLike from "../../../src/assets/Icons/Like.png";
import dtlLikeUn from "../../../src/assets/Icons/LikeLite.png";
import Star from "./Star";
import Button from "../Button";
import { useState } from "react";
import Review from "./Review";

function Details() {
  const [fav, setFav] = useState(true);
  const active = () => {
    setFav((prevSet) => !prevSet);
  };
  return (
    <div className="py-8 w-full">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg2 rounded-[10px] col-span-3 p-6">
            <div className="mb-14">
              <h1 className="paraWhite mb-4">
                Sports car with the best <br /> design and acceleration
              </h1>
              <p className="paraWhite">
                Safety and comfort while driving a <br /> futuristic and elegant
                sports car
              </p>
            </div>
            <Image addImg={dtlImg} />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image animate="w-full" addImg={viewImg} />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image animate="w-full" addImg={view2Img} />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image animate="w-full" addImg={view3Img} />
          </div>
        </div>
        <div className="bg-white p-8 rounded-[10px] mb-8 shadow-xs">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <h1>Nissan GT - R</h1>
              <div onClick={active}>
                <Image
                  animate="cursor-pointer"
                  addImg={fav ? dtlLikeUn : dtlLike}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span className="paraSecond">440+ Reviewer</span>
            </div>
          </div>
          <p className="text-[#596780] mb-8">
            NISMO has become the embodiment of Nissan's outstanding performance,
            <br />
            inspired by the most unforgiving proving ground, the "race track".
          </p>
          <div className="mb-12">
            <ul className="grid grid-cols-2 gap-3 w-96">
              <li className="flex items-center gap-6">
                <h3 className="paraSkys font-normal">Type Car:</h3>
                <h3 className="text-[#596780]">Sport</h3>
              </li>
              <li className="flex items-center gap-6">
                <h3 className="paraSkys font-normal">Steering:</h3>
                <h3 className="text-[#596780]">Manual</h3>
              </li>
              <li className="flex items-center gap-6">
                <h3 className="paraSkys font-normal">Capacity:</h3>
                <h3 className="text-[#596780]">2 Person</h3>
              </li>
              <li className="flex items-center gap-6">
                <h3 className="paraSkys font-normal">Gasoline:</h3>
                <h3 className="text-[#596780]">70L</h3>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-centers">
            <h2 className="paraDark">
              $99.00/ <span className="paraSkys !important">Day</span>
            </h2>
            <Button button="Rent Now" />
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}

export default Details;
