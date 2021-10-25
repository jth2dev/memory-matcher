const photos = []
const populateArray = () => {
  let i = 1
  while (i <= 12) {
    photos.push("photo-" + i)
    photos.push("photo-" + i)
    i++
  }
}
populateArray()
// console.log(photos)
const shuffle = () => {
  for (let k = photos.length - 1; k > 0; k--) {
    let m = Math.floor(Math.random() * (k + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    let t = photos[k];
    photos[k] = photos[m];
    photos[m] = t
    // you can also use "destructuring assignment" syntax to achieve that --- more details about that syntax in later chapters
    // [array[i], array[j]] = [array[j], array[i]];
  }
  // console.log(photos)
}
shuffle()
const squares = document.querySelectorAll(".square")
const assignNumbers = () => {
  for (let j = 0; j < photos.length; j++) {
    // squares[j].classList.add(photos[j])
    squares[j].setAttribute("id", photos[j])
    squares[j].setAttribute("src", "images/" + photos[j] + ".jpg")
  }
  // console.log(squares)
}
assignNumbers()
let clicks = 0
let firstRevealedSquare = null
let secondRevealedSquare = null
let firstRevealedElement = null
let secondRevealedElement = null
let turn = 1
for (n = 1; n <= photos.length; n++) {
  let mySquare = document.getElementById(n)
  mySquare.addEventListener("click", () => {
    if (turn === 1 && !mySquare.classList.contains('show') && !mySquare.classList.contains('show-perm')) {
      mySquare.firstChild.classList.remove("hide")
      mySquare.classList.add("show")
      firstRevealedSquare = mySquare.firstChild.getAttribute('id')
      firstRevealedElement = mySquare
      turn++
      clicks++
    } else if (turn === 2 && !mySquare.classList.contains('show') && !mySquare.classList.contains('show-perm')) {
      mySquare.firstChild.classList.remove("hide")
      mySquare.classList.add("show")
      secondRevealedSquare = mySquare.firstChild.getAttribute('id')
      secondRevealedElement = mySquare
      console.log(firstRevealedSquare, secondRevealedSquare)
      if(firstRevealedSquare == secondRevealedSquare){
        firstRevealedElement.classList.add("show-perm")
        secondRevealedElement.classList.add("show-perm")
        firstRevealedSquare = null
        secondRevealedSquare = null
        firstRevealedElement = null
        secondRevealedElement = null
        turn = 1
      } else {
        setTimeout(() => {
          for (let p = 0; p < squares.length; p++) {
            squares[p].classList.add("hide")
            squares[p].parentElement.classList.remove("show")
          }
        }, 1000)
        firstRevealedSquare = null
        secondRevealedSquare = null
        firstRevealedElement = null
        secondRevealedElement = null
        turn = 1
      }
    } 
  })
}