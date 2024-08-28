
let lista = ["mere", "paine", "lapte", "oua", "banane"];

console.log("Lista inițială de cumpărături:", lista);
console.log("Numărul de produse în lista inițială:", lista.length);


function sorteazaAlfabetic() {
    lista.sort();
    console.log("Lista de cumpărături sortată alfabetic:", lista);
}

function cautaProdus(produs) {
    let index = lista.indexOf(produs);
    if (index !== -1) {
        return `Produsul "${produs}" se află la indicele ${index}.`;
    } else {
        return `Produsul "${produs}" nu a fost găsit în lista de cumpărături.`;
    }
}

function adaugaProdus( produs) {
    if (lista.indexOf(produs) === -1) {
        lista.push(produs);
        console.log(`Produsul "${produs}" a fost adăugat în lista de cumpărături.`);
    } else {
        console.log(`Produsul "${produs}" este deja în lista de cumpărături.`);
    }
}


function eliminaProdus( produs) {
    let index = lista.indexOf(produs);
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`Produsul "${produs}" a fost eliminat din lista de cumpărături.`);
    } else {
        console.log(`Produsul "${produs}" nu a fost găsit în lista de cumpărături.`);
    }
}

sorteazaAlfabetic();
console.log(cautaProdus("oua"));
adaugaProdus("ciocolata");
eliminaProdus("mere");

console.log("Lista finală de cumpărături:", lista);
console.log("Numărul de produse în lista finală:", lista.length);