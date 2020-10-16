import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TilesforTag from '../commons/TilesforTag'
import TilesforAuthor from '../commons/TilesforAuthor'
import Tile from '../commons/Tile'
import Axios from 'axios'
import { SERVER_URL, shuffleArray } from '../../const/const'

export default function PopList() {
    const popular = useSelector(state=>state.popular)
    const filter = popular.filter
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            switch(filter) {
                case 'tag' :
                    const result = await Axios(SERVER_URL+'/tag_list')
                    setData(shuffleArray(result.data))
            }
        }
        fetchData()
    },[filter])

    return (
        <div className="row">
            {(()=>{
                switch(filter) {
                    case 'tag':
                        return data.map((m,idx)=><TilesforTag idx={idx} rank={idx+1} name={m.name}/>)
                    case 'author':
                        return data.map((m,idx)=><TilesforAuthor idx={idx} rank={idx+1} name={m.author}/>)
                    default: return data.map((m,idx)=><Tile
                                title={m.title} author={m.author}
                                files={m.files} smaller={true}
                                offset={idx%5===0 ? true : false}
                                rank={idx+1}
                            />)
                }
            })()}
        </div>
    )
}