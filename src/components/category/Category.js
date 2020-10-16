import React from 'react'
import '../../css/Category.css'
import CateSide from './CateSide'
import CateContent from './CateContent'

export default function Category() {
    return (
        <div id="category-container" className="container">
            <div className="row">
                <CateSide/>
                <CateContent/>
            </div>
        </div>
    )
}