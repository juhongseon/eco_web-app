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

export const getRankColor = (rank)=>{
    if(rank>3) return 'rgba(239,239,239,0.9)'
        else {
            switch(rank) {
                case 1: return 'rgba(255,204,0,0.9)'
                case 2: return 'rgba(184,184,178,0.9)'
                case 3: return 'rgba(202,140,103,0.9)'
            }
        }
}