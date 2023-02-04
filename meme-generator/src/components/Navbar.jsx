const Navbar = () => {
  return (
    <div className="navbar bg-[#672280] flex justify-between p-6 text-white items-center">
      <div className="flex space-x-2">
        <img src="src/assets/logo.svg" alt="" />
        <p className="font-semibold text-xl">Meme Generator</p>
      </div>
      <div>
        <p className="font-light text-sm ">React Course - Project 3</p>
      </div>
    </div>
  );
};

export default Navbar;
