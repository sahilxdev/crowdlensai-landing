import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex items-center justify-center min-h-[80vh] text-center px-4"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-purple-500">CrowdLensAI</span> <br /> Shape AI’s Future
            </motion.h1>
            <p className="text-xl md:text-2xl mb-8">
              A decentralized platform on Polygon empowering freelancers with instant POL rewards and a game-changing reputation system.
            </p>
            <button
              className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg opacity-70 cursor-not-allowed flex items-center justify-center mx-auto"
              disabled
            >
              Join the Revolution
              <span className="ml-2 text-sm bg-purple-800 px-2 py-1 rounded">Coming Soon</span>
            </button>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Reputation That Pays"
              desc="Top performers earn more (e.g., $0.10 vs. $0.05 per annotation) via smart contracts."
            />
            <FeatureCard
              title="Instant Rewards"
              desc="POL payments clear in seconds—no more 20-30 day delays."
            />
            <FeatureCard
              title="Empowerment"
              desc="Flag tough datasets, get higher pay—turn challenges into opportunities."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <Step num="1" title="Upload" desc="Companies drop raw datasets on Polygon." />
            <Step
              num="2"
              title="Annotate"
              desc="Freelancers label, validate, and flag—powered by a reputation system."
            />
            <Step
              num="3"
              title="Earn"
              desc="Get paid instantly in POL, scaled by your reputation."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-700 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build AI’s Future?</h2>
          <button
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg opacity-70 cursor-not-allowed flex items-center justify-center mx-auto"
            disabled
          >
            Get Started
            <span className="ml-2 text-sm bg-gray-200 text-purple-700 px-2 py-1 rounded">Coming Soon</span>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const FeatureCard = ({ title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-700 rounded-lg"
  >
    <h3 className="text-xl font-semibold text-purple-400 mb-2">{title}</h3>
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
    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
      {num}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  </motion.div>
);

export default App;