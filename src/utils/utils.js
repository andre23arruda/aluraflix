export function getVideoId(videoUrl) {
    // const dataCode = '/?v=(.*?)$'
    const dataCode = 'youtu.be\/(.*?)$'
    const match = videoUrl.match(dataCode)
    return match ? match[1] : ''
}

export function videoThumbnail(videoId) {
    return `https://img.youtube.com/vi/${ videoId }/hqdefault.jpg)`
}

export function loadAppData() {
    const defaultData = {'categories': []}
    return JSON.parse(localStorage.getItem('aluraflix')) || defaultData
}

export function saveAppData(data) {
    localStorage.setItem('aluraflix', JSON.stringify(data))
}
