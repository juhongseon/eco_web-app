export const SERVER_URL = 'http://localhost:3355'

export const toAnimateImgsrc = (imgsrc)=>{
    return imgsrc.replace('type=m','type=ma')
}

export const toKor = (eng)=>{
    switch(eng) {
        case 'author': return '작가'
        case 'title': return '제목'
        case 'tag': return '태그'
        default: return ''
    }
}