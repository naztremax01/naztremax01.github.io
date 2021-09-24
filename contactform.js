function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Message").val();

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUemQ85WGKr8OaYsQHtw7PRQzJCamCtahhFKgYzxI5xBXKMg/formResponse",
        
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
            "entry.2005620554": field1,
            "entry.1045781291": field2,
            "entry.1065046570": field3
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
            $('#contact').trigger('reset');
        },
        error: function (x, y, z) {
            $('#contact').trigger('reset');
        }
    });
    return false;
}