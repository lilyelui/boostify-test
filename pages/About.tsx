import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FaSmile, FaShieldAlt, FaChartLine, FaThumbsUp } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="py-12 px-4">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold">FEATURES</h2>
        </section>

        <section className="flex justify-between items-center mb-12">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">HOW DOES IT WORK?</h3>
            <ul className="list-none">
              <li>🧍 Stand in front of Boostify</li>
              <li>😄 Smile to the camera</li>
              <li>✔️ Presence completes when emoticon appears</li>
            </ul>
          </div>
          <img src="/boostify-device.png" alt="Boostify Device" className="w-50 h-20" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Happiness and Productivity"
            description="Smiles have a positive effect on mood and productivity. BOOSTIFY integrates happiness in the attendance process."
            icon={<FaSmile size={30} />}
          />
          <FeatureCard
            title="High Security"
            description="Anti-spoofing system ensures the security of attendance data with advanced facial recognition technology."
            icon={<FaShieldAlt size={30} />}
          />
          <FeatureCard
            title="Ease of Monitoring"
            description="Live reports and attendance data recap make it easy for management to monitor attendance in real-time."
            icon={<FaChartLine size={30} />}
          />
          <FeatureCard
            title="Positive Feedback"
            description="A pleasant feedback voice makes the attendance process a positive and motivating experience."
            icon={<FaThumbsUp size={30} />}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
