import Button from "../Button";
import Image from "../Image";

function HeroCard(pros) {
  const { heroTitle, heroText, cardImg } = pros;
  return (
    <div className="bg1 rounded-xl p-6 w-full h-[360px] relative shadow-xs">
      <h1 className="w-72 mb-4 paraWhite">{heroTitle}</h1>
      <p className="mb-5 w-72 paraWhite">{heroText}</p>
      <Button btnNavigate="/carDetails" button="Rental Car" />
      <div className="absolute bottom-3 left-48">
        <Image addImg={cardImg} />
      </div>
    </div>
  );
}

export default HeroCard;
