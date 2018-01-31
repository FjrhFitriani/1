module.exports = {

    attributes: {

        name : {
            type : 'string',
            // required : true
        },

        posisi : {
            model : 'posisi',
            // required : true
        },
        pegawai : {
            model : 'pegawai',
            // required : true
        }
    }
};