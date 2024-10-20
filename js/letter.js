// window.addEventListener('scroll', function() {
//     const scrollPosition = window.pageYOffset;
//     document.querySelector('.contador').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
// });

const swiper = new Swiper('.swiper', {
    loop: true, // Habilitar bucle
    autoplay: {
        delay: 3000, // Intervalo de tiempo en milisegundos (3 segundos)
        disableOnInteraction: false, // Permitir interacción mientras se reproduce
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permitir que se haga clic en los paginadores
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3, // Número de diapositivas a mostrar por vista
    spaceBetween: 10, // Espacio entre las diapositivas
});

const buttons = document.querySelectorAll('.send-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const form = document.getElementById('confirmacionForm');

        if (!form.checkValidity()) {
            form.reportValidity();
            return; // Detener el envío si el formulario no es válido
        }

        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const mensaje = document.getElementById('mensaje').value;

        const texto = `Hola! Mi nombre es ${nombre} ${apellidos}, Confirmo mi asistencia: ${mensaje}`;
        const numero = this.getAttribute('data-number');
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');

        form.reset(); // Limpiar el formulario
    });
});
/*///////////////////////////////////////////////////*/
const cuentaRegresiva = new Date("December 14, 2024 00:00:00").getTime();

const actualizarContador = () => {
    const ahora = new Date().getTime();
    const tiempoRestante = cuentaRegresiva - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("dias-numero").innerText = String(dias).padStart(2, '0');
    document.getElementById("horas-numero").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutos-numero").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos-numero").innerText = String(segundos).padStart(2, '0');

    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        document.querySelector('.contador').innerHTML = "¡La cuenta regresiva ha terminado!";
    }
};

const intervalo = setInterval(actualizarContador, 1000);
