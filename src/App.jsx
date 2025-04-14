import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black p-4 flex justify-between items-center sticky top-0 z-10"
    >
      <div className="text-2xl font-bold">
        <a href="/" className="text-cyan-400 hover:text-blue-400">
          CrowdLensAI
        </a>
      </div>
      <div className="mt-2 ml-24">
        <a
          href="https://x.com/CrowdLensAI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Follow us on Twitter/X
        </a>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="text-white hover:text-blue-400 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-white hover:text-blue-400 transition-colors">
              How It Works
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="bg-black p-6 text-center">
      <p>© 2025 CrowdLensAI. Built on <span className="text-purple-400">Solana</span>.</p>
    </footer>
  );
}

const FeatureCard = ({ title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-900 rounded-lg border border-blue-500/20"
  >
    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const Step = ({ num, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-black">
      {num}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  </motion.div>
);

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex items-center justify-center min-h-[80vh] text-center px-4 bg-gradient-to-br from-black via-black to-blue-900"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-cyan-400">CrowdLensAI</span> <br /> Shape AI's Future
            </motion.h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A decentralized platform on Solana empowering freelancers with instant SOL rewards and a game-changing reputation system.
            </p>
            <button
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-3 px-8 rounded-lg opacity-70 cursor-not-allowed flex items-center justify-center mx-auto"
              disabled
            >
              Join the Revolution
              <span className="ml-2 text-sm bg-purple-500 text-white px-2 py-1 rounded">Coming Soon</span>
            </button>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Reputation That Pays"
              desc="Top performers earn more (e.g., $0.10 vs. $0.05 per annotation) via smart contracts."
            />
            <FeatureCard
              title="Instant Rewards"
              desc="SOL payments clear in seconds—no more 20-30 day delays."
            />
            <FeatureCard
              title="Empowerment"
              desc="Flag tough datasets, get higher pay—turn challenges into opportunities."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <Step num="1" title="Upload" desc="Companies drop raw datasets on Solana." />
            <Step
              num="2"
              title="Annotate"
              desc="Freelancers label, validate, and flag—powered by a reputation system."
            />
            <Step
              num="3"
              title="Earn"
              desc="Get paid instantly in SOL, scaled by your reputation."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-500 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build AI's Future?</h2>
          <button
            className="bg-black text-cyan-400 font-semibold py-3 px-8 rounded-lg opacity-70 cursor-not-allowed flex items-center justify-center mx-auto"
            disabled
          >
            Get Started
            <span className="ml-2 text-sm bg-blue-800 text-white px-2 py-1 rounded">Coming Soon</span>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;