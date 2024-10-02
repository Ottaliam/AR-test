const redButton = document.querySelector('#redButton');
const greenButton = document.querySelector('#greenButton');
const blueButton = document.querySelector('#blueButton');
const table = document.querySelector('#table');
const buttonContainer = document.querySelector('.button-container');

const changeModelColor = (color) => {
    table.getObject3D('mesh').traverse((node) => {
        if (node.isMesh) {
            node.material.color.set(color);
        }
    });
};

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
const toggleModelColor = () => {
    colorIndex = (colorIndex + 1) % colors.length;
    changeModelColor(colors[colorIndex]);
}

redButton.addEventListener('click', () => {
    changeModelColor('red');
});
greenButton.addEventListener('click', () => {
    changeModelColor('green');
});
blueButton.addEventListener('click', () => {
    changeModelColor('blue');
});

let longPressTimer;
let longPressTriggered = false;
const longPressThreshold = 500;

const onPressStart = (e) => {
    longPressTriggered = false;
    longPressTimer = setTimeout(() => {
        longPressTriggered = true;
        document.querySelector('.button-container').style.visibility = 'visible';
    }, longPressThreshold);
}

const onPressEnd = (e) => {
    clearTimeout(longPressTimer);
    if (!longPressTriggered) {
        toggleModelColor();
    }
}

const onPressCancel = () => {
    clearTimeout(longPressTimer);
}

table.addEventListener('touchstart', onPressStart);
table.addEventListener('touchend', onPressEnd);
table.addEventListener('touchmove', onPressCancel);
table.addEventListener('touchcancel', onPressCancel);

table.addEventListener('mousedown', onPressStart);
table.addEventListener('mouseup', onPressEnd);
table.addEventListener('mouseleave', onPressCancel);

document.addEventListener('mousedown', (e) => {
    if (!buttonContainer.contains(e.target)) {
        buttonContainer.style.visibility = 'hidden';
    }
})