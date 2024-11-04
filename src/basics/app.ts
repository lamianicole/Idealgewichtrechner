const lengthInput = document.getElementById('lengthInput') as HTMLInputElement;
const ageInput = document.getElementById('ageInput') as HTMLInputElement;
const selectBreit = document.getElementById('selectBreit') as HTMLInputElement;
const selectSchmal = document.getElementById('selectSchmal') as HTMLInputElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
const outputResult = document.getElementById('outputResult') as HTMLParagraphElement;

submitBtn?.addEventListener('click', () => {
    const groesse = Number(lengthInput.value);
    const alter = Number(ageInput.value); 
    const breit = selectBreit.checked; 

    let basisBerechnung = (groesse - 100) + (alter/ 10);
    let idealGewicht = basisBerechnung * 0.9; 

    if(breit) {
        idealGewicht *= 1.1
    } else {
        idealGewicht *= 0.9;
    }
    idealGewicht = Math.round(idealGewicht * 10)/ 10;

    outputResult.textContent = `Dein Idealgewicht ist ${idealGewicht} kg`;
}
)
