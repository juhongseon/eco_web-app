import React from 'react'
import '../../css/Emoticon.css'

export default function Emoticon(props) {
    return (
        <div id="emoticon-container">
            emoticon({props.match.params.number}) content
        </div>
    )
}