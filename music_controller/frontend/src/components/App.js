import React, {Component} from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateJoinPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <div>
            <HomePage />
            <RoomJoinPage />
            <CreateJoinPage />
            </div> )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)
