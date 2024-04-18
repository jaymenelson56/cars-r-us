import { SubmitCar } from "./TransientState.js"

const handleSubmitClick = (clickEvent) => {
    if(clickEvent.target.id === "submit") {
        SubmitCar()
    }
}

export const PlaceCar = () => {

    document.addEventListener("click", handleSubmitClick)

    return "<div><button id='submit'>Place Car Order</button></div>"

}