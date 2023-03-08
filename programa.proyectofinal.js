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

const t1 = 'T1'
const t2 = 'T2'
const t3 = 'T3'
const t4 = 'T4'
const t5 = 'T5'
let trabajos = [t1, t2, t3, t4, t5]

const div1 = 'div 1'
const div2 = 'div 2'
const div3 = 'div 3'
const div4 = 'div 4'
const div5 = 'div 5'
let divs = [div1, div2, div3, div4, div5]

const bc1 = 'C1'
const bc2 = 'C2'
const bc3 = 'C3'
const bc4 = 'C4'
const bc5 = 'C5'
const bc6 = 'C6'
const bc7 = 'C7'
let botoncap = [bc1, bc2, bc3, bc4, bc5, bc6, bc7]

const c1 = 'Cap 1'
const c2 = 'Cap 2'
const c3 = 'Cap 3'
const c4 = 'Cap 4'
const c5 = 'Cap 5'
const c6 = 'Cap 6'
const c7 = 'Cap 7'
let capacitaciones = [c1, c2, c3, c4, c5, c6, c7]

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
    window.open(ubicacion, "Detalle de información", "width= 1500, height= 2000, scrollbars= NO")
}

//Recorre cada boton de los trabajos y cuando se le hace click, oculta todos los div
//Deja visible el div asociado al trabajo que quiero mostrar

trabajos.forEach(function (trabajo) {
    document.getElementById(trabajo).addEventListener('click', function () { 
            ocultartodoslosdivs();
            mostrardiv(trabajo);
    });
 })

//Funcion ocultar todos los divs
function ocultartodoslosdivs(){
    divs.forEach(function (divn) {    
        document.getElementById(divn).classList.remove ("visible");
        document.getElementById(divn).classList.add ("oculto");
    });
}

//Funcion mostrar todos los divs
//function mostrartodoslosdivs(){
  //  divs.forEach(function (divn) {    
    //    document.getElementById(divn).classList.remove ("oculto");
      //  document.getElementById(divn).classList.add ("visible");
  //  });
//}

//Funcion mostrar div asociado al trabajo seleccionado
function mostrardiv(trabajo){
        document.getElementById(divs[trabajos.indexOf(trabajo)]).classList.remove ("oculto")
        document.getElementById(divs[trabajos.indexOf(trabajo)]).classList.add ("visible");
}


//Recorre cada botoncap y cuando se le hace click, oculta todos los divs capacitaciones
//Deja visible el div capacitacion asociada a la capacitacion que quiero mostrar

botoncap.forEach(function(bcn) {
    document.getElementById(bcn).addEventListener('click', function () {
            ocultartodaslascapacitaciones();
            mostrarcapacitacion(bcn);
    });
})

function ocultartodaslascapacitaciones(){
        capacitaciones.forEach(function(capacitacion) {
            document.getElementById(capacitacion).classList.remove ("visible");
            document.getElementById(capacitacion).classList.add ("oculto");
        });
    }

function mostrartodaslascapacitaciones(){
        capacitaciones.forEach(function(capacitacion) {
            document.getElementById(capacitacion).classList.remove ("oculto");
            document.getElementById(capacitacion).classList.add ("visible");
        });
    }
    
function mostrarcapacitacion(bcn){
            document.getElementById(capacitaciones[botoncap.indexOf(bcn)]).classList.remove ("oculto");
            document.getElementById(capacitaciones[botoncap.indexOf(bcn)]).classList.add ("visible");
    }
