type  ProdottoCarrello= {
    id: number;
    nome: string;
    prezzo: number;
    quantita: number;
}

export const carrello: ProdottoCarrello[] = [
    {id: 1, nome: 'penna', prezzo: 8, quantita: 5},
    {id: 2, nome: 'quaderno', prezzo: 10, quantita: 10},
    {id: 3, nome: 'libro', prezzo: 2.5, quantita: 2}
];

export const totaleImponibile = (carrello: ProdottoCarrello[]) => {
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
        totale += carrello[i].prezzo * carrello[i].quantita;
    }
    return totale;
}

export const totaleIva = (carrello: ProdottoCarrello[]) => {
    return totaleImponibile(carrello) * 0.2;
}

export const totaleOrdine = (totaleImponibile: number, totaleIva: number) => {
    return totaleImponibile + totaleIva;
}

export const costoSpedizione = 10;

export const totaleGenerale = (totaleOrdine: number, costoSpedizione: number) => {
    return totaleOrdine + costoSpedizione;
}


