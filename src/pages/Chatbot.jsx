import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h2>AI Health Chatbot</h2>
        </div>
      </nav>

      {/* Main layout */}
      <div className="main">

        {/* Chat History */}
        <aside className="history">
          <h3>Previous Chats</h3>
          <ul>
            <li>Chat with Doctor</li>
            <li>Health Tips</li>
            <li>Diet Query</li>
          </ul>
        </aside>

        {/* Chat Section */}
        <section className="chat-container">

          <div className="chat-body">
            <div className="message bot">
              Hello! How can I help you today?
            </div>
          </div>

          {/* Input + Upload */}
          <div className="chat-footer">
            <label className="upload-btn">
              📎
              <input type="file" hidden />
            </label>

            <input
              type="text"
              placeholder="Type your message..."
            />

            <button>Send</button>
          </div>

        </section>
      </div>
    </div>
  );
}
