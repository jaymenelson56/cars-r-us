import { setInterior } from "./TransientState.js"

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let divStringArray = "<h2>Interiors</h2>"
    divStringArray += `<select id="interior">
    <option value="0">Select interiors...</option>`
        divStringArray += interiors.map(
            (interior) => {
                return `
            <option value="${interior.id}">${interior.type}</option>`
            
      
            }
        )
        divStringArray +=   "</select>"
        return divStringArray
}

const handleInteriorChoice = (event) => {
    if(event.target.id === "interior" && parseInt(event.target.value) > 0) {
        setInterior(parseInt(event.target.value))
    }
}