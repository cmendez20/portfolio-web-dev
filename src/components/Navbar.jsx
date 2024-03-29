const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center mb-14 md:mb-20">
        <div>
          <a href="#" className="font-bold text-2xl">
            Chris Mendez
          </a>
        </div>
        <a
          href=""
          className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800"
        >
          Let's Chat
        </a>
      </nav>
    </>
  );
};

export { Navbar };
