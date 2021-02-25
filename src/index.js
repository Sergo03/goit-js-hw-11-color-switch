const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const switchColor = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const numRandom = colors[randomIntegerFromInterval(0, 5)];
            document.body.style.backgroundColor = numRandom;
        }, 1000)
    },
    stop() {
        clearInterval(this.intervalId);
    }
};

startRef.addEventListener('click', switchColor.start.bind(switchColor))
stopRef.addEventListener('click', switchColor.stop.bind(switchColor))

    
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



