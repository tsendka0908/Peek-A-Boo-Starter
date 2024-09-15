let currentTile = { sully: null, randall: null }

document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.id = i;
        tile.addEventListener("click", selectTile);
        board.appendChild(tile);
    }

    setInterval(setCharacter("sully"), 1500); // 1.5 seconds
    setInterval(setCharacter("randall"), 2000); // 2 seconds
});

const setCharacter = (character) => {
    const randomTile = getRandomTile();
    if (isTileOccupied(randomTile)) return;
    const tile = document.getElementById(randomTile);
    const img = document.createElement(img);
    img.src = `./image/${character}.png`;
    tile.appendChild(img);
    currentTile(character) = tile;
    setTimeout(() => clearTile(character), 1000); // 1 second
};

const isTileOccupied = (randomTile) => 
    currentTile.sully?.id === randomTile ||
 currentTile.randall?.id === randomTile;

 const clearTile = (character) => {
    if(currentTile[character]) currentTile[character].innerHTML = ""
 };

 const selectTile = (e) => {
   if (e.target.children.legth === 0) {
    console.log("door is empty");
    
   } else if (e.target === currentTile.sully) {

   } else if  (e.target === currentTile.randall) {
    
   }
 };

const getRandomTile = () => Math.floor(Math.random() * 9).toString();
