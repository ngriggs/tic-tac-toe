const ticTacToe = (() => {
    let turn = 'X'
    let jimmiesMoves = []
    let jeffsMoves = []
    return {
        gameBoard: function() {
            console.log(this.getAttribute('id'))

            if (turn == 'X') {
                jimmie.chooseLocation(document.getElementById(this.getAttribute('id')))
                jimmiesMoves.push(parseInt(this.getAttribute('id')))
            } else {
                jeff.chooseLocation(document.getElementById(this.getAttribute('id')))
                jeffsMoves.push(parseInt(this.getAttribute('id')))
            }
            console.log(jimmiesMoves)
            console.log(jeffsMoves)
            ticTacToe.findWinningCombinations(jimmiesMoves)
            ticTacToe.findWinningCombinations(jeffsMoves)
            ticTacToe.nextTurn()
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
            const found = array.some(r=> winningCombinations.includes(r))
            console.log(found)
        }
    };

  })();

ticTacToe.displayController()

const Player = (name, symbol) => {
    const getName  = () => name;
    const getSymbol = () => symbol;
    const chooseLocation = cell => {
        if (cell.innerHTML == "") {
            cell.innerHTML = '<h3>' + symbol + '</h3>'
        } else {
            // do nothing?
        }
    }
    return {name, symbol, chooseLocation}
} 

const jimmie = Player('Jim', 'X')
const jeff = Player('Jeff', 'O')
