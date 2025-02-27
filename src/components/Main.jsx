import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getGeminiResponse } from "../gemini/myaI.JS";

export default function Main() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse(null);
    
    try {
      const res = await getGeminiResponse(question);
      setResponse(res || "No response available.");
    } catch (error) {
      setResponse("Error fetching response. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 p-6">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 text-center text-2xl font-bold shadow-lg">
        Customer Data Platforms (CDPs) Support Agent Chatbot
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="max-w-3xl text-center bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700">
          <h1 className="text-4xl font-extrabold text-white mb-6">Ask Your CDP Questions</h1>
          <input 
            type="text" 
            className="w-full p-3 rounded-lg text-zinc-200 border border-gray-600 mb-4 bg-gray-900" 
            placeholder="Type your question here..." 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button 
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105 mb-4"
            onClick={handleAskQuestion} 
            disabled={loading}
          >
            {loading ? "Loading..." : "Ask Question"}
          </button>

          {/* Response Section */}
          {response && (
            <div className="mt-4 p-4 bg-gray-700 rounded-xl text-white text-left">
              <strong>Response:</strong>
              <div className="mt-2 p-2 bg-gray-800 rounded-lg border border-gray-600">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-4 text-center text-sm border-t border-gray-700">
        &copy; 2025 CDP Support Chatbot. All rights reserved.
      </footer>
    </div>
  );
}
