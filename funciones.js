function suma(){

    let a = document.fila1.a.value;
    let b = document.fila1.b.value;
    let c = document.fila1.c.value;

    let r = parseFloat(a) + parseFloat(b);
    document.fila1.c.value = r;
}

function resta(){

    let a = document.fila1.a.value;
    let b = document.fila1.b.value;
    let c = document.fila1.c.value;

    let r = parseFloat(a) - parseFloat(b);
    document.fila1.c.value = r;

}

function multiplicacion(){

    let a = document.fila1.a.value;
    let b = document.fila1.b.value;
    let c = document.fila1.c.value;

    let r = parseFloat(a) * parseFloat(b);
    document.fila1.c.value = r;

}

function divicion(){

    let a = document.fila1.a.value;
    let b = document.fila1.b.value;
    let c = document.fila1.c.value;

    let r = parseFloat(a) / parseFloat(b);
    document.fila1.c.value = r;

}

