const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Pinnacle Semiconductors</div>
        <nav className="space-x-4">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded text-black"
          />
          <button className="bg-blue-700 hover:bg-blue-600 px-2 py-1 rounded">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};


export default Header;
