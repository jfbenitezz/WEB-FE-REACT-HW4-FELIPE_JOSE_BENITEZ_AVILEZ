function Header(props) {
  const { title } = props;
  return (
    <header className="flex justify-center items-center w-full h-[80px] bg-[#F5F5F5] border-b">
      <div className="text-3xl text-center text-[#247BA0]">
        Primer sitio web - {title}
      </div>
    </header>
  );
}

export default Header;
