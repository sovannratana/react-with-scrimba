const Navbar = () => {
  return (
    <nav className="navbar bg-[#21222A] items-center flex justify-between p-10">
      <div className="flex">
        <img src="src/assets/react.svg" alt="logo" />
        <h1 className="text-[#61DAFB] font-bold text-3xl px-2">ReactFacts</h1>
      </div>
      <p className="text-white text-[#DEEBF8] text-xl">
        React Course Project 1
      </p>
    </nav>
  );
};

export default Navbar;
