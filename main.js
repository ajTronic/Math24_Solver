const inputs = document.querySelectorAll('input');
const solveButton = document.querySelector('button');

const styleInputToBeRed = (input) => {
    input.style.borderColor = 'red';
    input.style.borderRadius = '3px';
    input.style.borderWidth = '1px';
}

const resetInputs = () => {
    inputs.forEach(input => {
        input.style.borderColor = '#7f7f7f';
        input.style.borderWidth = '1px';
    });
}

let msg = document.createElement('p');

const createMessage = (text) => {
    msg.innerHTML = text;
    document.body.appendChild(msg);
};

solveButton.addEventListener('click', () => {
    let total = 0;
    let goodInputs = true;

    for (const input of inputs) {
        if (input.value == '') {
            console.log(true);
            styleInputToBeRed(input);
            goodInputs = false;
            createMessage('You must fill in all inputs.');
        } else if (isNaN(input.value)) {
            styleInputToBeRed(input);
            goodInputs = false;
            createMessage('All inputs must contain numbers.');
        } else {
            total += Number(input.value);
        }
    }

    if (goodInputs) {
        resetInputs();

        if (total === 24) createMessage('The numbers make 24!');
        else createMessage(`The numbers don't make 24!`);
    }

    console.log(total);
});