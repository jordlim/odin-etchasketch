function sketch(size) {
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
      square.style.height = side + "px";

      col.appendChild(square);
    }
    grid.appendChild(col);
  }

  const hover = document.querySelectorAll(".square");
  let color = false;
  document.getElementById("random").addEventListener("click", function() {
    color = true;
    console.log("random");
  });

  hover.forEach((hov) => {
    let r = 0;
    let g = 0;
    let b = 0;
    hov.addEventListener(
      "mouseover", () => {
      if (color) {
        // Math.floor(Math.random() * (max - min + 1)) + min
        r = Math.floor(Math.random() * (100)) + 100;
        g = Math.floor(Math.random() * (100)) + 100;
        b = Math.floor(Math.random() * (100)) + 100;
        hov.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        ;
      }
      else{
        hov.style.backgroundColor="black";
      }

      });
      
    hov.addEventListener(  
      "mouseout", () => {
      if (color) {
        // leave as is
      
      }
      else{
        hov.style.backgroundColor="gray";
      }
      
      });
    });


}


function resize() {
  let text;
  let size = prompt("Squares per side (Max 100):", "16");
  if (size == null || parseInt(size) < 1 || parseInt(size) > 100 ) {
    text = "Invalid size (Must be between 1 and 100)";
  } else {
    console.log("resizing");
    text = "<b>" + size + "x" + size + "</b>";
    sketch(parseInt(size));
  }
  document.getElementById("size").innerHTML = text;
  
}

function randomize() {
  let color;

}


sketch(16);