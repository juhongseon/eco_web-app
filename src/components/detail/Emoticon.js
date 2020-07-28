import React, { useEffect } from 'react'
import '../../css/Emoticon.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailEmoticon } from '../../actions/detailActions'
import Emo from '../commons/Emo'

export default function Emoticon(props) {
    const dispatch = useDispatch()
    const number = props.match.params.number
    useEffect(()=>{
        dispatch(fetchDetailEmoticon(number))
    },[number])

    const emo = useSelector(state=>state.detail.emoticon)
    const author = emo.author
    const title = emo.title
    const files = emo.files

    const html = files && files.map((m,idx)=>{
        return <Emo imgsrc={m} offset={idx%5===0 ? true : false}/>
    })

    return (
        <div id="emoticon-container" className="container">
            <div className="row">
                <div className="col-xs-offset-1 col-xs-10 row" style={{"border":"1px solid rgb(221,221,221)","borderRadius":"4px"}}>
                    <div className="col-xs-3">
                        <div className="row profile text-center">
                            <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"/>
                        </div>
                        <div className="row text-center" style={{"marginBottom":"10px"}}>
                            {author}
                        </div>
                    </div>
                    <div className="col-xs-9" style={{"marginTop":"30px"}}>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {html}
            </div>
        </div>
    )
}