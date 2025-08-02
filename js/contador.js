function iniciarContador() {
  const fechaEvento = new Date("August 6, 2025 09:00:00 GMT-0500").getTime();

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      document.getElementById("dias").innerText = "00";
      document.getElementById("horas").innerText = "00";
      document.getElementById("minutos").innerText = "00";
      document.getElementById("segundos").innerText = "00";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = String(dias).padStart(2, '0');
    document.getElementById("horas").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
  }

  actualizarCuentaRegresiva();
  setInterval(actualizarCuentaRegresiva, 1000);
}
