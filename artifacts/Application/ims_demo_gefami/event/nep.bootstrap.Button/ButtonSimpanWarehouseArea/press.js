if (InputWarehouseAreaName.getValue() === "" || InputWarehouseAreaDescription.getValue() === "" ||
    InputWarehouseAreaName.getValue() === undefined || InputWarehouseAreaDescription.getValue() === undefined) {
    sap.m.MessageToast.show("Harap lengkapi isian data");
} else {

    var data = {
        warehouse_id : IdInvisibleWarehouseDetail.getText(),
        name : InputWarehouseAreaName.getValue(), 
        description : InputWarehouseAreaDescription.getValue()
    }

    insertDataWarehouseArea(data);

     var options = {
        parameters: {
            "where": JSON.stringify({"warehouse_id" : IdInvisibleWarehouseDetail.getText()})
        }
    };

    apiGetWarehouseAreas(options);

    sap.m.MessageToast.show("Data Warehouse Area berhasil ditambahkan");

    ModalWarehouseArea.hide();
}