//
let data = modelContainer45.getData();

//
data.startPage = data.startPage - 1;

//
let paginationData = modelModelObjectRentHistoryPagination.getData();

var options = {
    "page": data.startPage,
    "perPage": paginationData.perPage
};

//
apiRestAPIRentHistoryPagination(options);

modelContainer45.setData(data);