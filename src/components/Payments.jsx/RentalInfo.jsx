import Image from "../Image";
import Pick from "../../assets/Icons/mark.png";
function RentalInfo() {
  return (
    <div className="mt-8 p-8 rounded-[10px] shadow-xs bg-white">
      <h2 className="paraDark mb-1">Rental Info</h2>
      <div className="flex justify-between items-center mb-8">
        <h5 className="paraSkys">Please select your rental date</h5>
        <span className="paraSkys">Step 2 of 4</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Image addImg={Pick} animate={"pulsate-fwd"} />
        <h4 className="paraDark">Pick - Up</h4>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col gap-3">
          <label className="paraDark" htmlFor="Locations">
            Locations
          </label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="Locations"
            id="Locations"
            placeholder="Locations"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="number">Date</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="Date"
            name="Date"
            id="Date"
            placeholder="Date"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="address">Time</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="Time"
            id="Time"
            placeholder="Time"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Image addImg={Pick} animate={"pulsate-fwd"} />
        <h4 className="paraDark">Drop - Off</h4>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="paraDark" htmlFor="Locations">
            Locations
          </label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="Locations"
            id="Locations"
            placeholder="Locations"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="number">Date</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="Date"
            name="Date"
            id="Date"
            placeholder="Date"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="address">Time</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="Time"
            id="Time"
            placeholder="Time"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default RentalInfo;
