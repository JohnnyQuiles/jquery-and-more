// Jquery putting a div into the body && when clicked send alert() browser display with Hello World
const div = $('<div>Hello World</div>');
const body = $('body');
body.append(div);

// Jquery equivalent to .addEventListener 
div.on('click', () => alert('Hello World')); 

const data = {
    labels: [
    'Super Mario Bros',
    'Sega',
    'Mario Kart 8',
    'Grand Theft Auto', 
    'Angry Birds',
    'Super Mario Run', 
    'Call of Duty', 
    'Super Smash Bros', 
    'Spider-Man',
    'Candy Crush Saga'
],
datasets: [{
    label:'My First Dataset',
    data: [65, 48, 45, 42, 42, 42, 42, 41, 40, 40], 
    backgroundColor: [
    'crimson',
    'blue',
    'purple',
    'green',
    'orange',
    'black',
    'yellow',
    'pink',
    'brown',
    'grey'
    ],
    hoverOffset: 4
}]
}
// Chart 
const config = {
    type: 'doughnut',
    data: data,
    
};
// === include 'setup' then 'config' above ===
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
