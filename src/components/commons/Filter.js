import React from "react"
import '../../css/Filter.css'

export default function Filter() {
    return (
        <div id="filter-container">
            <div className="filter">
                <span className="text">영어 댓글 가리기</span>
                <label className="switch">
                    <input id="filter_checkbox" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}