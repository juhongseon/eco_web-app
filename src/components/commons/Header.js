import React from "react"
import {NavLink} from "react-router-dom"
import '../../css/Header.css'
import { useDispatch, useSelector } from "react-redux"
import { showAdditional } from "../../actions/additionalActions"
import { setKeyword, setHomeFilter1 } from "../../actions/homeActions"
import { showSuggest, hideSuggest } from "../../actions/suggestActions"

export default function Header() {
    const dispatch = useDispatch()
    const home = useSelector(state=>state.home)
    const filter1 = home.filter1
    const keyword = home.keyword

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink exact to={'/Home'} className="navbar-brand">Eco</NavLink>
                </div>
                <ul id={"nav-items"} className="nav navbar-nav">
                    <li><NavLink to={'/Popular'}>Popular</NavLink></li>
                    <li><NavLink to={'/Category'}>Category</NavLink></li>
                    <li><NavLink to={'/My'}>Search</NavLink></li>
                    <li><NavLink to={'/My'}>My</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}