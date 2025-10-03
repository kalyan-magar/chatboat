import React,{useState} from 'react'
import { Chatbot } from 'supersimpledev';

 function ChatInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState("");

      function saveInputText(e) {
        setInputText(e.target.value);
      }

      function sendMessage() {
        const newChatMessages = [
          ...chatMessages, {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          }

        ]

        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText)

        setChatMessages(
          [...newChatMessages, {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          }]
        )
        setInputText("")
      }

      return (
        <div className="chat-input-container">
          <input
            placeholder="Send msg to Chatboat"
            size="30"
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
          />
          <button
            className="send-button"
            onClick={sendMessage}> Send</button>
        </div>

      )
    }

export default ChatInput