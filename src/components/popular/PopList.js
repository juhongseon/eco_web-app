import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TilesforTag from '../commons/TilesforTag'
import TilesforAuthor from '../commons/TilesforAuthor'
import Tile from '../commons/Tile'

export default function PopList() {
    const popular = useSelector(state=>state.popular)
    const filter = popular.filter

    const home = useSelector(state=>state.home)
    const sample = home.sample_data

    const html = (()=>{
        switch(filter) {
            case 'tag':
                return sample.map((m,idx)=><TilesforTag rank={idx+1} data={sample}/>)
            case 'author':
                return sample.map((m,idx)=><TilesforAuthor rank={idx+1} data={sample}/>)
            default: return sample.map((m,idx)=><Tile
                        title={m.title} author={m.author}
                        files={m.files} smaller={true}
                        offset={idx%5===0 ? true : false}
                        rank={idx+1}
                    />)
        }
    })()

    return (
        <div className="row">
            {html}
        </div>
    )
}