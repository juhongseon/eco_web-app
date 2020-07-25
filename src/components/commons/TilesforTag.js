import React from 'react'
import Tile from './Tile'
import { NavLink } from 'react-router-dom'

export default function TilesforTag(props) {
    const data = props.data
    const html = data.slice(0,3).map(m=><Tile
        title={m.title} author={m.author} files={m.files}
    />)

    return (
        <div className="row tiles-for-tag">
            <div className="col-xs-3">
                <NavLink to={'/Tag/'+'tag'}>#tag</NavLink>
            </div>
            <div className="col-xs-8">
                {html}
            </div>
            <div className="col-xs-1">
                &gt;
            </div>
        </div>
    )
}