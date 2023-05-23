import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {

  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white ">
      <div>
        <Link href="/" passHref>
            <Image className="m-3" src="/Films.png" width={50} height={50} alt="Strapi Logo"/>
        </Link>
      </div>


      <div className="hidden w-full md:flex md:items-center md:w-auto" >
        <ul className="pt-4text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/"  className="md:p-2 py-2 block hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link href="/films" className="md:p-2 py-2 block hover:text-purple-400" >Films</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
