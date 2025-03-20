import { totaleImponibile, totaleIva, totaleOrdine, totaleGenerale, costoSpedizione, carrello } from "../src/carrello";

describe('Calcoli totale', () => { 
  
    it('controllare carrello riempito', () => {
        expect(carrello.length > 0).toBe(true);
    });

    it('calcolare totale imponibile', () => { 
        expect(totaleImponibile(carrello)).toBe(145);
    });

    it('calcolare iva', () => { 
        expect(totaleIva(carrello)).toBe(29);
    });

    it('calcolare totale ordine + iva', () => {
        expect(totaleOrdine(totaleImponibile(carrello), totaleIva(carrello))).toBe(174);
    });

    it('calcolare costo totale', () => {
        expect(totaleGenerale(totaleOrdine(totaleImponibile(carrello), totaleIva(carrello)), costoSpedizione)).toBe(184);
    });
    
});


