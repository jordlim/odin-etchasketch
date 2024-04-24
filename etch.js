/* need to rework how squares work
currently they have width, height, + 2px around
if it's 16x16, it should be 12x12 inside and 2px around using padding
*/
function sketch(size) {
  // document.querySelector(".grid").remove();
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";


  for (let colNum = 0; colNum < size; colNum++){
    const col = document.createElement("div");
    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      let sizeInt = parseInt(size)
      let side = 640/sizeInt;
      
      square.style.width = side + "px";
      console.log(square.style.width);
      square.style.height = side + "px";
      console.log(square.style.height);

      col.appendChild(square);
    }
    grid.appendChild(col);
  }

  const hover = document.querySelectorAll(".square");

  hover.forEach((hov) => {
    hov.addEventListener(
      "mouseover", () => {
      // console.log("enter");
      hov.style.backgroundColor="black";

      });
      
    hov.addEventListener(  
      "mouseout", () => {
      hov.style.backgroundColor="gray";
      // console.log("exit");
      });
    });


}


function resize() {
  let text;
  let size = prompt("Squares per side (Max 100):", "16");
  if (size == null || parseInt(size) < 0 || parseInt(size) > 100 ) {
    text = "Invalid size (Must be between 1 and 100)";
  } else {
    console.log("resizing");
    text = size + "x" + size;
    sketch(parseInt(size));
  }
  document.getElementById("size").innerHTML = text;
  
}


sketch(16);