const ticTacToe = (() => {
    const gameBoard = () => {
        const gameboard = []
    }
    return {
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
                gridDiv.appendChild(div)
            }
        gridDiv.style.gridTemplateColumns = "repeat(3, 1fr";
        gridDiv.style.gridTemplateRows = "repeat(3, 1fr";
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

jimmie.chooseLocation(document.getElementById(0))
jeff.chooseLocation(document.getElementById(1))