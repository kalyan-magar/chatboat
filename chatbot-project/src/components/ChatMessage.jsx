import React from 'react'
import UserProfileImages from "../assets/user.png"
import RobotProfileImages from "../assets/robot.png"

   function ChatMessage({ message, sender }) {

      //  it takes the message and sender  DIRECTYL from first parameter which is props
      //  const message = props.message;
      // const sender = props.sender;
      //  destructuring 
      // const {message , sender} = props;

      // if(sender === 'robot'){
      //   return(
      //       <div>
      //          <img src="robot.png" width="50" />
      //     {message}
      //     </div>
      //   )
      // }
      return (
        <div className={
          sender === "user"
            ? "chat-message-user"
            : "chat-message-robot"
        }>
          {sender === "robot" && <img src={RobotProfileImages} className="chat-message-profile" />}
          <div className="chat-message-text">
            {message}
          </div>
          {sender === "user" && <img src={UserProfileImages} className="chat-message-profile" />}
        </div>
      )
    }

export default ChatMessage