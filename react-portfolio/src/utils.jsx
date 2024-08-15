// export const getImageUrl = (path) => {
//     if (!path) {
//         console.log('Invalid path:', path)
//     }
//     return new URL(`/assets/${path}`, import.meta.url).href
// }
// export default getImageUrl

export const getImageUrl = (path) => {
    if (!path) {
        console.error('Invalid path provided:', path)
    }
    return new URL(`../assets/${path}`, import.meta.url).href
}
export default getImageUrl
