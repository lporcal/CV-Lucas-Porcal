//Programa para abrir las solapas segun cada item

const b1 = 'Boton 1'
const b2 = 'Boton 2'
const b3 = 'Boton 3'
const b4 = 'Boton 4'
const b5 = 'Boton 5'
const b6 = 'Boton 6'
let botones = [b1, b2, b3, b4, b5, b6]

const i1 = 'Educación'
const i2 = 'Experiencia Laboral'
const i3 = 'Capacitaciones y Cursos'
const i4 = 'Habilidades'
const i5 = 'Intereses'
const i6 = 'Referencias'
let items = [i1, i2, i3, i4, i5, i6]

// Recorre cada item y le indica que inicialmente debe estar la solapa cerrada
items.forEach(function (item) {
    document.getElementById(item).style.display = 'none';
})

//Recorre cada boton y le aplica la funcion informacionboton cuando se le hace click
botones.forEach(function (boton) {
    document.getElementById(boton).addEventListener('click', function () {
        informacionboton(boton);
    });
})

// Esta funcion toma un determinado boton, busca el item asociado y ejecuta la funcion para abrir
// o cerrar la solapa

function informacionboton(boton) {
    if (document.getElementById(items[botones.indexOf(boton)]).style.display === "none") {
        abririnfo(boton);
    } else {
        cerrarinfo(boton);
    }
}

function cerrarinfo(boton) {
    document.getElementById(items[botones.indexOf(boton)]).style.display = 'none';
}

function abririnfo(boton) {
    document.getElementById(items[botones.indexOf(boton)]).style.display = 'block';
}

//Funcion para apertura de ventanas auxiliares para desplegar la informacion dentro de la solapa

function ventanaAuxiliar(ubicacion) {
    window.open(ubicacion,"Detalle de información", "width= 1000, height= 1500, scrollbars= NO")
}