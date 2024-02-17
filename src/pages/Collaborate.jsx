import { useState, useEffect } from "react";
import Img from "../assets/signup_vector.png";
import Navbar from "../component/Navbar";
import * as Yup from "yup";
// import UpdateDetails from "../dashboardContent/UpdateDetails";
// import OngoingCourses from "../dashboardContent/OngoingCourses";
// import PurchesedCourses from "../dashboardContent/PurchesedCourses";
// import CompletedCourses from "../dashboardContent/CompletedCourses";

import LiveStreamRoom from "../collaborateContent/LiveStreamRoom";
import AudioRoom from "../collaborateContent/AudioRoom";
import VideoRoom from "../collaborateContent/VideoRoom";
import ChatRoom from "../collaborateContent/ChatRoom";
import { Link } from "react-router-dom";

const Collaborate = () => {
    const [joinChatRoom, setJoinChatRoom] = useState(true);
    const [joinLiveStream, setJoinLiveStream] = useState(false);
    const [joinVideoRoom, setJoinVideoRoom] = useState(false);
    const [joinAudioRoom, setJoinAudioRoom] = useState(false);

    return (
        <>
            <Navbar />
            <ul className="m-2 p-4 rounded-sm z-10">
            <button
                    className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${joinChatRoom ? "bg-[#4F46E5]" : "bg-[#E7E9E8]"}`}
                    onClick={() => {
                        setJoinChatRoom(true);
                        setJoinLiveStream(false);
                        setJoinVideoRoom(false);
                        setJoinAudioRoom(false);
                    }}
                >
                    Join Chat Room 
                </button>
                <button
                    className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${joinLiveStream ? "bg-[#4F46E5]" : "bg-[#E7E9E8]"}`}
                    onClick={() => {
                        setJoinLiveStream(true);
                        setJoinChatRoom(false);
                        setJoinVideoRoom(false);
                        setJoinAudioRoom(false);
                    }}
                >
                    Join Live Stream
                </button>
                <button
                    className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${joinVideoRoom ? "bg-[#4F46E5]" : "bg-[#E7E9E8]"}`}
                    onClick={() => {
                        setJoinLiveStream(false);
                        setJoinChatRoom(false);
                        setJoinVideoRoom(true);
                        setJoinAudioRoom(false);
                    }}
                >
                    Join Video Room
                </button>
                <button
                    className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${joinAudioRoom ? "bg-[#4F46E5]" : "bg-[#E7E9E8]"}`}
                    onClick={() => {
                        setJoinLiveStream(false);
                        setJoinChatRoom(false);
                        setJoinVideoRoom(false);
                        setJoinAudioRoom(true);
                    }}
                >
                    Join Audio Room
                </button>

            </ul>
            <div className="flex justify-around">
                {joinChatRoom && <ChatRoom/>}
                {joinVideoRoom && <VideoRoom />}
                {joinAudioRoom && <AudioRoom />}
                {joinLiveStream && <LiveStreamRoom />}
                <div className="hidden lg:flex">
                    {/* <img
                        className="h-[300px] w-[400px] mt-20"
                        src={Img}
                        alt="Log in Image"
                    /> */}
                </div>
                {/* <Link
                to="/quizpage"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-full ">
                Quiz Page
              </Link> */}
            </div>

        </>
    );
};

export default Collaborate;
