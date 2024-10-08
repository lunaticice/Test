function createDataProducts(data)
{
    var options = {
        data: {
            "name": data.name,
            "SKU": data.SKU,
            "description": data.description,
            "unit": data.unit,
            "image_path": data.image_path,
        }
    };

    apiInsert_Products(options);
}


function deleteDataProducts(data)
{
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        }
    };

    apiDelete_Products(options);

    var filename = data.image_path;
   // console.log(filename.replace(window.location.origin + "/media/root/", ""));
    deleteImageFromMedia(filename.replace(window.location.origin + "/media/root/", ""))
}


function updateDataProducts(data)
{
    var options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id}), // Optional 
            "take": 1
        }
    };

    var response = apiGET_SpesifikProducts(options);

    // var data = modelModelArray_Products.getData();
    // console.log("MODEL");
    // console.log(data);
    // console.log(data[0].image_path); 

    var filename = path_image;
    
    deleteImageFromMedia(filename.replace(window.location.origin + "/media/root/", ""))

    options = {
        parameters: {
            "where": JSON.stringify({"id" : data.id})
        },
         data: {
            "name": data.name,
            "SKU": data.SKU,
            "description": data.description,
            "unit": data.unit,
            "image_path": data.image_path,
        }
    };


    apiUpdate_Products(options);   
}