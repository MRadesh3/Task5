var x = [],
  o = [];
let player;
let clicks = 0;
let fcheck = false;

if (Math.round(Math.random()) == 1) {
  player = 'x';
  control_x();
} else {
  player = 'O';
  control_o();
}

for (let i = 0; i < 9; i++) {
  x[i] = false;
  o[i] = false;
}

function control_x() {
  if (fcheck == false)
    fcheck = true;
  else {
    clicks++;
  }
  document.getElementById("Turn").innerHTML = "It's time for X";
}



function control_o() {
  if (fcheck == false)
    fcheck = true;
  else {
    clicks++;
  }
  document.getElementById("Turn").innerHTML = "It's time for O";
}



function on_click(position) {
  if (x[position - 1] == false && o[position - 1] == false) {
    if (player == 'O') {
      o[position - 1] = true;
      document.getElementById("box" + position).innerHTML = "O";
      document.getElementById("box" + position).style.opacity = "1";
      player = 'x';
      control_x();
    } else if (player == 'x') {
      x[position - 1] = true;
      document.getElementById("box" + position).innerHTML = "x";
      document.getElementById("box" + position).style.opacity = "1";
      player = 'O';
      control_o();
    }
    check_win_condition();
  }
}


function check_win_condition() {
  if (x[0] == true && x[1] == true && x[2] == true || x[0] == true && x[4] == true && x[8] == true || x[0] == true && x[3] == true && x[6] == true || x[1] == true && x[4] == true && x[7] == true || x[2] == true && x[5] == true && x[8] == true || x[2] == true && x[4] == true && x[6] == true || x[6] == true && x[7] == true && x[8] == true || x[3] == true && x[4] == true && x[5] == true) {
    alert('Player X wins');
    reset();
  } else if (o[0] == true && o[1] == true && o[2] == true || o[0] == true && o[4] == true && o[8] == true || o[0] == true && o[3] == true && o[6] == true || o[1] == true && o[4] == true && o[7] == true || o[2] == true && o[5] == true && o[8] == true || o[2] == true && o[4] == true && o[6] == true || o[6] == true && o[7] == true && o[8] == true || o[3] == true && o[4] == true && o[5] == true) {
    alert('Player O wins');
    reset();
  }
  if (clicks == 9) {
    alert('Draw');
    reset();
  }
}


function reset() {
  for (let i = 1; i < 10; i++) {
    let name = "box" + i;
    document.getElementById(name).innerHTML = "";
    x[i - 1] = false;
    o[i - 1] = false;
  }
  clicks = 0;
}


function hover_in(position) {
  if (x[position - 1] == false && o[position - 1] == false) {
    if (player == 'O') {
      document.getElementById("box" + position).innerHTML = "O";
      document.getElementById("box" + position).style.opacity = "0.5";
    } else if (player == 'x') {
      document.getElementById("box" + position).innerHTML = "x";
      document.getElementById("box" + position).style.opacity = "0.5";
    }
  } else
    hover_out(position);
}

function hover_out(position) {
  if (x[position - 1] == false && o[position - 1] == false)
    document.getElementById("box" + position).innerHTML = "";
}
