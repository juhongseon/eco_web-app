import React from 'react'
import '../../css/Tag.css'

export default function Tag(props) {
    return (
        <div id="tag-container">
            tag({props.match.params.name}) content
        </div>
    )
}