import Image from "../Image";

function PayCondition(add) {
  const { payName, payImage } = add;
  return (
    <div className="py-5 px-8 rounded-[10px] bg-[#F6F7F9] flex justify-between items-center">
      <div className="flex items-center gap-5">
        <span className="w-6 h-6 rounded-full border-[1px] border-[#90A3BF] cursor-pointer"></span>
        <h4 className="paraDark">{payName}</h4>
      </div>
      <Image addImg={payImage} />
    </div>
  );
}

export default PayCondition;
