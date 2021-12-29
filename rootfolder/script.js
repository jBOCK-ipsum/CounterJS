let count = document.querySelector("#counterValue").value;

if (isNaN(count)) {
  count = 0;
  document.querySelector("#counterValue").innerHTML = 0;
}

function upFunc() {
  count++;
  changeColorUp();
  document.querySelector("#counterValue").innerHTML = count;
  console.log(count);
}

function downFunc() {
  count--;
  changeColorDown();
  document.querySelector("#counterValue").innerHTML = count;
  console.log(count);
}

function changeColorUp() {
  if (count > 0) {
    document.body.style.color = "#02500e";
  }
}
function changeColorDown() {
  if (count < 0) {
    document.body.style.color = "#740b04";
  }
}
