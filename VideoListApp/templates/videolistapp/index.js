$(document).ready(function () {
    RefreshJSONFile();
});

function RefreshJSONFile(){
    var fullurl = 'http://127.0.0.1:8000/LoadVideoList/';
    $.ajax({
        url: fullurl,
        success: function(data){
            var count = 0;
            for (var i = 0; i < data.length; i++) {
                $('#ulThrasherList').append(
                    '<div id="videocard_'+ data[i].id +'" class="row" style="margin-top: 10px;">' +
                        '<div class="card promoting-card" style="width: 90%; margin-left: 20px;">' +
                            '<div class="card-body" style="margin-left: 4%; margin-top: 15px; padding: 0px;">' +
                                '<div class="col-md-12" style="margin-left: -10px;">' +
                                    '<h4 class="card-title font-weight-bold" style="font-size: 17px;">'+ data[i].title +'</h4>' +
                                '</div>' +
                                '<div class="row" style="margin-left: 4px; margin-top: 5px; padding: 0px;">' +
                                    '<div style="width: 45%">' +
                                        '<a data-toggle="collapse" aria-expanded="false" aria-controls="collapseContent0" href="http://www.thrashermagazine.com'+ data[i].url +'" target="_blank" rel="noopener noreferrer">' +
                                        '<img style="width: 215px; height: 120px;" class="card-img-top rounded-0" src="http://www.thrashermagazine.com'+ data[i].imageurl +'"><span href="http://www.thrashermagazine.com'+ data[i].imageurl +'" alt="Card image cap" target="_blank" rel="noopener noreferrer"></span>' +
                                        '</a>' +
                                    '</div>' +
                                    '<div style="width: 45%">' +
                                        '<p class="card-text" style="font-size: 12px; text-align: justify;">'+ data[i].description +'</p>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="card-body">' +
                                '<div class="collapse-content" style="text-align: center;">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'); 
            }
        },
        error: function (data) {
            alert('it failed!');
        }  
      });
}

