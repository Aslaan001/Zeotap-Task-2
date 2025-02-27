import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 text-center text-2xl font-bold shadow-lg">
        Customer Data Platforms (CDPs) Support Agent Chatbot (Task-2) Made by - Aslaan Khan
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="max-w-3xl text-center bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Support Agent Chatbot for CDP
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            A chatbot designed to answer "how-to" questions related to Customer Data Platforms (CDPs) such as Segment, mParticle, Lytics, and Zeotap.
          </p>
          <div className="grid grid-cols-2 gap-6">
            
            {/* Get Started Button (Navigates to /main) */}
            <button 
              onClick={() => navigate("/main")}
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Get Started
            </button>
            
            {/* Learn More Button (Navigates to GitHub) */}
            <a 
              href="https://github.com/Aslaan001/Zeotap-Task-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full px-8 py-4 bg-gray-700 text-white rounded-xl shadow-lg hover:bg-gray-600 transition transform hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-4 text-center text-sm border-t border-gray-700">
        &copy; 2025 CDP Support Chatbot. All rights reserved.
      </footer>
    </div>
  );
}
