let yourTurn = true;

$("body").on("click", ".player", function() {

    let move = $(this).text();

    if(move == ""){
        alert("Not a valid selection");
    } else if (!yourTurn){
        // alert("Not your turn")
    } else {
        console.log("clicked")
        playerStuff($(this));
    }

})

$("body").on("click", ".comp", function() {
    
    let move = $(this).text();

    if(move == ""){
        alert("Not a valid selection");
    } else if (yourTurn){
        // alert("Not your turn")
    } else {
        compStuff($(this));
    }

})

// this is the the player selection logic
function playerStuff(str) {

    let ar = str.attr("id").split("");
    str.css("background", "lightcoral");
    let avail = checkAvailability(ar);
    let real = checkText(avail);
    console.log(real);
    colorReal(real, str.attr("id"));
}

// this is the the computer selection logic
function compStuff(str) {

    let ar = str.attr("id").split("");
    str.css("background", "lightcoral");
    let avail = checkAvailability(ar);
    let real = checkText(avail);
    console.log(real);
    colorReal(real, str.attr("id"));
}

// this finds what options are available
function checkAvailability(id) {
    let firstNumber = +id[0];
    let secondNumber = +id[2];

    let which = $(`#${id[0]}-${id[2]}`).hasClass("player")

    let action = (which) ? firstNumber + 1 : firstNumber - 1

    if (firstNumber % 2 == 1){
        if (secondNumber == 1){
            let tempAr = [`${action}-1`]
            return tempAr;
        } else {
            let tempAr = [`${action}-${secondNumber - 1}`, `${action}-${secondNumber}`]
            return tempAr;
        }
    } else {
        if (secondNumber == 4){
            let tempAr = [`${action}-4`]
            return tempAr;
        } else {
            let tempAr = [`${action}-${secondNumber}`, `${action}-${secondNumber + 1}`]
            return tempAr;
        }
    }

}

// filtering out unavailable options
function checkText(ar){
    if (ar.length == 1){
        if ($(`#${ar[0]}`).text()){
            return [];
        } else {
            return ar;
        }
    } else {
        if ($(`#${ar[1]}`).text()){
            ar.splice(1, 1);
        }
        
        if (ar.length == 1){
            if ($(`#${ar[0]}`).text()){
                return [];
            } else {
                return ar;
            }
        } else {
            if ($(`#${ar[0]}`).text()){
                ar.splice(0, 1);
            }
            return ar
        }
    }
}

// coloring where user can move to
function colorReal(ar, id){

    $(".other").css("background", "rgba(160, 178, 255, 0.5)")

    if (ar.length == 0){

        alert("No available options");

    } else if (ar.length == 1) {

        $(`#${ar[0]}`).css("background", "lightyellow")

        $(`#${ar[0]}`).on("click", () => {

            $(`#${id}`).text("");

            let which = $(`#${id}`).hasClass("player")

            if(which){
                $(`#${id}`).removeClass("player");
                $(`#${ar[0]}`).addClass("player");
            } else {
                $(`#${id}`).removeClass("comp");
                $(`#${ar[0]}`).addClass("comp");
            }

            $(`#${ar[0]}`).text("o");

            if (yourTurn == false){
                yourTurn = true;
            } else {
                yourTurn = false;
            }

            $(".other").css("background", "rgba(160, 178, 255, 0.5)")

            $(`#${ar[0]}`).off("click");

        })

    } else {

        $(`#${ar[0]}`).css("background", "lightyellow")
        $(`#${ar[1]}`).css("background", "lightyellow")

        $(`#${ar[0]}`).on("click", () => {

            $(`#${id}`).text("");

            let which = $(`#${id}`).hasClass("player")

            if(which){
                $(`#${id}`).removeClass("player");
                $(`#${ar[0]}`).addClass("player");
            } else {
                $(`#${id}`).removeClass("comp");
                $(`#${ar[0]}`).addClass("comp");
            }

            $(`#${ar[0]}`).text("o");

            if (yourTurn == false){
                yourTurn = true;
            } else {
                yourTurn = false;
            }

            $(".other").css("background", "rgba(160, 178, 255, 0.5)")

            $(`#${ar[0]}`).off("click");

        })

        $(`#${ar[1]}`).on("click", () => {

            $(`#${id}`).text("");

            let which = $(`#${id}`).hasClass("player")

            if(which){
                $(`#${id}`).removeClass("player");
                $(`#${ar[1]}`).addClass("player");
            } else {
                $(`#${id}`).removeClass("comp");
                $(`#${ar[1]}`).addClass("comp");
            }

            $(`#${ar[1]}`).text("o");

            if (yourTurn == false){
                yourTurn = true;
            } else {
                yourTurn = false;
            }

            $(".other").css("background", "rgba(160, 178, 255, 0.5)")

            $(`#${ar[1]}`).off("click");

        })

    }
}