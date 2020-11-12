// alert("hi")

let storage = []

function play(clickedId){

    let player = document.getElementById("player")
    let clickedElement = document.getElementById(clickedId)


    if (player.innerText === 'X'){
        player.innerText = 'O'
        clickedElement.innerText = 'X'
        storage[clickedId] = 'X'
    }else{
        player.innerText = 'X'
        clickedElement.innerText = 'O'
        storage[clickedId] = 'O'
    }
    console.log(storage)

    let topLeft = storage[0]
    let topMiddle = storage[1]
    let topRight = storage[2]
    let middleLeft = storage[3]
    let middleMiddle = storage[4]
    let middleRight = storage[5]
    let bottomLeft = storage[6]
    let bottomMiddle = storage[7]
    let bottomRight = storage[8]

    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        alert(`${topLeft} is the winner`)
        return
      }
      if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`)
        return
      }
      if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`)
        return
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`)
        return
      }
      if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        alert(`${topMiddle} is the winner`)
        return
      }
      if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`)
        return
      }
      if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`)
        return
      }
      if (bottomLeft !== undefined && bottomLeft === middleMiddle && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`)
        return
      }




    let boardFull = true
    for (i = 0; i <= 8; i++){
        if (storage[i] === undefined){
            boardFull = false
     }
    }
       if (boardFull === true) {
           alert('Yall suck.')
       } 
    }

