import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10" style={{ top: '0px' }}>
      <div className="container mx-auto flex justify-between items-center" >
        <h1 className="text-white text-lg font-bold">My Portfolio</h1>
        <div>
          <Link href="#home" className="text-white mx-4 hover:underline">Home</Link>
          <Link href="#about" className="text-white mx-4 hover:underline">About</Link>
          <Link href="#skills" className="text-white mx-4 hover:underline">Skills</Link>
          <Link href="#projects" className="text-white mx-4 hover:underline">Projects</Link>
          <Link href="#contact" className="text-white mx-4 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
