$(document).ready(function() {
    // Funktion för att lägga till en film i listan
    function addMovie(title, rating) {
        // Skapa ett nytt listelement för filmen
        var movieItem = $("<li>").attr({
            "data-grade": rating,
            "data-title": title
        }).addClass("d-flex justify-content-between align-items-center");

        // Lägg till titeln i listelementet
        movieItem.text(title);

         // Skapa en span för stjärnorna
         var starsContainer = $("<span>").addClass("stars-container");

        // Lägg till stjärnor baserat på betyget
        for (var i = 0; i < rating; i++) {
            var starIcon = $("<img>").attr({
                "src": "star.png",
                "alt": "Star"
            }).addClass("star-icon star-size");
            starsContainer.append(starIcon);
        }

        // Lägg till span för stjärnor i listelementet
        movieItem.append(starsContainer);

        // Lägg till kryss-ikonen för att ta bort filmen
        var deleteIcon = $("<img>").attr({
            "src": "delete.png",
            "alt": "Delete movie"
        }).addClass("delete-movie-icon delete-size");
        movieItem.append(deleteIcon);

        // Lägg till filmen i listan
        $("#movies").append(movieItem);
    }

    // Funktion för att ta bort en film från listan
    function deleteMovie() {
        // Ta bort hela <li> elementet för den film som användaren klickade på
        $(this).parent().remove();
    }

    // Funktion för att sortera listan efter titel i alfabetisk ordning
    function sortByTitle() {
        var moviesList = $("#movies");
        var movies = moviesList.children("li").get();

        movies.sort(function(a, b) {
            var titleA = $(a).data("title").toUpperCase();
            var titleB = $(b).data("title").toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        $.each(movies, function(index, movie) {
            moviesList.append(movie);
        });
    }

    // Funktion för att sortera listan efter betyg
    function sortByRating() {
        var moviesList = $("#movies");
        var moviesItems = moviesList.children("li").get();

        moviesItems.sort(function(a, b) {
            var ratingA = $(a).data("grade");
            var ratingB = $(b).data("grade");
            return ratingB - ratingA;
        });

        $.each(moviesItems, function(index, movie) {
            moviesList.append(movie);
        });
    }

    // Lyssna efter submit-händelsen för formuläret för att lägga till en film
    $("#add-movie-form").on("submit", function(e) {
        // Hindra formuläret från att skicka iväg användaren
        e.preventDefault();

        // Hämta titeln och betyget från formuläret
        var title = $("#title-field").val(); // Här använder vi textfältets värde för titeln
        var rating = $("#rating-field").val();

        // Validera att både titeln och betyget har angetts
        if (title !== "" && rating !== "0") {
            // Lägg till filmen i listan
            addMovie(title, rating);

            // Återställ formuläret
            $(this).trigger("reset");
        } else {
            // Visa en popup-ruta med meddelande om att användaren måste ange både titel och betyg
            alert("Ange både titel och betyg för att lägga till en film.");
        }
    });

    // Lyssna efter klick-händelsen för kryss-ikonen för att ta bort en film
    $(document).on("click", ".delete-movie-icon", deleteMovie);

    // Lyssna efter klick-händelsen för att lägga till en film med indata från användaren
    $("#add-movie-button").on("click", function() {
        // Hämta titeln och betyget från textrutan och dropdown-menyn
        var title = $("#title-input").val();
        var rating = $("#rating-select").val();
        
        // Lägg till filmen i listan
        addMovie(title, rating);
    });

    // Lyssna efter klick-händelsen för att sortera listan efter titel i alfabetisk ordning
    $("#sort-title").on("click", sortByTitle);

    // Lyssna efter klick-händelsen för att sortera listan efter betyg
    $("#sort-rating").on("click", sortByRating);
});
