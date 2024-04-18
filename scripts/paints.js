import { setPaint } from "./TransientState.js"

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let divStringArray = "<h2>Paints</h2>"
    divStringArray += `<select id="paint">
    <option value="0">Select a color...</option>`
        divStringArray += paints.map(
            (paint) => {
                return `
            <option value="${paint.id}">${paint.color}</option>`
            
      
            }
        )
        divStringArray +=   "</select>"
        return divStringArray
}

const handlePaintChoice = (event) => {
    if(event.target.id === "paint" && parseInt(event.target.value) > 0) {
        setPaint(parseInt(event.target.value))
    }
}