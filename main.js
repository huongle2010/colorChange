// change background color

function changeColor () {
    let color = document.getElementById('colorInput').value;
    console.log(color);
    document.body.style.backgroundColor = color;
}

const button = document.getElementById ('colorButton');
button.addEventListener('click',changeColor);


