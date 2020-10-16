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

// https://winplz.tistory.com/entry/%ED%95%9C%EA%B8%80-%EC%9E%90%EC%9D%8C-%EB%B9%84%EA%B5%90%EA%B0%99%EC%A7%80%EB%A7%8C-%EB%8B%A4%EB%A5%B8-%EC%9E%90%EC%9D%8C%EB%93%A4
export const sepKor = (han)=>{
    if(han.length===1 && han.charCodeAt(0)>=12593 && han.charCodeAt(0)<=12622) {
        let hanMap = {
            12593: 4352, 12594: 4353, 12596: 4354, 12599: 4355,
            12600: 4356, 12601: 4357, 12609: 4358, 12610: 4359,
            12611: 4360, 12613: 4361, 12614: 4362, 12615: 4363,
            12616: 4364, 12617: 4365, 12618: 4366, 12619: 4367,
            12620: 4368, 12621: 4369, 12622: 4370
        }
        return String.fromCharCode(hanMap[han.charCodeAt(0)])
    }

    let res = ''

    // https://gist.github.com/sooop/4958873
    for(let i=0; i<han.length; i++) {
        let temp1 = ((han.charCodeAt(i) - parseInt('0xac00',16)) / 28) / 21
        res += '|'+String.fromCharCode(temp1 + parseInt('0x1100',16))

        let temp2 = ((han.charCodeAt(i) - parseInt('0xac00',16)) / 28) % 21
        res += '|'+String.fromCharCode(temp2 + parseInt('0x1161',16))

        let temp3 = ((han.charCodeAt(i) - parseInt('0xac00',16))) % 28
        res += '|'+String.fromCharCode(temp3 + parseInt('0x11A8',16) - 1)
    }

    return res.replace(/\\|ᆧ/g,'')
}

export const shuffleArray = (origin)=>{
    let res = []
    for(let i=origin.length-1; i>=0; i--) {
        let random = Math.floor(Math.random()*i)
        res = res.concat(origin[random])
        origin.splice(random,1)
    }
    return res
}