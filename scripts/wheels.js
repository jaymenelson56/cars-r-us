import { setWheels } from "./TransientState.js"

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelsChoice)

    let divStringArray = "<h2>Wheels</h2>"
    divStringArray += `<select id="wheels">
    <option value="0">Select wheels...</option>`
        divStringArray += wheels.map(
            (wheel) => {
                return `
            <option value="${wheel.id}">${wheel.spins}</option>`
            
      
            }
        )
        divStringArray +=   "</select>"
        return divStringArray
}

const handleWheelsChoice = (event) => {
    if(event.target.id === "wheels" && parseInt(event.target.value) > 0) {
        setWheels(parseInt(event.target.value))
    }
}