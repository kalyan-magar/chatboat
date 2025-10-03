import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import UserProfileImages from "./assets/user.png"
import RobotProfileImages from "./assets/robot.png"
import './App.css'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

 function App() {

      const [chatMessages, setChatMessages] = useState([
        { message: "Hello Chatboat", sender: "user", id: 'id1' },
        { message: "Hello! How can I help you?", sender: "robot", id: 'id2' },
        { message: "can you help me to get today date", sender: "user", id: 'id3' },
        { message: "Today is September 28", sender: "robot", id: 'id4' },
        { message: "Thank you", sender: "user", id: 'id6' },
        { message: "No problem! Let me know if you need help with anything else!", sender: "robot", id: 'id5' }])

      // const chatMessages = array[0];
      // const setChatMessages = array[1];


      return (
        <div className="app-container">

          <ChatMessages
            chatMessages={chatMessages}
          />
          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      )
    }
   

export default App
