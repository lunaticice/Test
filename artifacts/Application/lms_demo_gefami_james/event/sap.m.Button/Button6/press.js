let data = modelContainer45.getData();

data.startPage = parseInt(this.getText());

modelContainer45.setData(data);

let paginationData = modelModelObjectRentHistoryPagination.getData();

var options = {
    "page": this.getText(),
    "perPage": paginationData.perPage
};

apiRestAPIRentHistoryPagination(options);