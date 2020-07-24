import React from 'react'
import '../../css/Suggest.css'
import { useSelector, useDispatch } from 'react-redux'
import SuggestItem from './SuggestItem'
import { hideSuggest } from '../../actions/suggestActions'

export default function Suggest() {
    const dispatch = useDispatch()
    const suggest = useSelector(state=>state.suggest)
    const style = {
        display : suggest.visible===true ? 'block' : 'none'
    }

    return (
        <div id="suggest-container" style={style}>
            <div onClick={()=>{dispatch(hideSuggest())}} id="suggest-background"></div>
            <div id="suggest-popup">
                <SuggestItem keyword="곰곰"/>
                <SuggestItem keyword="Eugene"/>
                <SuggestItem keyword="하얀오리asdfasdfasdfasdf123412341234"/>
                <SuggestItem keyword="냥토리"/>
                <SuggestItem keyword="콘스티커"/>
                <SuggestItem keyword="임샤인"/>
                <SuggestItem keyword="우유차"/>
                <SuggestItem keyword="JDD"/>
                <SuggestItem keyword="펭귄순이"/>
                <SuggestItem keyword="smiled7790"/>
                <SuggestItem keyword="꿀꿀페파"/>
                <SuggestItem keyword="바냐"/>
            </div>
        </div>
    )
}