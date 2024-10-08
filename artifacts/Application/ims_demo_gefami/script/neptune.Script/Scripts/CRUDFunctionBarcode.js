function deleteDataBarcode(id) {

    var options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDELETE_Barcode(options);
}

function insertDataBarcode(data){
     
    var options = {
        data: {
            "product_id": data.product_id,
            "number": data.number

        }
    };
    apiINSERT_Barcode(options);
}

function updateDataBarcode(data) {
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id}) 
        },
        data: {
            "product_id": data.product_id,
            "number": data.number
        }
    };

    apiUPDATE_Barcode(options);
}