import React from 'react'
import Tile from '../commons/Tile'

export default function TilesforAuthor(props) {
    const html = props.data.slice(0,3).map(m=><Tile
        title={m.title} author={m.author} files={m.files}
    />)

    return (
        <div className="row tiles-for-author">
            <div className="col-xs-3" style={{"height":"inherit","margin":"auto 0px"}}>
                <div className="col-xs-6 profile">
                    <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"/>
                </div>
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