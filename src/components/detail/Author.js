import React from 'react'
import '../../css/Author.css'

export default function Author(props) {
    return (
        <div id="author-container">
            author({props.match.params.id}) content
        </div>
    )
}