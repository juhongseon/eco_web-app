import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImgsrc } from '../../actions/modalActions'
import { addFavorite, removeFavorite } from '../../actions/myActions'
import { toAnimateImgsrc } from '../../const/const'

export default function Emo(props) {
    const imgsrc = props.imgsrc
    const dispatch = useDispatch()
    
    const favArr = useSelector(state=>state.my.favorite)

    return(
        <div className="col-xs-4" style={{"padding":"4px"}}>
            <div className="thumbnail">
                <img
                    onMouseEnter={(e)=>{
                        e.target.setAttribute('src',toAnimateImgsrc(imgsrc))
                    }}
                    onMouseLeave={(e)=>{
                        e.target.setAttribute('src',imgsrc)
                    }}
                    onClick={()=>{dispatch(setImgsrc(imgsrc))}} src={imgsrc} alt="Lights" style={{"width":"100%","cursor":"pointer"}}
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