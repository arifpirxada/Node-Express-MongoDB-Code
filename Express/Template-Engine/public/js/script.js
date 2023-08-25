function chang () {
  let fRandom = Math.floor(Math.random()*500)
  let sRandom = Math.floor(Math.random()*500)
  let tRandom = Math.floor(Math.random()*500)
  document.getElementById("box").style.backgroundColor = `rgb( ${fRandom}, ${sRandom}, ${tRandom})`;
}
