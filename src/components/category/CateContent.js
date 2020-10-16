import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CateSideBtn from './CateSideBtn'
import Tile from '../commons/Tile'
import Axios from'axios'
import { SERVER_URL } from '../../const/const'

export default function CateContent() {
    const selected = useSelector(state=>state.category.selected)
    const html = selected.map(m=><CateSideBtn name={m}/>)
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            let search = JSON.stringify(selected)
            search = search.replace(/\"/g,'')
            search = search.replace(/\[/g,'')
            search = search.replace(/\]/g,'')
            const result = await Axios(SERVER_URL+'/search_by_category?tags='+search)
            setData(result.data)
        }
        fetchData()
    },[selected])

    return (
        <div className="col-xs-10">
            {html}
            <div className="row" style={{"marginTop":"10px"}}>
                {data.map((m,idx)=><Tile
                                    imgsrc={m.imgsrc} title={m.title}
                                    author={m.author} files={m.files}
                                    offset={idx%5===0 ? true : false}
                                    smaller={true}
                                />)}
            </div>
        </div>
    )
}