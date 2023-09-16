const planet1 = document.getElementById('planet1');
const planet2 = document.getElementById('planet2');

let a1 = 0;
let a2 = 0;
const radius1 = 100;
const radius2 = 150;

function animatePlanets() {
    angle1 += 0.01;
    angle2 += 0.02;
    
    planet1.style.transform = `translate(-50%, -50%) rotate(${a1}rad) translate(${radius1}px)`;
    planet2.style.transform = `translate(-50%, -50%) rotate(${a1}rad) translate(${radius2}px)`;

    requestAnimationFrame(animatePlanets);
}

animatePlanets();