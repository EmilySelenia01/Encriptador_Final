//PRIMER DIV 

function encriptar() {
    const inputTextarea = document.querySelector('.Text1');
    const outputTextarea = document.querySelector('.right textarea');

    if (inputTextarea && outputTextarea) {
        let texto = inputTextarea.value;
        let textoEncriptado = '';
        for (let i = 0; i < texto.length; i++) {
            let charCode = texto.charCodeAt(i);
            textoEncriptado += String.fromCharCode(charCode + 3);
        }
        outputTextarea.value = textoEncriptado;
    } else {
        alert("No se encontraron los textareas necesarios para encriptar");
    }
}

function desencriptar() {
    const inputTextarea = document.querySelector('.Text1');
    const outputTextarea = document.querySelector('.right textarea');

    if (inputTextarea && outputTextarea) {
        let textoEncriptado = inputTextarea.value;
        let textoDesencriptado = '';
        for (let i = 0; i < textoEncriptado.length; i++) {
            let charCode = textoEncriptado.charCodeAt(i);
            textoDesencriptado += String.fromCharCode(charCode - 3);
        }
        outputTextarea.value = textoDesencriptado;
    } else {
        alert("No se encontraron los textareas necesarios para desencriptar");
    }
}

//SEGUNDO DIV 

function copiar() {
    //direccion
    const textarea = document.querySelector('.right textarea');

    if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999); 

        try {
            document.execCommand('copy');
            alert("Texto copiado correctamente");
        } catch (err) {
            console.error("Error al copiar el texto: ", err);
        }
    } else {
        alert("No se encontró el textarea para copiar");
    }
}



function limpiar() {
    // Selecciona el textarea que deseas limpiar
    const textarea1 = document.querySelector('.Text1');  // Primer textarea
    const textarea2 = document.querySelector('.right textarea');  // Segundo textarea

    // Limpia el contenido de ambos textareas
    textarea1.value = '';
    textarea2.value = '';

    // Opcional: si tienes un mensaje que quieres ocultar o cambiar después de limpiar
    const mensaje = document.getElementById('message');
    mensaje.textContent = 'No se encontró un mensaje';
}


function Bienvenida() {
    const mensaje = document.getElementById('welcome-message');
    if (mensaje) {
        mensaje.textContent = 'Bienvenido al sistema de encriptación de texto';
    }
}

window.onload = function() {
    Bienvenida();
};