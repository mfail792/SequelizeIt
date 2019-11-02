//referencing the api long route here
$.get("/api/books/long", function (data) {
    for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        wellSection.addClass("well");
        wellSection.attr("id", "book-well-" + i);
        $("#well-section").append(wellSection);

        //printing out the data
        $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "<h2>");
        $("#book-well-" + i).append("<h3>Author: " + data[i].author + "<h3>");
        $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "<h3>");
        $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "<h3>");
    }
});

//not currently displaying long or short books...need to fix