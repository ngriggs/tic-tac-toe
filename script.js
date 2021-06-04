const ticTacToe = (() => {
    let turn = 'X'
    return {
        gameBoard: function() {
            if (ticTacToe.isInProgress()) {
                if (turn == 'X') {
                    jimmie.chooseLocation(document.getElementById(this.getAttribute('id')))
                    if(ticTacToe.findWinningCombinations(jimmie.playersMoves)) {
                        setTimeout(function () { 
                            if(!alert('Jimmie Wins!')){ticTacToe.newGame()};
                         }, 0);
                    }
                } else {
                    jeff.chooseLocation(document.getElementById(this.getAttribute('id')))
                    if (ticTacToe.findWinningCombinations(jeff.playersMoves)) {
                        setTimeout(function () {
                            if(!alert('Jeff Wins!')){ticTacToe.newGame()};
                        }, 1);
                    }
                }
                
            }
            else {
                if(!alert('Tie Game')){ticTacToe.newGame()};
            }
            

        },
        displayController: function() {
            const bodyH1Selector = document.querySelector('body').querySelector('h1')
            const container = document.createElement('div')
            container.setAttribute('class', 'container')
            bodyH1Selector.parentNode.insertBefore(container, bodyH1Selector.nextSibling);
            const gridDiv = document.createElement('div')
            gridDiv.setAttribute('class', 'gridDiv')
            container.appendChild(gridDiv)
            for (i = 0; i < 9; i++) {
                const div = document.createElement('div');
                div.classList.add('cell')
                div.setAttribute('id', i)
                div.addEventListener('click', ticTacToe.gameBoard)
                gridDiv.appendChild(div)
            }
        gridDiv.style.gridTemplateColumns = "repeat(3, 1fr";
        gridDiv.style.gridTemplateRows = "repeat(3, 1fr";
        },
        nextTurn: function() {
            turn = turn === 'X' ? 'O' : 'X';
        },
        findWinningCombinations: function(array) {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (const combination of winningCombinations) {
                const [a, b, c] = combination
                if (ticTacToe.hasSubArray(array, combination)) {
                    return combination
                }              
            }
        },
        hasSubArray: function(masterArray, subArray) {
            return subArray.every((i => v => i = masterArray.indexOf(v, i) + 1)(0)) || 
            subArray.reverse().every((i => v => i = masterArray.indexOf(v, i) + 1)(0));
        },
        isInProgress: function() {
            return (jimmie.playersMoves.length + jeff.playersMoves.length) < 9;
        },
        emptyDisplay: function() {
            var node = document.querySelector('.container');
            node.querySelectorAll('*').forEach(n => n.remove());
            node.remove()
        },
        newGame: function() {
            jimmie.resetBoard()
            jeff.resetBoard()
            ticTacToe.emptyDisplay()
            ticTacToe.displayController()

        }
    };

  })();
const Player = (name, symbol) => {
    const getName  = () => name;
    const getSymbol = () => symbol;
    let playersMoves = []
    const chooseLocation = cell => {
        if (cell.innerHTML == "") {
            cell.innerHTML = '<h3>' + symbol + '</h3>'
            playersMoves.push(parseInt(cell.getAttribute('id')))
            console.log(playersMoves, getName())
            ticTacToe.nextTurn()
        } else {
            // do nothing?
        }
    }
    let resetBoard = () => {
        playersMoves.length = 0
    }
    return {name, symbol, chooseLocation, resetBoard, playersMoves}
} 
ticTacToe.displayController()
const jimmie = Player('Jim', 'X')
const jeff = Player('Jeff', 'O')
