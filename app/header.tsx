import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex px-4 md:px-0 md:w-10/12 justify-between items-center py-4 md:py-8 bg-primary mx-auto ">
      <div className="hidden items-center space-x-4 md:flex">
        <Link href="https://linkedin.com" className="text-gray-900 hover:text-gray-600 text-lg">
            <FaLinkedinIn />
        </Link>
        <Link href="https://instagram.com" className="text-gray-900 hover:text-gray-600 text-lg">
            <FaInstagram />
        </Link>
        <Link href="https://whatsapp.com" className="text-gray-900 hover:text-gray-600 text-lg">
          <FaWhatsapp />
        </Link>
        <Link href="https://twitter.com" className="text-gray-900 hover:text-gray-600 text-lg">
            <FaTwitter />
        </Link>
        <Link href="https://youtube.com" className="text-gray-900 hover:text-gray-600 text-lg">
            <FaYoutube />
        </Link>

      </div>
      
      <div className="flex flex-col items-center gap-5 scale-75  md:scale-100">
        <h1 className='flex items-center font-bold text-3xl gap-5'>
            <img src="https://www.sinciitd.in/static/media/logo.67f3e90e975249da9b1397bceb9999fe.svg" alt="SInC" className='h-10'/>
            SInC         
        </h1>
        
        <nav className='hidden lg:block'>
          <ul className="flex space-x-10">
            <li><Link href="/" className="text-gray-800 hover:text-gray-600 text-lg font-medium tracking-wider">Home</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:text-gray-600 text-lg font-medium tracking-wider">About</Link></li>
            <li><Link href="/events" className="text-gray-800 hover:text-gray-600 text-lg font-medium tracking-wider">Events</Link></li>
            <li><Link href="/team" className="text-gray-800 hover:text-gray-600 text-lg font-medium tracking-wider">Team</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-gray-600 text-lg font-medium tracking-wider">Contact</Link></li>
          </ul>
        </nav>
      </div>
      
      <button className="bg-black text-white px-3 py-1 lg:px-6 lg:py-2   rounded-full font-semibold hover:bg-gray-800 transition duration-300">
        Get started
      </button>
    </header>
  );
};

export default Header;