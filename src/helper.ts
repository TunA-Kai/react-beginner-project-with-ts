export function shuffle<T>(array: Array<T>): Array<T> {
    let counter = array.length

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter)

        // Decrease counter by 1
        counter--

        // And swap the last element with it
        let temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }

    return array
}

/* ------------------------------------------ */
export function stringToHTML(str: string): string {
    const parser = new DOMParser()
    const doc = parser.parseFromString(str, 'text/html')
    return doc.body.textContent ?? 'stringToHTML error'
}
