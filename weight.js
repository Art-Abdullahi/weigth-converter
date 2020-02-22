var input = document.getElementById("lbsInput");
input.addEventListener("input", e => {
  document.getElementById("outPut").style.display = "block";
  let pounds = e.target.value;
  let gramsOutput = (document.getElementById("gramsOutput").innerHTML =
    pounds / 0.0022046);

  let kgOutput = (document.getElementById("kilosOutput").innerHTML =
    pounds / 2.2046);

  let ouncesOutput = (document.getElementById("ozOutput").innerHTML =
    pounds * 16);
});
