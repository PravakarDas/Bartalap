import React from 'react';
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useState } from 'react';
function Sidebar() {
    const [conversations, setConversations] = useState([
        {
            name: "John Doe",
            lastMessage: 'Hello, how are you?',
            timeStamp: '12:00 PM',
        },
        {
            name: "Rose Mary",
            lastMessage: 'Hello, how are you?',
            timeStamp: '1:00 PM',
        },
        {
            name: "John Smith",
            lastMessage: 'Hello, how are you?',
            timeStamp: '2:00 AM',
        }
    ]);
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                
                <div className='sidebar-header-left'>
                    <IconButton>
                    <AccountCircleIcon />
                    </IconButton>
                </div>
                <div className='sidebar-header-right'>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <DarkModeRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <IconButton>
                    <SearchRoundedIcon />
                </IconButton>
                <input type='text' placeholder='Search' className='search-box'/>
            </div>
            <div className='sidebar-conversations'>
                {conversations.map((conversation) => {
                    return <ConversationsItem props={conversation} key={conversation.name} />
                })}
            </div>
        </div>
    
    );
};

export default Sidebar;