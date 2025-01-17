import React from 'react'
import Tile from '../commons/Tile'
import { getRankColor } from '../../const/const'

export default function TilesforAuthor(props) {
    const idx = props.idx
    const html = props.data.slice(4*idx+0,4*(idx+1)).map(m=><Tile
        title={m.title} author={m.author} files={m.files}
    />)

    return (
        <div className="row tiles-for-author">
            <div className="col-xs-3">
                <span style={{"position":"absolute","left":"0px","top":"-10px","backgroundColor":getRankColor(props.rank),"borderRadius":"4px"}}>
                    {props.rank && <h4>&nbsp;&nbsp;{props.rank}&nbsp;&nbsp;</h4>}
                </span>
                <div className="profile">
                    <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"/>
                    <h3 style={{"margin":"40px 10px"}}>{props.name}</h3>
                </div>
            </div>
            <div className="col-xs-8">
                {html}
            </div>
            <div className="col-xs-1 tiles-more">
                &gt;
            </div>
        </div>
    )
}