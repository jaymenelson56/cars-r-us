import { InteriorOptions } from "./interiors.js"
import { OrderList } from "./orderList.js"
import { PaintOptions } from "./paints.js"
import { PlaceCar } from "./submitButton.js"
import { TechnologyOptions, } from "./technologies.js"
import { WheelOptions } from "./wheels.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintHTML = await PaintOptions()
    const wheelHTML = await WheelOptions()
    const interiorHTML = await InteriorOptions()
    const technologyHTML = await TechnologyOptions()
    const buttonHTML = await PlaceCar()
    const orderlistHTML = await OrderList()

    container.innerHTML = `
    <article><h1>Cars-R-Us</h1></article>
    <section>
    ${paintHTML}
    ${wheelHTML}
    </section>

    <section>
    ${interiorHTML}
    ${technologyHTML}
    </section>

    
    ${buttonHTML}

    <section>
    ${orderlistHTML}
    </section>
    `
}
document.addEventListener("ListIt", render)

render()