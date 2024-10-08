function insertDataWarehouse(data) {
    var options = {
        data: {
            "name": data.name,
            "description": data.description,
            "address": data.address,
            "longitude": data.longitude,
            "latitude": data.latitude,
        }
    };

    apiCreateWarehouse(options);
}

function updateDataWarehouse(data) {
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
        data: {
            "name": data.name,
            "description": data.description,
            "address": data.address,
            "longitude": data.longitude,
            "latitude": data.latitude,
        }
    };

    apiUpdateWarehouse(options);
}

function deleteDataWarehouse(id) {

    var options = {
        parameters: {
            "where": JSON.stringify({"id" : id})
        }
    };

    apiDeleteWarehouse(options);
}