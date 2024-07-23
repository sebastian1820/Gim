const mongoose = require('mongoose');
// el model creado aqui debe ser igual al base de datos


const diaSchema = mongoose.Schema ({

    dia:{
        type:String,
        required: true
    },
    hora:{
        type:String,
        required: true
    },
    servicio:{
        type:String,
        required: true
    },
    asistencia:{
        type:Number,
        required: true
    },
    predicion:{
        type:Number,
        required: true
    },
},{versionKey:false})

module.exports= mongoose.model('Dia',diaSchema);