

describe('Calcoli totale', () => { 
    it('controllare carrello riempito', () => {
        expect(carrello[].toBe(true));
    });

    it('calcolare totale imponibile', () => { 
        expect(totaleImponibile(carrello[]).toBe(145));
    };

    it('calcolare iva', () => { 
        expect(totaleIva(carrello[]).toBe(29));
    };

    it('calcolare totale ordine + iva', () => {
        expect(totaleOrdine(totaleImponibil() + totaleIva() ).toBe(174));
    };

    it('calcolare costo totale', () => {
        expect(totaleGenerale(totaleOrdine() + costoSpedizione)).toBe(174));
    };
    
});


