let currentTeam = "team2";

function newGame() {
    let array = ["a", "b", "c", "d", "e", "f", "g", "h"]
    for (element of array) {
        for (let i = 1; i <= 8; i++) {
            let id = element + i.toString();
            document.getElementById(id).innerHTML = "";
        }
    }

    document.getElementById("a8").innerHTML = '<p class="team1">R</p>';
    document.getElementById("b8").innerHTML = '<p class="team1">N</p>';
    document.getElementById("c8").innerHTML = '<p class="team1">B</p>';
    document.getElementById("d8").innerHTML = '<p class="team1">Q</p>';
    document.getElementById("e8").innerHTML = '<p class="team1">K</p>';
    document.getElementById("f8").innerHTML = '<p class="team1">B</p>';
    document.getElementById("g8").innerHTML = '<p class="team1">N</p>';
    document.getElementById("h8").innerHTML = '<p class="team1">R</p>';
    document.getElementById("a7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("b7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("c7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("d7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("e7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("f7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("g7").innerHTML = '<p class="team1">F</p>';
    document.getElementById("h7").innerHTML = '<p class="team1">F</p>';

    document.getElementById("a2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("b2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("c2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("d2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("e2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("f2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("g2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("h2").innerHTML = '<p class="team2">F</p>';
    document.getElementById("a1").innerHTML = '<p class="team2">R</p>';
    document.getElementById("b1").innerHTML = '<p class="team2">N</p>';
    document.getElementById("c1").innerHTML = '<p class="team2">B</p>';
    document.getElementById("d1").innerHTML = '<p class="team2">Q</p>';
    document.getElementById("e1").innerHTML = '<p class="team2">K</p>';
    document.getElementById("f1").innerHTML = '<p class="team2">B</p>';
    document.getElementById("g1").innerHTML = '<p class="team2">N</p>';
    document.getElementById("h1").innerHTML = '<p class="team2">R</p>';

    document.getElementById("current-team").innerText = "Weiß fängt an.";
}

function turnBoard() {
    let con = confirm('Das drehen des Brettes resettet das Spiel! Drücken Sie OK zum fortfahren!');

    if(con) {
        if (window.location.href.match(/reversed/) == "reversed") {
            window.location.href = "/index.html";
        } else {
            window.location.href = "/reversed.html";
        }
    }
}

function moveFrom(id) {
    if (document.getElementById(id).innerHTML == "" || document.getElementById(id).innerHTML.match(/team./) != currentTeam) {
        if (document.getElementById("von").value != "") {
            document.getElementById("nach").value = id;
        } else if (currentTeam == "team2") {
            window.alert("Weiß ist am Zug.");
        } else {
            window.alert("Schwarz ist am Zug.");
        }
    } else {
        document.getElementById("von").value = id;
    }

    if (document.getElementById("nach").value != "" && document.getElementById("von").value != "") {
        chessPlay();
        document.getElementById("nach").value = "";
        document.getElementById("von").value = "";
    }
}

function chessPlay() {
    let von = document.getElementById("von").value;
    let nach = document.getElementById("nach").value;
    let figure = document.getElementById(von).innerHTML.match(/[A-Z]/);
    let teamVon = document.getElementById(von).innerHTML.match(/team./);
    let teamNach = document.getElementById(nach).innerHTML.match(/team./);

    checkPossible(von, nach, figure);

    if (document.getElementById(von).innerHTML != "") {
        document.getElementById(nach).innerHTML = document.getElementById(von).innerHTML;
        document.getElementById(von).innerHTML = "";
    }

    if (currentTeam == "team2") {
        currentTeam = "team1";
        document.getElementById("current-team").innerText = "Schwarz ist am Zug.";
    } else {
        currentTeam = "team2";
        document.getElementById("current-team").innerText = "Weiß ist am Zug.";
    }
}

function checkPossible() {

}