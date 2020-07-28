import React from 'react'
import Tile from './Tile'
import { NavLink } from 'react-router-dom'
import { getRankColor } from '../../const/const'

export default function TilesforTag(props) {
    const data = props.data
    const html = data.slice(0,4).map(m=><Tile
        title={m.title} author={m.author} files={m.files}
    />)

    return (
        <div className="row tiles-for-tag">
            <div className="col-xs-3">
                <span style={{"position":"absolute","left":"0px","top":"-10px","backgroundColor":getRankColor(props.rank),"borderRadius":"4px"}}>
                    {props.rank && <h4>&nbsp;&nbsp;{props.rank}&nbsp;&nbsp;</h4>}
                </span>
                <h3 style={{"marginTop":"60px"}}><NavLink to={'/Tag/'+'tag'} style={{"color":"black"}}>#tag</NavLink></h3>
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