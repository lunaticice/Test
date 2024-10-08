function filterROpending(){
    var options = {
    data: {
        "status": "Pending"
    }
};

apiCountRequestOrderFilterPending(options);

var options = {
    data: {
        "status": "Shipping"
    }
};

apiCountRequestOrderFilterShipping(options);

var options = {
    data: {
        "status": "In Progress"
    }
};

apiCountRequestOrderFilterInProgress(options);

var options = {
    data: {
        "status": "Complete"
    }
};

apiCountRequestOrderFilterCompleted(options);
}

function limitRequestOrder(){
    var options = {
    data: {
        "offsetValue": "0",
        "limitValue": "5"
    }
};

apiGetRequestOrdersCustomersProductsForDashboard(options);
}