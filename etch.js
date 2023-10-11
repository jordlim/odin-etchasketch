function sketch() {
  const grid = document.querySelector(".grid");

  for (let colNum = 0; colNum < 16; colNum++){
    const col = document.createElement("div");
    for (let i = 0; i < 16; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.textContent = i + 1;

      col.appendChild(square);
    }
    grid.appendChild(col);
  }

  const hover = document.querySelectorAll(".square");

  hover.forEach((hov) => {
    hov.addEventListener(
      "mouseover", () => {
      // console.log("enter");
      hov.style.backgroundColor="white";

      });
      
    hov.addEventListener(  
      "mouseout", () => {
      hov.style.backgroundColor="pink";
      // console.log("exit");
      });
    });


}





sketch();
