// Event Listener

document.getElementById("calculate").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let gr1 = +document.getElementById("csScripting1").value;
  let gr2 = +document.getElementById("sp1").value;
  let gr3 = +document.getElementById("sp2").value;
  let gr4 = +document.getElementById("csScripting2").value;
  let gr5 = +document.getElementById("projA").value;

  // Process
  let average = +(gr1 + gr2 + gr3 + gr4 + gr5) / 5;

  // Output
  document.getElementById("output").innerHTML = average;
}
