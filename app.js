const inputElement = document.querySelector('input');
const remainingCharsElement = document.getElementById('remaining-chars');

//console.dir(inputElement);
    
const maxCharacters = inputElement.maxLength

function retrieveUserInput(event)
{
    const userInput = event.target.value;
    const enteredTextLength = userInput.length;

    remainingCharacters = maxCharacters - enteredTextLength;

    if(remainingCharacters<=10)
    {
          inputElement.classList.add('warning');
          remainingCharsElement.classList.add('warning');

    }
    else
    {
        inputElement.classList.remove('warning');
        remainingCharsElement.classList.remove('warning');
    }

    remainingCharsElement.textContent = remainingCharacters;


}

inputElement.addEventListener('input', retrieveUserInput)

