import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/myActions'
import { toAnimateImgsrc } from '../../const/const'

export default function Emo(props) {
    const imgsrc = props.imgsrc
    const dispatch = useDispatch()
    
    const favArr = useSelector(state=>state.my.favorite)

    return(
        <div className={props.offset===true ? "col-xs-offset-1 col-xs-2" : "col-xs-2"}>
            <div className="thumbnail">
                <img
                    onMouseEnter={(e)=>{
                        e.target.setAttribute('src',toAnimateImgsrc(imgsrc))
                    }}
                    onMouseLeave={(e)=>{
                        e.target.setAttribute('src',imgsrc)
                    }}
                    onClick={()=>{}} src={imgsrc} style={{"width":"100%","cursor":"pointer"}}
                />
                <div className="text-right">
                    {
                        favArr.includes(imgsrc) ? 
                        <span onClick={()=>{dispatch(removeFavorite(imgsrc))}} style={{"cursor":"pointer","color":"yellow"}}>★</span> : 
                        <span onClick={()=>{dispatch(addFavorite(imgsrc))}} style={{"cursor":"pointer","color":"gray"}}>★</span>
                    }
                </div>
            </div>
        </div>
    )
}