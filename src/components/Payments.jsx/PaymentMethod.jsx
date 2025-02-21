import Image from "../Image";
import Pick from "../../assets/Icons/mark.png";
import visa from "../../../src/assets/Icons/VisaInc.png";
import masterCard from "../../../src/assets/Icons/mc.png";
import PayCondition from "./PayCondition";
import payPal from "../../assets/Icons/PayPal.png";
import bitCoin from "../../assets/Icons/Bitcoin.png";

function PaymentMethod() {
  return (
    <div className="mt-8 p-8 rounded-[10px] shadow-xs bg-white">
      <h2 className="paraDark mb-1">Payment Method</h2>
      <div className="flex justify-between items-center mb-8">
        <h5 className="paraSkys">Please enter your payment method</h5>
        <span className="paraSkys">Step 3 of 4</span>
      </div>
      <div className="bg-[#F6F7F9] p-6 rounded-[10px] mb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex justify-between gap-2 items-center">
            <Image addImg={Pick} animate={"pulsate-fwd"} />
            <h4 className="paraDark">Credit Card </h4>
          </div>
          <div className="flex items-center gap-1.5">
            <Image addImg={visa} />
            <Image addImg={masterCard} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="paraDark" htmlFor="Locations">
              Card Number
            </label>
            <input
              className="bg-white py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
              type="text"
              name="Locations"
              id="Locations"
              placeholder="Card Number"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="number">Expration Date</label>
            <input
              className="bg-white py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
              type="Date"
              name="Date"
              id="Date"
              placeholder="Date"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="address">Card Holder</label>
            <input
              className="bg-white py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
              type="text"
              name="Time"
              id="Time"
              placeholder="Card Holder"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="address">CVC</label>
            <input
              className="bg-white py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
              type="text"
              name="Time"
              id="Time"
              placeholder="CVC"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <PayCondition payImage={payPal} payName={`Paypal`} />
        <PayCondition payImage={bitCoin} payName={`Bitcoin`} />
      </div>
    </div>
  );
}

export default PaymentMethod;
