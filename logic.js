let firstPlayerTurn = true;

function check(info){
    if (!info.innerText){
        alert("No choice selected")
    } else {
        if (firstPlayerTurn === true){
    
            let correctPlayer = info.getAttribute("class") == 'other player';
            
            if (correctPlayer === true){
                console.log("Correct player");
            } else {
                console.log("Not your turn");
            }
        } else {
    
            let correctPlayer = info.getAttribute("class") == 'other comp';
            
            if (correctPlayer === true){
                console.log("Correct player");
            } else {
                console.log("Not your turn");
            }
        }
    }
}