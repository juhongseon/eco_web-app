import React from 'react'
import '../../css/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { hideLogin } from '../../actions/loginActions'

export default function Login() {
    const dispatch = useDispatch()
    const visible = useSelector(state=>state.login.visible)
    const style = {
        display : visible===true ? 'block' : 'none'
    }

    return (
        <div id="login-container" style={style}>
            <form>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email"/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                <input type="button" value="회원가입"/>
                <input onClick={()=>{dispatch(hideLogin())}} type="button" value="로그인"/>
            </form>
        </div>
    )
}