# calcolo del prezzo del biglietto del treno

## TRACCIA

```plaintext
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.

BONUS:
Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.

```

## SVOLGIMENTO


costo bliglietto per 1 km = 0.21 €

- Quanti chilometri dovrai percorrere?
- Quanti anni hai?
    - SE l'utente è minorenne avrà uno sconto del 20% sul prezo del biglietto
    - SE l'utente è over 65 avrà uno sconto del 40% sul prezo del biglietto
        - ALTRIMENTI pagherà il prezzo pieno

- calcola la percentuale di sconto per ogni categoria
- sottrai la percentuale al costo del biglietto 
- moltiplica il prezzo scontato per i km che dovrà percorrere l'utente 


- stampa il biglietto 



