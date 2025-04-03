import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10"
    >
      <div className="text-2xl font-bold">
        <a href="/" className="text-purple-400 hover:text-purple-300">
          CrowdLensAI
        </a>
      </div>
      <div className="mt-2 ml-24">
        <a
          href="https://x.com/CrowdLensAI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          Follow us on Twitter/X
        </a>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">
              How It Works
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;