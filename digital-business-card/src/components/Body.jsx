const Body = () => {
  return (
    <main className="bg-[#1A1B21] max-w-[317px] mx-auto h-[399px]">
      {/* info */}
      <div>
        <h1 className="text-[25px] text-white font-bold flex justify-center pt-5">
          Laura Smith
        </h1>
        <p className="text-[#F3BF99] text-[12.8px] flex justify-center">
          Frontend Developer
        </p>
        <p className="text-[#F5F5F5] text-[10.24px] flex justify-center pt-1">
          laurasmith.website
        </p>
      </div>

      {/* button */}
      <div className=" button flex justify-between mt-3 max-w-[257px] mx-auto">
        <button className="bg-[#FFFFFF] py-[9px] px-[13px] pr-5 flex items-center rounded-md">
          <img
            src="src/assets/email.svg"
            alt=""
            className="pr-[8px] pl-3 pt-0.5"
          />
          <span className="text-sm font-semibold pr-3">Email</span>
        </button>
        <button className="bg-[#5093E2] py-[9px] px-[13px] pl-5 flex items-center rounded-md">
          <img
            src="src/assets/linkedln.svg"
            alt=""
            className="pr-[8px] pt-0.5"
          />
          <span className="text-sm font-semibold">Linkedln</span>
        </button>
      </div>

      {/* about & interests */}
      <div className="details mt-8 max-w-[257px] mx-auto">
        <div className="about text-white">
          <h1 className="text-[16px] font-bold">About</h1>
          <p className="text-[10.24px] text-[#DCDCDC] font-light">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="interest max-w-[257px] mt-3 mx-auto">
          <h1 className="text-[16px] text-white font-bold">Interests</h1>
          <p className="text-[10.24px] text-[#DCDCDC] font-light">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Body;
