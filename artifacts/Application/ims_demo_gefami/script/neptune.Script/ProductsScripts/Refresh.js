function refreshDataProducts() {

    // MENGAMBIL DATA PRODUCTS
    var options = {
        parameters: {offset : offsetVal, limit : limitVal, orderBy : orderByVal}
    };


    apiGET_Products(options);
    apiJumlahData();

    // MENGAMBIL JUMLAH PRODUCTS PAGE
   /* var options = {
        "perPage": perPage
    };*/

    //apiJumlahData();
}