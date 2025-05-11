import { useState } from 'react';

// Message type for the dialog
interface Message {
  persona: 'Jekyll' | 'Hyde';
  text: string;
}

export function App() {
  const [personality, setPersonality] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [messages] = useState<Message[]>([
    {
      persona: 'Jekyll',
      text: 'Hello, I am Jekyll. I represent the rational, calm side.',
    },
    {
      persona: 'Hyde',
      text: 'And I am Hyde. I embody the impulsive, darker thoughts.',
    },
  ]);
  const [currentEmotion] = useState('neutral'); // This would control which emotion SVG to show

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Schizophrenic I.
        </h1>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Prompt Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Prompt Settings
          </h2>

          <div className="mb-4">
            <label
              htmlFor="personality"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Personality
            </label>
            <input
              type="text"
              id="personality"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Describe the personality traits..."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="thoughts"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thoughts
            </label>
            <textarea
              id="thoughts"
              className="w-full p-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="Enter the thoughts to process..."
            ></textarea>
          </div>

          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            onClick={() => {
              // This would trigger the LLM processing in a real implementation
              console.log('Processing:', { personality, thoughts });
            }}
          >
            Process Thoughts
          </button>
        </section>

        {/* Dialog Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Internal Dialog
          </h2>

          <div className="space-y-4 max-h-80 overflow-y-auto p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.persona === 'Jekyll'
                    ? 'bg-blue-100 ml-auto text-blue-900'
                    : 'bg-red-100 text-red-900'
                }`}
              >
                <div className="font-bold mb-1">{message.persona}</div>
                <div>{message.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Dialog Emotion Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Emotional State
          </h2>

          <div className="flex justify-center">
            {/* Placeholder for SVG - in a real app, you'd conditionally render different SVGs based on emotion */}
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm">
                Emotion SVG ({currentEmotion})
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
