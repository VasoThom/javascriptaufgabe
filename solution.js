//1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.

function aufgabe1(str) {
  if (!(typeof str === "string")) {
    return "Invalides Argument! Es muss ein String übergeben werden!";
  }

  const arr = str.split(" ");
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return result.join(" ");
}

console.log(
  aufgabe1(
    "authoritatively incentivize excellent alignments whereas sources rapidiously.;"
  )
);

//2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.

function text3(str) {
  if (!(typeof str === "string")) {
    return "Invalides Argument! Es muss ein String übergeben werden!";
  }
  return str.split(" ").splice(0, 30).join(" ") + "...";
}

console.log(
  text3(
    "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives  restore progressive bandwidth rather than timely initiatives "
  )
);

//3. Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.
function aufgabe3(params) {
  return text3(aufgabe1(params));
}
console.log(
  aufgabe3(
    "3.Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives "
  )
);
//4. Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").
