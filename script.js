const redButton = document.querySelector('#redButton');
const greenButton = document.querySelector('#greenButton');
const blueButton = document.querySelector('#blueButton');
const grayButton = document.querySelector('#grayButton');
const table = document.querySelector('#table');
const buttonContainer = document.querySelector('.button-container');

const changeModelColor = (color) => {
    table.getObject3D('mesh').traverse((node) => {
        if (node.isMesh) {
            node.material.color.set(color);
        }
    });
};

redButton.addEventListener('click', () => {
    changeModelColor('red');
});
greenButton.addEventListener('click', () => {
    changeModelColor('green');
});
blueButton.addEventListener('click', () => {
    changeModelColor('blue');
});

grayButton.addEventListener('click', () => {
    buttonContainer.toggleAttribute('hidden');
});