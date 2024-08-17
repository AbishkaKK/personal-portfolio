export const getImageUrl = (path) => {
    if (!path) {
        console.error('Invalid path provided:', path)
    }
    return new URL(`../assets/${path}`, import.meta.url).href
}
export default getImageUrl
