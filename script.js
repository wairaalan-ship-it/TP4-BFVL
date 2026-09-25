document.addEventListener("DOMContentLoaded", () => {
    const btnHumedo = document.getElementById("btn-humedo");
    const btnSeco = document.getElementById("btn-seco");
    const plantEmoji = document.getElementById("plant-emoji");
    const statusText = document.getElementById("status-text");
    const led = document.getElementById("led");

    btnHumedo.addEventListener("click", () => {
        // Cambiar estados de botones
        btnHumedo.classList.add("active");
        btnSeco.classList.remove("active");

        // Cambiar simulación visual (Normal)
        plantEmoji.innerText = "🌿";
        plantEmoji.classList.remove("withered");
        statusText.innerText = "Planta Saludable (Señales eléctricas estables)";
        statusText.style.color = "#2e7d32";

        // Apagar LED de alerta
        led.className = "led-off";
    });

    btnSeco.addEventListener("click", () => {
        // Cambiar estados de botones
        btnSeco.classList.add("active");
        btnHumedo.classList.remove("active");

        // Cambiar simulación visual (Estrés)
        plantEmoji.innerText = "🥀";
        plantEmoji.classList.add("withered");
        statusText.innerText = "¡Estrés Hídrico Detectado! (Falta de agua)";
        statusText.style.color = "#d32f2f";

        // Encender LED de alerta
        led.className = "led-on";
    });

 const toggle = document.getElementById("menu-toggle");
 const nav = document.getElementById("nav-links");

 toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const contador = document.createElement("p");
document.body.appendChild(contador);

const fecha = new Date("2026-12-01");

function actualizar(){
    const hoy = new Date();
    const dias = Math.floor((fecha - hoy)/(1000*60*60*24));
    contador.innerText = "Faltan " + dias + " días para la muestra";
}

actualizar();
function calcularRiego(){
    const plantas = document.getElementById("plantas").value;
    const clima = document.getElementById("clima").value;

    if(!plantas){
        alert("Ingresá cantidad de plantas");
        return;
    }

    let agua = plantas * 0.5 * clima;

    document.getElementById("resultado").innerText =
        "💧 Necesitás aproximadamente " + agua.toFixed(2) + " litros de agua por día";
}