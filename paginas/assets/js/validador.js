// objeto.metodo(json)

$("#formulario-contacto").validate({
    rules: {
        "txtNombre":{
        required:true,
        minlength: 10
    },
        "txtEmail": {
        required: true,
        email: true,
        minlength:10
    },
        "txtTema": {
        required: true,
        minlength:10
    },
        "txtMensaje":{
        required:true,
        minlength:50
        },
    }, // --> Fin de reglas
    messages: {
        "txtNombre":{
            required:'Introdusca su nombre',
            minlength: 'Ingrese 10 caracteres como minimo'
        },
        "txtEmail": {
            required: 'Ingrese su email',
            email: 'No cumple formato',
            minlength:'la wea'
        },
        "txtTema": {
            required: 'Ingrese un tema',
            minlength:'Ingrese 10 caracteres como minimo'
        },
        "txtMensaje":{
            required: 'Ingrese un mensaje',
            minlength:'Ingrese 50 caracteres como minimo'
        }
    } //-->Fin de mensajes

});

