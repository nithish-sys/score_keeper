const h1 = document.querySelector("#h1");
const p1 = document.querySelector("#p1");
const h2 = document.querySelector("#h2");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const sel = document.querySelector("#sel");
let s1 = 0;
let s2 = 0;
let winningScore = 2;
let gameOver = false;

sel.addEventListener("change", () => {
  console.log("select");
  var e = document.getElementById("sel");
  winningScore = Number(e.options[e.selectedIndex].text);
  console.log(winningScore);
  resett();
});
p1.addEventListener("click", () => {
  console.log("p1");
  if (!gameOver) {
    s1 += 1;
    if (s1 === winningScore) {
      gameOver = true;
      document.getElementById("win").innerText = "Player 1 Won";
    }
    h1.innerHTML = s1;
  }
});
p2.addEventListener("click", () => {
  console.log("p2");
  if (!gameOver) {
    s2 += 1;
    if (s2 === winningScore) {
      gameOver = true;
      document.getElementById("win").innerText = "Player 2 Won";
    }
    h2.innerHTML = s2;
  }
});
reset.addEventListener("click", resett);
function resett() {
  console.log("reset");
  gameOver = false;
  document.getElementById("win").innerText = "";
  s1 = 0;
  s2 = 0;
  h1.innerHTML = 0;
  h2.innerHTML = 0;
}
