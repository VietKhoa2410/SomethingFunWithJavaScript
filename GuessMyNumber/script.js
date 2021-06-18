var max = 30;
var maxScore = 5;
var score = maxScore;
var highScore = 0;
var randomNumber = random(max);

console.log(randomNumber);

function random(max) {
    return Math.floor(Math.random() * max);
}

function checkResult(input) {
    if (input < randomNumber) {
        score--;
        $('#score').html(score);
        $('#resultText').html('Lower than random number...');
    } else if (input > randomNumber) {
        score--;
        $('#score').html(score);
        $('#resultText').html('Bigger than random number...');
    } else {
        $('#resultText').html('Congretulation!');
        $('#game').css('background-color', 'green');
        if (highScore < score) {
            highScore = score;
            $('#highScore').html(highScore);
        }
    }
}

$('#checkBnt').click(function () {
    let input = 0;
    if ($('#input').val()) input = $('#input').val();

    checkResult(input);
});

$('#resetBtn').click(function () {
    randomNumber = random(max);
    score = maxScore;
    $('#score').html(score);
    $('#game').css('background-color', 'black');
});
