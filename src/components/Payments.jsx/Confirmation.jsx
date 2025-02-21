import Button from "../Button";
import Image from "../Image";
import PayCondition from "./PayCondition";
import ic from "../../assets/Icons/ic.png";

function Confirmation() {
  return (
    <div className="mt-8 p-8 rounded-[10px] shadow-xs bg-white">
      <h2 className="paraDark mb-1">Confirmation</h2>
      <div className="flex justify-between items-center mb-8">
        <h5 className="paraSkys">
          We are getting to the end. Just few clicks and your rental is ready!
        </h5>
        <span className="paraSkys">Step 4 of 4</span>
      </div>
      <div className="flex flex-col gap-6 mb-8">
        <PayCondition
          payName={`I agree with sending an Marketing and newsletter emails. No spam, promissed!`}
        />
        <PayCondition
          payName={`I agree with our terms and conditions and privacy policy.`}
        />
      </div>
      <Button button={`Rent Now`} />
      <div className="mt-8">
        <Image addImg={ic} />
        <h3 className="paraDark mt-4 mb-1">All your data are safe</h3>
        <div className="flex justify-between items-center mb-8">
          <h5 className="paraSkys">
            We are getting to the end. Just few clicks and your rental is ready!
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
