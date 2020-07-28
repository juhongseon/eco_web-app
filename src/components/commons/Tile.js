import React from "react"
import { useDispatch } from "react-redux"
import { toAnimateImgsrc, getRankColor } from "../../const/const"
import { NavLink } from "react-router-dom"

export default function Tile(props) {
    const title = props.title
    const author = props.author
    const files = props.files
    let thumbnail = files[0]

    const layout = props.smaller===true ? "col-xs-2" : "col-xs-3"
    const offset = props.offset===true ? " col-xs-offset-1" : ""
    const clsName = layout + offset

    return (
        <div onClick={()=>{}} className={clsName} style={{"padding":"4px","cursor":"pointer"}}>
            <span style={{"position":"absolute","left":"5px","top":"5px","backgroundColor":getRankColor(props.rank),"borderRadius":"4px"}}>
                {props.rank && <h4>&nbsp;&nbsp;{props.rank}&nbsp;&nbsp;</h4>}
            </span>
            <div className="thumbnail">
                <NavLink to={'/Emoticon/'+title}>
                    <img src={thumbnail} alt="Lights" style={{"width":"100%"}}
                        onMouseEnter={(e)=>{
                            e.target.setAttribute('src',toAnimateImgsrc(thumbnail))
                        }}
                        onMouseLeave={(e)=>{
                            e.target.setAttribute('src',thumbnail)
                        }}
                    />
                </NavLink>
                <div className="caption" style={{"padding":"0px"}}>
                    <p style={{"marginBottom":"4px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>
                        <NavLink to={'/Emoticon/'+title} style={{"color":"black"}}>
                            {title}
                        </NavLink>
                    </p>
                    <p style={{"textAlign":"right","marginBottom":"0px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>
                        <NavLink to={'/Author/'+author} style={{"color":"black"}}>{author}</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}