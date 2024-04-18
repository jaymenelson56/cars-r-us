export const OrderList = async () => {
    const response = await fetch(" http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheels&_expand=technology")
    const orders =  await response.json()

    let orderHTML = "<h2>Custom Car Orders</h2>"

    let divString = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.wheels.price + order.technology.price
            return `<div><section>Order #${order.id} costs $${orderPrice}</section></div>`
        }
    )
    orderHTML += divString.join("")
    return orderHTML
}




