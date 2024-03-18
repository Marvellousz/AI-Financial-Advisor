import React from "react";
import ApexChart from "./components/Chart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";
import Dash from "./components/Dash"

export default function Dashboard() {
    return (
        <div>
        <Header />
        <Dash />
        <ApexChart />
        <ChatInput />
        <Footer />
        </div>
    );
}

