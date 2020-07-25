import React from "react"
import { useDispatch } from "react-redux"
import { toAnimateImgsrc } from "../../const/const"
import { NavLink } from "react-router-dom"

export default function Tile(props) {
    const dispatch = useDispatch()
    const title = props.title
    const author = props.author
    const files = props.files
    let thumbnail = files[0]
    thumbnail = 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'

    return (
        <div onClick={()=>{}} className="col-xs-4" style={{"padding":"4px","cursor":"pointer"}}>
            <div className="thumbnail">
                <img src={thumbnail} alt="Lights" style={{"width":"100%"}}
                    onMouseEnter={(e)=>{
                        e.target.setAttribute('src',toAnimateImgsrc(thumbnail))
                    }}
                    onMouseLeave={(e)=>{
                        e.target.setAttribute('src',thumbnail)
                    }}
                />
                <div className="caption" style={{"padding":"0px"}}>
                    <p style={{"marginBottom":"4px"}}>
                        <NavLink to={'/Emoticon/'+title}>
                            {title.length>9 ? title.substring(0,8)+'...' : title}
                        </NavLink>
                    </p>
                    <p style={{"textAlign":"right","marginBottom":"0px"}}>
                        <NavLink to={'/Author/'+author}>{author}</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}