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
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink exact to={'/Home'} className="navbar-brand">Eco</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <select onChange={(e)=>{dispatch(setHomeFilter1(e.target.value))}} value={filter1} style={{"height":"34px","border":"1px solid rgb(204,204,204)","borderRadius":"5px"}}>
                            <option value="title"> 제목</option>
                            <option value="tag"> 태그</option>
                            <option value="author"> 작가</option>
                        </select>
                        <form action="#" style={{"display":"inline-block","width":"200px","position":"relative","top":"12px"}}>
                            <div className="input-group">
                                <input onFocus={()=>{dispatch(showSuggest())}} value={keyword} onChange={(e)=>{dispatch(setKeyword(e.target.value))}} type="text" className="form-control" placeholder="검색어를 입력하세요."/>
                                <div className="input-group-btn">
                                <NavLink to={'/Home'}>
                                    <button className="btn btn-default" type="button">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </NavLink>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li><NavLink to={'/My'}>My</NavLink></li>
                    <li onClick={()=>{dispatch(showAdditional())}} style={{"cursor":"pointer"}}>Adtn</li>
                </ul>
            </div>
        </nav>
    )
}