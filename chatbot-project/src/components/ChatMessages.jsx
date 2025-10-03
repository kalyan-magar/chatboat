import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

 function ChatMessages({ chatMessages }) {
       const chatMessageRef=   useRef(null)

     useEffect(() => {
      const containerElem= chatMessageRef.current;
      if(containerElem){
        containerElem.scrollTop= containerElem.scrollHeight;
      }

  console.log(chatMessageRef.current);
      
      }, [chatMessages])


      return (<div className="chat-messages-container"
      ref={chatMessageRef}>
        {chatMessages.map((chatMessages) => {
          return (<ChatMessage
            message={chatMessages.message}
            sender={chatMessages.sender}
            key={chatMessages.id}
          />

          )
        })}
      </div>);


    }


export default ChatMessages