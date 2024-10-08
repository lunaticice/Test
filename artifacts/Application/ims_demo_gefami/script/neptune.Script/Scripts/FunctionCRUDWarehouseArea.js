function insertDataWarehouseArea(data) {
    var options = {
        data: {
            "warehouse_id" : data.warehouse_id,
            "name": data.name,
            "description": data.description,
        }
    };

    apiCreateWarehouseArea(options);
}

function updateDataWarehouseArea(data) {
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id}) 
        },
        data: {
            "warehouse_id": data.warehouse_id,
            "name": data.warehouse_name,
            "description": data.description
        }
    };

    apiUpdateWarehouseArea(options);
}

function deleteDataWarehouseArea(id) {

    var options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDeleteWarehouseArea(options);
}