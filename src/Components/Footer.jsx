
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">Follow us on:</p>
        <div className="flex items-center">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaFacebook className="text-2xl mx-2" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter className="text-2xl mx-2" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram className="text-2xl mx-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
