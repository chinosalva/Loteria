let turno = "";
let cartas = [
    "EL SOLDADO",
    "El DIABLITO",
    "LA DAMA",
    "EL PARAGUAS",
    "LA ESCALERA",
    "LA BOTELLA",
    "EL BARRIL",
    "EL ARBOL",
    "EL MELON",
    "EL VALIENTE",
    "EL GORRITO",
    "LA MUERTE",
    "LA PERA",
    "LA BANDERA",
    "EL BANDOLON",
    "EL VIOLONCELLO",
    "LA GARZA",
    "EL PAJARO",
    "LA MANO",
    "LA BOTA",
    "LA LUNA",
    "EL COTTORO",
    "EL BORRACHO",
    "EL NEGRITO",
    "EL CORAZON",
    "LA SANDIA",
    "EL TAMBOR",
    "EL CAMARON",
    "LAS JARAS",
    "EL MUSICO",
    "LA ARAÑA",
    "LA ESTRELLA",
    "EL CAZO",
    "EL MUNDO",
    "EL APACHE",
    "EL NOPAL",
    "EL ALACRAN",
    "LA ROSA",
    "LA CALAVERA",
    "LA CAMPANA",
    "EL CANTARITO",
    "EL VENADO",
    "EL SOL",
    "LA CORONA",
    "LA CHALUPA",
    "EL PINO",
    "EL PESCADO",
    "LA PALMA",
    "LA MACETA",
    "EL ARPA",
    "EL CATRIN",
    "LA RANA"
];
let j = 0
let contador = 0
function jugarLoteria() {
turno = cartas[j];
let intento = document.getElementById("turno");
intento.textContent = `${turno}`;
j++
}
// let primerBoton = document.getElementById("primerBoton")
function repetirJugarLoteria() {
let primerBoton = document.getElementById("primerBoton");
primerBoton = setInterval(jugarLoteria, 5000);
}
primerBoton.addEventListener("click", repetirJugarLoteria);

let cartasTablero = document.getElementsByClassName("card");
for (let i = 0; i < cartasTablero.length; i++) {
cartasTablero[i].addEventListener("click", () => aparecerX(`cartaJuego${i + 1}`), {
    once: true,
});
}

