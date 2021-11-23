const darkLight = ["Light", "Dark"]
let selected = 0;
function darkMode() {
  document.getElementById("button").innerHTML = darkLight[selected] + " Mode";
  selected = (selected * -1) + 1;
  if(selected > 0) {
    document.getElementById("link").setAttribute("href", "dark.css");
  }
  else {
    document.getElementById("link").setAttribute("href", "style.css");
  }
}

function copy() {
  navigator.clipboard.writeText("https://thezonegame.computingsquid.repl.co/index.html");
  alert("Copied URL, Now share with your friends!");
}