import React, { useState } from 'react'

const ChatMessageList = ({ searchResult, getConversation, setChatPartnerId }) => {
    const [className, setClassName] = useState("flex flex-row py-4 px-2 justify-center items-center border-b-2 hover:bg-gray-100 cursor-pointer");
    return (
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {searchResult.map((user, index) => (
                <div key={user._id} onClick={() => {
                    getConversation(user?.latestChat?._id, user._id);
                    setChatPartnerId(user._id);
                }} className={className}>
                    <div className="w-1/4">
                        <img
                            src={user.img || "https://source.unsplash.com/_7LbC5J-jw4/600x600"}
                            className="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full">
                        <div className="text-lg font-semibold">{user.name}</div>
                        <span className="text-gray-500">{user.latestChat &&
                            user.latestChat.conversations.length > 0 ?
                            user.latestChat.conversations[user.latestChat.conversations.length - 1].message : ''}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatMessageList