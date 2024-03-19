import React from "react";
import ApexChart from "./components/Chart";
import ApexChart1 from "./components/Donut";
import ApexChart2 from "./components/Polygon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";
import Dash from "./components/Dash"


export default function Dashboard(props) {
    return (
        <div>
            {/* {console.log('sfgsdffffffffffgdf',JSON.parse(props.responseData))} */}
        <Header />
        <Dash />
        <ApexChart1 values={props.responseData}/>
        <ApexChart2 values={props.responseData}/>
        <ChatInput />
        <Footer />
        </div>
    );
}

