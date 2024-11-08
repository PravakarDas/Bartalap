import React from 'react'
import './myStyles.css';

function ConversationsItem({props}) {
  return (
    <div className='conversation-container'>
        <p className='conversation-icon'>{props.name[0]}</p>
        <p className='conversation-title'>{props.name}</p>
        <p className='conversation-lasMmessage'>{props.lastMessage}</p>
        <p className='conversation-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationsItem