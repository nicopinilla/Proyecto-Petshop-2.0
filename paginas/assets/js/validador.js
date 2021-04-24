// objeto.metodo(json)

$("#formulario-contacto").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true,
            minlength:10
        },
        "txtNombre":{
            required:true,
            minlength: 10
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email',
            email: 'No cumple formato',
            minlength:'la wea'
        },
        "txtNombre":{
            required:'Introdusca un mensaje porfavor',
            minlength: 'Ingrese 15 caracteres como minimo'
        }
    } //-->Fin de mensajes

});

