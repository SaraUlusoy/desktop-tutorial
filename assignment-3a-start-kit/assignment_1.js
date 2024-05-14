$(document).ready(function() {
    // Funktion för att uppdatera resultatet när talen ändras
    function updateResult() {
        // Hämta värdena från input-fälten
        var num1 = parseInt($("#number-1").val());
        var num2 = parseInt($("#number-2").val());

        // Kontrollera om båda fälten är ifyllda
        if ($("#number-1").val() !== "" && $("#number-2").val() !== "") {
            // Om både talen är giltiga, beräkna produkten och visa resultatet
            if (!isNaN(num1) && !isNaN(num2)) {
                var result = num1 * num2;
                $("#result-box").val(result);
            }
        } else {
            // Om något av fälten är tomt, rensa resultatet
            $("#result-box").val("");
        }
    }

    // Lyssna efter förändringar i input-fälten och uppdatera resultatet
    $("#number-1, #number-2").on("input", updateResult);
});
