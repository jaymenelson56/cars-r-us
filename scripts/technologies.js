import { setTechnology } from "./TransientState.js"

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechChoice)


    let divStringArray = "<h2>Technologies</h2>"
    divStringArray += `<select id="tech">
    <option value="0">Select technologies...</option>`
        divStringArray += technologies.map(
            (technology) => {
                return `
            <option value="${technology.id}">${technology.tech}</option>`
            
      
            }
        )
        divStringArray +=   "</select>"
        return divStringArray
}

const handleTechChoice = (event) => {
    if(event.target.id === "tech" && parseInt(event.target.value) > 0) {
        setTechnology(parseInt(event.target.value))
    }
}