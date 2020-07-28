import React from 'react'
import { useSelector } from 'react-redux'
import CateSideBtn from './CateSideBtn'
import Tile from '../commons/Tile'

export default function CateContent() {
    const selected = useSelector(state=>state.category.selected)
    const html = selected.map(m=><CateSideBtn name={m}/>)

    const sample = useSelector(state=>state.home.sample_data)
    const html2 = sample.map((m,idx)=><Tile
                                    imgsrc={m.imgsrc} title={m.title}
                                    author={m.author} files={m.files}
                                    offset={idx%5===0 ? true : false}
                                    smaller={true}
                                />)

    return (
        <div className="col-xs-10">
            {html}
            <div className="row" style={{"marginTop":"10px"}}>
                {html2}
            </div>
        </div>
    )
}