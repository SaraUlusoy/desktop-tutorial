$(document).ready(function() {
    // När formuläret skickas (dvs. när användaren klickar på submit-knappen).
    $("#newsletter-form").on("submit", function(e) {
        // Hindra formuläret från att skicka iväg användaren.
        e.preventDefault();

        // Validera Namn-fältet
        var nameField = $("#name-field");
        if (nameField.val() === "") {
            nameField.css("background-color", "red");
        } else {
            nameField.css("background-color", "white");
        }

        // Validera Ålder-fältet
        var ageField = $("#age-field");
        if (ageField.val() === "") {
            ageField.css("background-color", "red");
        } else {
            ageField.css("background-color", "white");
        }

        // Validera E-post-fältet
        var emailField = $("#email-field");
        if (emailField.val() === "") {
            emailField.css("background-color", "red");
        } else {
            emailField.css("background-color", "white");
        }

        // Kontrollera om alla fält är ifyllda
        if (nameField.val() !== "" && ageField.val() !== "" && emailField.val() !== "") {
            // Om allt är korrekt - skicka vidare användaren
            $("#newsletter-form")[0].submit();
        }
    });
});
