import React from "react"
import "../../css/Home.css"
import HomeFilter from "./HomeFilter"
import HomeList from "./HomeList"

export default function Home() {
    return (
        <div id="home-container" className="container-fluid">
            <HomeFilter/>
            <HomeList/>
        </div>
    )
}