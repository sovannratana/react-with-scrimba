const Content = () => {
  return (
    <main className="text-white bg-[#282D35] content px-10 pt-12">
      <h1 className="font-bold text-5xl">Fun Facts about React</h1>
      <div className="list p-10">
        <ul className="list-outside list-disc ml-6 text-xl">
          <li className="text-[#61DAFB]">
            <span>Was first released in 2013</span>
          </li>
          <li className="text-[#61DAFB]">
            <span>Was originally created by Jordan Walke</span>
          </li>
          <li className="text-[#61DAFB]">
            <span>Has well over 100K stars on GitHub</span>
          </li>
          <li className="text-[#61DAFB]">
            <span>Is maintained by Facebook</span>
          </li>
          <li className="text-[#61DAFB]">
            <span>
              Powers thousands of enterprise app, including mobile apps
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Content;
