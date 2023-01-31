const Footer = () => {
  return (
    <footer className="bg-[#161619] max-w-[317px] h-[64px] mx-auto rounded-b-xl">
      <div className="flex justify-center items-center py-5">
        <div className="px-3">
          <img className="w-6" src="src/assets/twitter.svg" alt="" />
        </div>
        <div className="px-3">
          <img className="w-6" src="src/assets/facebook.svg" alt="" />
        </div>
        <div className="px-3">
          <img className="w-6" src="src/assets/instagram.svg" alt="" />
        </div>
        <div className="px-3">
          <img className="w-6" src="src/assets/github.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
