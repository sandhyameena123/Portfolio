function Navbar() {
  return (
    <nav className="max-w-[1600px] mx-auto bg-gray-900 text-white flex justify-center ">

      <div className="w-[90%]  flex justify-between items-center py-4 justify-items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          MyPortfolio
        </h1>

        {/* Menu */}
        <div className="flex gap-6 text-gray-300">

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;