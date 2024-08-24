let randomNumber = Math.ceil(Math.random() * 100);

// Mostrar número
window.document.querySelector("p#show").innerHTML = randomNumber;

// Recarregar a Página
function restartGame() {
    window.location.reload();
}

let attemptCount = 1; //Fora
let maxAttempts = 5; //Fora

// Entrar número
function submitNumber() {
    let mine = window.document.querySelector("p#mine");
    let face = window.document.querySelector("p#face");
    let myNumber = window.document.querySelector("input#iNumber").value;
    let attempt = attemptCount;
    let button = window.document.querySelector("input#iSubmit");

    // Contagem de tentativas
    if (attemptCount === 1) {
        attempt = "You've got 4 attempts left."
    } else if (attemptCount === 2) {
        attempt = "You've got 3 attempts left."
    } else if (attemptCount === 3) {
        attempt = "You've got 2 attempts left."
    } else if (attemptCount === 4) {
        attempt = "You've got 1 attempts left."
    }
    
    // Contagem e Resultados
    while (attemptCount <= maxAttempts) {
        attemptCount++
        if (Number(myNumber) > randomNumber) {
            mine.innerHTML = myNumber + " is too high. " + attempt;
        } else if (Number(myNumber) < randomNumber){
            mine.innerHTML = myNumber + " is too low. " + attempt;
        } else if (Number(myNumber) === randomNumber){ //VENCEDOR
            mine.innerHTML = `Congratulations! You're right, it's ${myNumber}!`;
            // Emoji
            face.style.display = "inline-block";
            face.innerHTML = "sentiment_satisfied";
            face.style.backgroundColor = "#053d08";
            // Botão
            button.disabled = true; // Desativa o botão Submit
            button.style.backgroundColor = "#ee9999";
            button.style.opacity = "0.8";
            document.body.style.backgroundColor = "#147e1a";
        }
        break;
    }

    if (Number(myNumber) === 0 || Number(myNumber) > 100 || Number(myNumber) === null) {
        attemptCount--
        mine.innerHTML = "Invalid number. Try again";
    }

    // Encerra o jogo caso as tentativas acabem
    if (attemptCount > maxAttempts) {
        // Texto
        mine.innerHTML = "You lost!";
        // Emoji
        face.style.display = "inline-block";
        face.innerHTML = "sentiment_dissatisfied";
        face.style.backgroundColor = "#630808";
        // Botão
        button.disabled = true;
        button.style.backgroundColor = "#ee9999";
        button.style.opacity = "0.8";
        // Cor de Fundo
        document.body.style.backgroundColor = "#a11515";
    }
}