function aparecerX(carta) {
let x = document.createElement("img");
x.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAG1BMVEX/AAD/////3d3/2tr/RET/SUn/S0v/Vlb/t7eInzqHAAAHeUlEQVR4nO2dWWKjMBBERQA79z/xBBSZTUvvWjL1nWCeVSXb0N24CaX3jPt7Bc1v3N871F8vztVGnJ1bUP+AIlydq404b6ewYv4DQ/hyu76QJyWpL38KL8S/IAhX52ojfoVTQKwinHBxH9Uy6nycAjyLYMITYC3E+XwKYEQo4epcbcT5egpQowIJX+4m+yx+3U8BuN3ACNf70e0RH4DQVQQRLs+jWxt1jp0CKIsQwiigLWIUEIYIIIxY1BoxAQgyapnwsckcsspiJINB5e2mSJhcQTvEDCBgFUuEiQwGWRg1aVGvUhYLhAVAC8QCYBExT5i1qA1iEbBk1CxhZpM5pJvFbAaDsttNjhCwgtqIIMD8KmYIixkM0jMqwKJemSymCcGAeohgwBxikhBoUU1EBGDGqClC0CZzSCOLwAwGpbabBCFqBXUQkYDJVYwTIjIYJG1UlEW94lmMEhIApREJgAnEGCHaovKIJMC4USOEyE3mkFwW0RkMimw3T0LiCkoikgFjq/ggJGUwSMaoRIt6PbJ4J2QByiCyAJ+IN0KGRaUQmYAPo14JyZvMIW4WGRkMum43F0L2Cm7iIQoA3lbxTMjMYBDHqGyLep2zeCIUAuQgCgFeEA9CEYt6URHFAM9G/RAKbDKHaFkUyWDQZ7sJhIIruImCKAp4rOIvoVgGg/BGFbSo13ImFAfEI4oDBsSdUNiiXjhEBcBfo26EopvMIUwWhTMY9PKEKiu4CY6oBLivotPIYBDUqCoW9Vom99Y7OhRREdD98KkeHoSofAZO+QXKWVTL4K5522nqImoD7p8W6i9SzaLb2+tM3seKgL/f2mptNxav68zeyxoZPBFWQbQJh7N9OeMMXgjNEa1c46xe8o5o9mrO7EWvWbRzzOWKsB2iYSSuV/WtXtjSLbc7MzaIph9N97trFhuA7Zb2uEOq//4afyw973JrI1p/7kYqFXRP4Vv16JGvh7FqE11ETcW+/0YrhnSNqqfoz7R41VefiPHfoYnKvR4REz+0U9WX/WUx9TM7WUHbG2Lyml66Crovo6avBWUq2XtCzFzPy3Uj9IOYu2CZ7SjpJYvZ6+r5rqA+EPM3DgqdXT0YtXB/q9Sd1z5i6QZescOydcTiHcpyl2zbWSzfnwR0OreMCCiGgHSrt2tUyE100MSBVhFBhRCwqRFtIsIqPYCTP1rMIrAgCTq9pT1EaMUVeAJPa0YFFwbCpyi1hQivfERMwmoJEVHaiZlm1k4WMYWdqIl0rSCiqshxUwXbMCqu+hhH2AQisoIcSdgAIrZEHktYPYvoTg40YWVEfKsKnrCqUQkdVQTCioiUljEKYTVEUk8cibBSFmkdcTTCKojE9lsiYQWjUts2qYTmiOTWWzKhMSK9t5hOaJpFRgs8g9AQkdPjzyE0MyprFAWL0AiRN2uDR2iCyBwmwiQ0yCJ3lAiXUB2RPbeITTjpllN+s8/v/xrWBqyew+H30uE/D4f/TjP899Lhf1sM//tw+N/4w1+nGf5a2/DXS4e/5j38fYvh7z0Nf/9w+HvAw9/Hrw+oXIvRAqBqPU3tDAap1US1AqhW19aGRb1UahNbAlSpL20LUKFGuJ0MBgnXebcHKFyr35pFvQT7LdoEFOyZaRVQrO+pxQwGifSutQwo0n/YrkW92D2krQOy+4DbB2T2credwSBGP34fgIyZCj1Y1Is4F6MfQOJsk54ASfNpeslgEHrGUG+A6DlRfVnUCzXrq0dA1Ly2PgERM/f6y2AQcG7i8LMvh59fOvwM2uHnCA8/C3r4ed7Dz2Qffq7+8M9GGP75FsM/o2T458wM/6yg4Z/3NPwzu4Z/7trwz84b/vmH4z/DcvznkI7/LNk/8DzgP/BM5z/wXO4/8Gx1BUR864c4ogf8/HoSNiqlCUs4i+t0JZTdbmhdZqKIr3DU4yqG4CpSmyEFjbp+Dnq6EiWWRXrPrhjichzzfDVRCJHTPS+EeAK8XhEWMSpvjoVIFtfzEa9X9QW2G+6gDgHE1+WAtzsz7FVkjumYBIy6Xo93v7vGzCIfkI243A73uEPKQpQAZCLeASN3uRlGZc8D+hUji+vjYJFKBfJ2IwXIQHw9jxWrNiGuooxFvYhGfa5gomKIlEVJQCLiI4NJQgqiLCAJMQqYqtxDG1Uug0HoLMYsmibEbjfygGjEyCaTJcStorRFvVBGTaxgrgoakUUdQBRiPIObMpXsYEQtQARiGjDbjQA0qkYGg4BZTFp0KnSUgLYbTUAgYmqT2ZXvCgKsop5FvQBGza1gsbOrmEVtQABiJoObSt15BUR9wCJiAbDcYZk1qm4Gg7JZzFt0gnTJZrYbG8AsYnaT2QXodE6uooVFvZJGLa4grFs9kUU7wCRiKYObQBMHooiWgAlECCBwakTEqFYZDIpkEWDRCTz547HdWANGEMubzC7o9JbbKtpa1OtmVNgKIibwLLUBb4igDG6CT1FaagNeEMGAmElYH6PaZzDok0WoRSfcNLNXbcAPInCT2YWaSLfWtKjXjFxB7FTBpTbgjgjP4CbkZMh3bcAfo75xf/8PqdBb6OrAxCMAAAAASUVORK5CYII=";
x.className = "seleccion";
let selectorCarta = document.getElementById(carta);
if (turno === selectorCarta.getAttribute("value")) {
    selectorCarta.appendChild(x);
    contador = contador + 1
    console.log(contador)
    if(contador == 16){
        alert("HAS GANADO")
    }
}
}
