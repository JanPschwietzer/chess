let currentTeam = "team2";

function colorChanger(color) {
    let black = document.getElementsByClassName("chess-black");
    let white = document.getElementsByClassName("chess-white");

    if (!color) {
        for (let i of black) {
            i.style.backgroundColor = document.getElementById("color1").value;
        }
        for (let i of white) {
            i.style.backgroundColor = document.getElementById("color2").value;
        }
    } else if (color == 1) {
        for (let i of black) {
            i.style.backgroundColor = "darkgrey";
        }
        for (let i of white) {
            i.style.backgroundColor = "grey";
        }
    }
}

function newGame() {
    let array = ["a", "b", "c", "d", "e", "f", "g", "h"]
    for (element of array) {
        for (let i = 1; i <= 8; i++) {
            let id = element + i.toString();
            document.getElementById(id).innerHTML = "";
        }
    }

    placeFigures();

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

    changeTeam();

    return [von, nach];
}

function changeTeam() {
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

function placeFigures() {
    let letters = document.getElementById('letters-tb');

    if (letters.checked) {
        document.getElementById("a8").innerHTML = '<img src="images/br.svg" class="team1"><p style="visibility: hidden; position: absolute;">R</p>';
        document.getElementById("b8").innerHTML = '<img src="images/bn.svg" class="team1"><p style="visibility: hidden; position: absolute;">N</p>';
        document.getElementById("c8").innerHTML = '<img src="images/bb.svg" class="team1"><p style="visibility: hidden; position: absolute;">B</p>';
        document.getElementById("d8").innerHTML = '<img src="images/bq.svg" class="team1"><p style="visibility: hidden; position: absolute;">Q</p>';
        document.getElementById("e8").innerHTML = '<img src="images/bk.svg" class="team1"><p style="visibility: hidden; position: absolute;">K</p>';
        document.getElementById("f8").innerHTML = '<img src="images/bb.svg" class="team1"><p style="visibility: hidden; position: absolute;">B</p>';
        document.getElementById("g8").innerHTML = '<img src="images/bn.svg" class="team1"><p style="visibility: hidden; position: absolute;">N</p>';
        document.getElementById("h8").innerHTML = '<img src="images/br.svg" class="team1"><p style="visibility: hidden; position: absolute;">R</p>';
        document.getElementById("a7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("b7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("c7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("d7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("e7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("f7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("g7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("h7").innerHTML = '<img src="images/bp.svg" class="team1"><p style="visibility: hidden; position: absolute;">P</p>';
    
        document.getElementById("a2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("b2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("c2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("d2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("e2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("f2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("g2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("h2").innerHTML = '<img src="images/wp.svg" class="team2"><p style="visibility: hidden; position: absolute;">P</p>';
        document.getElementById("a1").innerHTML = '<img src="images/wr.svg" class="team2"><p style="visibility: hidden; position: absolute;">R</p>';
        document.getElementById("b1").innerHTML = '<img src="images/wn.svg" class="team2"><p style="visibility: hidden; position: absolute;">N</p>';
        document.getElementById("c1").innerHTML = '<img src="images/wb.svg" class="team2"><p style="visibility: hidden; position: absolute;">B</p>';
        document.getElementById("d1").innerHTML = '<img src="images/wq.svg" class="team2"><p style="visibility: hidden; position: absolute;">Q</p>';
        document.getElementById("e1").innerHTML = '<img src="images/wk.svg" class="team2"><p style="visibility: hidden; position: absolute;">K</p>';
        document.getElementById("f1").innerHTML = '<img src="images/wb.svg" class="team2"><p style="visibility: hidden; position: absolute;">B</p>';
        document.getElementById("g1").innerHTML = '<img src="images/wn.svg" class="team2"><p style="visibility: hidden; position: absolute;">N</p>';
        document.getElementById("h1").innerHTML = '<img src="images/wr.svg" class="team2"><p style="visibility: hidden; position: absolute;">R</p>';
    } else {
        document.getElementById("a8").innerHTML = '<p class="team1">R</p>';
        document.getElementById("b8").innerHTML = '<p class="team1">N</p>';
        document.getElementById("c8").innerHTML = '<p class="team1">B</p>';
        document.getElementById("d8").innerHTML = '<p class="team1">Q</p>';
        document.getElementById("e8").innerHTML = '<p class="team1">K</p>';
        document.getElementById("f8").innerHTML = '<p class="team1">B</p>';
        document.getElementById("g8").innerHTML = '<p class="team1">N</p>';
        document.getElementById("h8").innerHTML = '<p class="team1">R</p>';
        document.getElementById("a7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("b7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("c7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("d7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("e7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("f7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("g7").innerHTML = '<p class="team1">P</p>';
        document.getElementById("h7").innerHTML = '<p class="team1">P</p>';
    
        document.getElementById("a2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("b2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("c2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("d2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("e2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("f2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("g2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("h2").innerHTML = '<p class="team2">P</p>';
        document.getElementById("a1").innerHTML = '<p class="team2">R</p>';
        document.getElementById("b1").innerHTML = '<p class="team2">N</p>';
        document.getElementById("c1").innerHTML = '<p class="team2">B</p>';
        document.getElementById("d1").innerHTML = '<p class="team2">Q</p>';
        document.getElementById("e1").innerHTML = '<p class="team2">K</p>';
        document.getElementById("f1").innerHTML = '<p class="team2">B</p>';
        document.getElementById("g1").innerHTML = '<p class="team2">N</p>';
        document.getElementById("h1").innerHTML = '<p class="team2">R</p>';
    }
}