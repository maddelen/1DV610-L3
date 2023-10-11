# Testrapport - Manuella tester

| Test | Beskrivning               | Utfall PASS/FAIL |
|------|---------------------------|------------------|
| TC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  |
| TC2 | Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.|  Pass  |
| TC3 | Testar att skriva in en kodsnutt.|  Pass  |
| TC4 | Testar att kopiera in massa text. |  Pass  |

<br>

### UC1
<b>Beskrivning:</b> Starta applikationen och se om man kommer till startsidan.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.

<b>Förväntad resultat:</b>
Nu borde startsidan av applikationen visas.

<hr>

### UC2
<b>Beskrivning:</b> Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och börja skriva.


<b>Förväntad resultat:</b>
Texten ska börja analyseras i realtid och du ska kunna se antalet ord, tecken, meningar, vilket det längsta ordet i din text är samt vilket ord som förekommer oftast. Du ska även kunna se en ytterligare analys av texten som visar hur många gemener, versaler, siffror, blanksteg, specialtecken, vokaler och konsonanter som finns i texten. Sen kommer du även kunna se ett försök till att tolka vilket språk det är du skriver på.

<hr>

### UC3
<b>Beskrivning:</b> Testar att skriva in en kodsnutt.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och skriv in följande kodsnutt: ```<style> .colored-text {
            color: blue;
        }</style>```


<b>Förväntad resultat:</b>
Du bör direkt få ett meddelande som säger att det inte är tillåtet att använda dessa tecken < >.

<hr>

### UC4
<b>Beskrivning:</b> Testar att kopiera in massa text.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och kopiera in följande kodsnutt 20 gånger: <br>
"Mauris vel fermentum sapien. Vestibulum dignissim est non metus fermentum, a fermentum metus bibendum. Praesent nec justo ligula. Fusce scelerisque suscipit libero, eu convallis eros euismod et. Vestibulum posuere augue at erat feugiat vestibulum. Vivamus bibendum quam at aliquet hendrerit. Maecenas tristique nisl ut purus volutpat, non vulputate odio aliquet. In hac habitasse platea dictumst. Maecenas non sagittis ligula. Suspendisse ut est non ante suscipit volutpat. Integer placerat, dui non hendrerit ultrices, justo nisl hendrerit mi, ac volutpat leo velit at nisl. Vestibulum at fermentum tellus. Integer et nisl vitae augue gravida iaculis a eget justo. Sed malesuada metus eu ipsum mattis, ut faucibus purus fringilla"


<b>Förväntad resultat:</b>
Du bör få ett meddelande som säger att det inte är tillåtet att skriva mer än 2000 ord.
