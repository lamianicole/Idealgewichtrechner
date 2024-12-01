// HTML-Element auswählen mit der ID submitBtn, speichern in der Variable submitBtn, damit wir später auf Click Event des Buttons reagieren können
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;

// Funktion zur Berechnung des Idealgewichts
// Funktion berechnet das Idealgewicht auf Basis der übergebenen Parameter bodySize (Körpergröße), age (Alter) und bodyStructure (Körperbau), um das Idealgewicht entsprechend der verschiedenen Formeln für schmalen und breiten Körperbau zu berechnen. 
const idealWeightCalc = (bodySize: string, age: string, bodyStructure: string): number => {
    const bodySizeNum: number = Number(bodySize);
    const ageNum: number = Number(age);
    let result: number = 0;

    if (bodyStructure === "slim") {
        result = (bodySizeNum - 100 + ageNum / 10) * 0.9 * 0.9;
    } else if (bodyStructure === "wide") {
        result = (bodySizeNum - 100 + ageNum / 10) * 0.9 * 1.1;
    }

    return Math.round(result);
};

// Event Listener für den Klick auf den Submit-Button: Event Listener wird hinzugefügt, der reagiert bei Klick auf Submit-Button. Innerhalb des Event Listeners werden die Eingabefelder für Körpergröße, Alter und Körperbau und Ergebnisfeld ausgewählt, damit wir die eingegebenen Werte erfassen und später verwenden können.
submitBtn.addEventListener("click", () => {
    const bodySize = document.querySelector("#lengthInput") as HTMLInputElement;
    const age = document.querySelector("#ageInput") as HTMLInputElement;
    const bodyStructure = document.querySelectorAll(".bodyStructure") as NodeListOf<HTMLInputElement>;
    const showResults = document.querySelector("#outputResult") as HTMLElement;

    const bodySizeValue = bodySize.valueAsNumber;
    const ageValue = age.valueAsNumber;

// Validierung der Eingabewerte:
// Zuerst prüfen wir, ob die eingegebenen Werte für Körpergröße und Alter positiv sind. Wenn ja, gehen wir durch alle Körperbau-Optionen und schauen, welche angeklickt ist. Dann berechnen wir das Idealgewicht und zeigen das Ergebnis an. Wenn die Werte nicht positiv sind, zeigen wir eine Fehlermeldung an. Damit wir sicherstellen, dass nur gültige und sinnvolle Werte verwendet werden, bevor wir die Berechnung durchführen.
    if (bodySizeValue > 0 && ageValue > 0) {
        bodyStructure.forEach((elt) => {
            if (elt.checked) {
                showResults.textContent = `Dein Idealgewicht ist ${idealWeightCalc(bodySize.value, age.value, elt.value)} kg`;
            }
        });
    } else {
        showResults.textContent = "Bitte gib gültige, positive Werte für Körpergröße und Alter ein.";
    }
});

// Der Code liest die Eingabewerte für Körpergröße, Alter und Körperbau aus, prüft, ob die Werte gültig sind, berechnet dann das Idealgewicht basierend auf den Eingaben und zeigt das Ergebnis an.