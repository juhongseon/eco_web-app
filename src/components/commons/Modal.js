import React, { useEffect } from 'react'
import '../../css/Modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '../../actions/modalActions'
import Emo from './Emo'
import { setFavorite } from "../../actions/myActions"

export default function Modal() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const initFavArr = JSON.parse('[]')
        dispatch(setFavorite(initFavArr))
    },[])

    const my = useSelector(state=>state.my)
    const favArr = my.favorite
    const myChanged = my.changed

    useEffect(()=>{
        document.getElementById('init').value = JSON.stringify(favArr)
        document.getElementById('init').click()
    },[myChanged])

    const modal = useSelector(state=>state.modal)
    const style = {
        display: modal.visible ? 'block' : 'none'
    }
    const imgsrc = modal.imgsrc
    const changed = modal.changed
    useEffect(()=>{
        document.getElementById('emo-imgsrc').click()
    },[changed])

    const title = modal.title
    const author = modal.author
    const html = modal.files.map(m=><Emo imgsrc={m}/>)

    return(
        <div id="modal" style={style}>
            <div onClick={()=>{dispatch(hideModal())}} id="modal-background"></div>
            <div id="modal-popup">
                <div className="text-right">
                    <span onClick={()=>{dispatch(hideModal())}} id="modal-close">X</span>
                </div>
                <h4 className="text-center">{title}</h4>
                <div className="text-right" style={{"marginRight":"5px"}}>
                    <font color="gray">by</font> {author}
                </div>
                {html}
            </div>
            <input type="hidden" id="emo-imgsrc" value={imgsrc}/>
        </div>
    )
}