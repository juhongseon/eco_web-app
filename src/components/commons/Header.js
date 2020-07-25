import React from "react"
import {NavLink} from "react-router-dom"
import '../../css/Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <NavLink exact to={'/Home'} className="navbar-brand">Eco</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to={'/Popular'}>Popular</NavLink></li>
                    <li><NavLink to={'/Category'}>Category</NavLink></li>
                    <li><NavLink to={'/Search'}>Search</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to={'/My'}>My</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}