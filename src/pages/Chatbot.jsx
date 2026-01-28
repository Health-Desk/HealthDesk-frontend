import React from "react";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="page">
      <div className="box">
        <div className="title">
          Hi I am your AI Health Assistant. How can I help you?
        </div>

        <div className="input-container">
          <input
            type="text"
            className="textbox"
            placeholder="Ask Anything you want to ..."
          />

          <label htmlFor="fileInput" className="file-upload-btn">
            +
          </label>

          <input type="file" id="fileInput" />

          <button className="send-btn">➤</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
