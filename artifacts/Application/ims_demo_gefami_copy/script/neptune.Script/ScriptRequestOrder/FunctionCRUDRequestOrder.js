function insertDataRequestOrder(data) {

    var options = {
        data: {
            "requested_by": data.requested_by,
            "requested_date": data.requested_date,
            "product_id": data.product_id,
            "quantity": data.quantity,
            "status": data.status
        }
    };

    apiCreateRequestOrder(options);    
        
}

function updateDataRequestOrder(data) {
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
        data: {
           "requested_by": data.requested_by,
            "requested_date": data.requested_date,
            "product_id": data.product_id,
            "quantity": data.quantity,
            "status": data.status
        }
    };

    apiUpdateRequestOrder(options);
}

function deleteDataRequestOrder(id) {

    var options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDeleteRequestOrder(options);
}