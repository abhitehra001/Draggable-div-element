const box = document.getElementById("box");
const drag = document.getElementById("drag");
const color = document.getElementById("color");

color.onchange = (e) => {
    box.style.backgroundColor = e.target.value
}



drag.onmousedown = (e) => {
    e.preventDefault();
    let [pos1, pos2, pos3, pos4] = [0, 0, e.clientX, e.clientY]
    
    document.onmouseup = (e) => {
        document.onmouseup = null
        document.onmousemove = null;
    }
    document.onmousemove = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        box.style.top = `${box.offsetTop - pos2}px`
        box.style.left = `${box.offsetLeft - pos1}px`
    }
};
