import React from "react"
import { useDispatch } from "react-redux"
import { showModal } from "../../actions/modalActions"
import { toAnimateImgsrc } from "../../const/const"

export default function Tile(props) {
    const dispatch = useDispatch()
    const title = props.title
    const author = props.author
    const files = props.files
    const thumbnail = files[0]

    return (
        <div onClick={()=>{dispatch(showModal(title,author,files))}} className="col-xs-4" style={{"padding":"4px","cursor":"pointer"}}>
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
                    <p style={{"marginBottom":"4px"}}>{title.length>9 ? title.substring(0,8)+'...' : title}</p>
                    <p style={{"textAlign":"right","marginBottom":"0px"}}>{author}</p>
                </div>
            </div>
        </div>
    )
}