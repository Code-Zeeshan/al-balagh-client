import React, { useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth";
import io from 'socket.io-client';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const ChatConversation = ({ conversations, setConversations, chatPartnerId }) => {
    const { auth } = useAuth();
    let room = auth._id + chatPartnerId;
    room = room.split('').sort().join('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const axiosPrivate = useAxiosPrivate();


    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        newSocket.emit('join room', room);

        return () => {
            newSocket.disconnect();
        };
    }, [room]);

    // Add message to state when received from server
    useEffect(() => {
        if (socket) {
            socket.on('receive message', (message) => {
                setConversations(conversations => [...conversations, { sentBy: chatPartnerId, message }]);
            });
        }
    }, [socket]);


    const sendMessage = (event) => {
        if (event.key === "Enter" && message) {
            const discussions = [...conversations, { sentBy: auth._id, message }];
            setConversations(discussions);
            socket.emit('send message', {
                room,
                users: [auth._id, chatPartnerId],
                message,
                conversations: discussions
            });
            setMessage("");
        }
    };
    return (
        <div className="w-full px-5 flex flex-col justify-between">
            {conversations.length > 0 && conversations.map((conversation, index) => (
                <div key={index} className="flex flex-col mt-5">
                    <div className={`flex ${conversation.sentBy === auth._id ? "justify-end" : "justify-start"} mb-4`}>
                        <div
                            className={`${conversation.sentBy === auth._id ? "mr-2 bg-blue-400" : "ml-2 bg-gray-400"} py-3 px-4 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white`}
                        >
                            {/* Welcome to group everyone ! */}
                            {conversation.message}
                        </div>
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    {/* <div className="flex justify-start mb-4">
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            at praesentium, aut ullam delectus odio error sit rem. Architecto
                            nulla doloribus laborum illo rem enim dolor odio saepe,
                            consequatur quas?
                        </div>
                    </div> */}
                </div>
            ))}
            <div className="py-5">
                <input
                    className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                    type="text"
                    placeholder="type your message here..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    onKeyDown={sendMessage}
                />
            </div>
        </div>
    )
}

export default ChatConversation