let data = modelContainer50.getData();

let offsetValue = data.currentPage * perPage;

// MENGUPDATE DATA USER MANAGEMENT
var options = {
    data: {offset : offsetValue, limit : limitVal, orderBy : orderByVal}
};

apiRestAPIGetDataUserManagement(options);

//increment current page
data.currentPage++;

//update data pada model container9
modelContainer50.setData(data);
