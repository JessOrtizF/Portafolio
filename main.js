/**
 * It's a function that when called, will redirect the user to the phone dialer with the number
 * 55 1011 4989 already entered.
 */
const llamar = () => {
    window.location.href='tel:55 1011 4989'
}

/**
 * "When the user clicks the button with the id of "cerrar", the function will hide the element with
 * the id of "teléfono".
 */
const cerrarDialogo = () => {
    document.getElementById("teléfono").style.display = "none";
}

/**
 * It takes the user to the email app on their device.
 */
const correo = () => {
    window.location.href='mailto:jessie_anahi.of@hotmail.com'
}