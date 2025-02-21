function BillingInfo() {
  return (
    <div className="p-8 rounded-[10px] shadow-xs bg-white">
      <h2 className="paraDark mb-1">Billing Info</h2>
      <div className="flex justify-between items-center mb-8">
        <h5 className="paraSkys">Please enter your billing info</h5>
        <span className="paraSkys">Step 1 of 4</span>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="paraDark" htmlFor="name">
            Name
          </label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="number">Phone Number</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="number"
            name="number"
            id="number"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="address">Address</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="townCity">Town / City</label>
          <input
            className="bg-[#f6f7f9] py-4 px-6 rounded-[10px] placeholder-[#90a3bf] text-[#90a3bf]"
            type="text"
            name="townCity"
            id="townCity"
            placeholder="Town or city"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
