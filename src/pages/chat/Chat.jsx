import React from 'react'
import ChatMessageList from "../../components/chatMessageList/ChatMessageList";
import ChatConversation from "../../components/chatConversation/ChatConversation";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export const Chat = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [searchResult, setSearchResult] = useState(users);
    const [chatPartnerId, setChatPartnerId] = useState("");

    useEffect(() => {
        let isMounted = true;
        // const controller = new AbortController();
        getUsers();
        return () => {
            isMounted = false;
            // controller.abort();
        }
    }, []);

    const getUsers = async () => {
        try {
            const filter = {};
            if (auth.role === 7260) {
                filter._id = { $ne: auth._id };
            }
            else {
                filter.role = 7260;
            }
            const response = await axiosPrivate.axios.post("/users/findMany", {
                filter,
                project: {
                    name: 1,
                    updatedAt: 1,
                    img: 1
                }
            });
            setUsers(response.data);
            setSearchResult(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const getConversation = async (chatId) => {
        if (chatId) {
            const response = await axiosPrivate.axios.post("/chats/findOne", {
                filter: {
                    _id: chatId
                },
                project: {}
            });
            setConversations(response.data);
        }
    }

    const filterUsers = (name = "") => {
        if (name.trim() === "") setSearchResult(users);
        else
            setSearchResult(users.filter(user => user.name.match(new RegExp(name.trim(), "i"))));
    }
    return (
        <div className="container mx-auto shadow-lg rounded-lg">
            <div className="border-b-2 py-4 px-2">
                <input
                    type="text"
                    placeholder="search"
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    onChange={(e) => filterUsers(e.target.value)}

                />
            </div>
            <div className="px-5 py-5 flex flex-row justify-between bg-white bg-white border-t-2">
                <ChatMessageList searchResult={searchResult} getConversation={getConversation}
                    setChatPartnerId={setChatPartnerId} />
                {chatPartnerId && <ChatConversation conversations={conversations} setConversations={setConversations} chatPartnerId={chatPartnerId} />}
            </div>
        </div>
    )
}
export default Chat
