const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    intervalId: null,
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
    const _setColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = _setColor;
};

refs.btnStart.addEventListener('click', () => refs.intervalId = setInterval(() => setRandomColor(), 1000));
  
refs.btnStop.addEventListener('click', e => clearInterval(refs.intervalId));