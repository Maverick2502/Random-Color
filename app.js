const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    
    const randomColor = makeRandomColor();
    document.body.style.background = randomColor;
    h1.innerHTML = randomColor;
    
})

function makeRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return`rgb(${r}, ${g}, ${g})`;
}