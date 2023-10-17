## Vision
Min vision är att kunna använda den här applikationen för tillfällen då man behöver veta till exempel hur många ord en uppsatts, rapport, artikel etc innehåller. Denna applikation analyserar dock det mesta som man kan tänka sig en text innehåller. 

## Framtida visioner
Utöka språk analysen. Just nu finns det fem olika språk applikationen kan analysera. Det är svenska, engelska, tyska, franska och spanska.

## Testrapport - Manuella tester

| Test | Beskrivning               | Utfall PASS/FAIL | Krav |
|------|---------------------------|------------------|-----------| 
| TC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  | [1](https://github.com/maddelen/1DV610-L3/issues/18) |
| TC2 | Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.|  Pass  | [2](https://github.com/maddelen/1DV610-L3/issues/19) |
| TC3 | Testar att skriva in en text och se om den analyserar antalet ord i texten som skrivs/skrivits.|  Pass  | [3](https://github.com/maddelen/1DV610-L3/issues/1) |
| TC4 | Testar att skriva in en text och se om den analyserar antalet tecken i texten som skrivs/skrivits.|  Pass  | [4](https://github.com/maddelen/1DV610-L3/issues/2) |
| TC5 | Testar att skriva in en text och se om den analyserar antalet meningar i  texten som skrivs/skrivits.|  Pass  | [5](https://github.com/maddelen/1DV610-L3/issues/3) |
| TC6 | Testar att skriva in en text och se om den hittar det längsta ordet i texten som skrivs/skrivits.|  Pass  | [6](https://github.com/maddelen/1DV610-L3/issues/11) |
| TC7 | Testar att skriva in en text och se om den hittar det mest använda ordet i texten som skrivs/skrivits.|  Pass  | [7](https://github.com/maddelen/1DV610-L3/issues/13) |
| TC8 | Testar att skriva in en text och se om den analyserar antalet vokaler i texten som skrivs/skrivits.|  Pass  | [8](https://github.com/maddelen/1DV610-L3/issues/4) |
| TC9 | Testar att skriva in en text och se om den analyserar  antalet konsonanter i texten som skrivs/skrivits.|  Pass  | [9](https://github.com/maddelen/1DV610-L3/issues/5) |
| TC10 | Testar att skriva in en text och se om den analyserar antalet versaler i texten som skrivs/skrivits.|  Pass  | [10](https://github.com/maddelen/1DV610-L3/issues/6) |
| TC11 | Testar att skriva in en text och se om den analyserar antalet gemener i  texten som skrivs/skrivits.|  Pass  | [11](https://github.com/maddelen/1DV610-L3/issues/7) |
| TC12 | Testar att skriva in en text och se om den analyserar antalet siffror i  texten som skrivs/skrivits.|  Pass  | [12](https://github.com/maddelen/1DV610-L3/issues/8) |
| TC13 | Testar att skriva in en text och se om den analyserar antalet mellanslag i  texten som skrivs/skrivits.|  Pass  | [13](https://github.com/maddelen/1DV610-L3/issues/9) |
| TC14 | Testar att skriva in en text och se om den analyserar antalet specialtecken i  texten som skrivs/skrivits.|  Pass  | [14](https://github.com/maddelen/1DV610-L3/issues/10) |
| TC15 | Testar att skriva in en text och se om den analyserar vilket språk texten är skriven på.|  Pass (När texten skrivits klart) | [15](https://github.com/maddelen/1DV610-L3/issues/12) |
| TC16 | Testar att skriva in en kodsnutt.|  Pass  | [16](https://github.com/maddelen/1DV610-L3/issues/14) |
| TC17 | Testar att kopiera in massa text. |  Pass  | [17](https://github.com/maddelen/1DV610-L3/issues/14) |

<br>

## Testfall
<details>
<summary>
<b> TC 1: Starta applikationen och se om man kommer till startsidan.</b>
</summary>
<br>
<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.

<b>Förväntad resultat:</b>
Nu borde startsidan av applikationen visas (se bild nedan).

![Start](/src/images/start.png)

<hr>
</details>
<br>
<details>
<summary>
<b>TC 2 - 15: Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.</b>
</summary>
<br>

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och börja skriva.


<b>Förväntad resultat:</b>
Texten ska börja analyseras i realtid och du ska kunna se antalet ord, tecken, meningar, vilket det längsta ordet i din text är samt vilket ord som förekommer oftast. Du ska även kunna se en ytterligare analys av texten som visar hur många gemener, versaler, siffror, blanksteg, specialtecken, vokaler och konsonanter som finns i texten. Sen kommer du även kunna se ett försök till att tolka vilket språk det är du skriver på (se bild nedan).

![Analyzing text](/src/images/analyzing-text.png)
<hr>
</details>
<br>
<details>
<summary>
<b>TC 16: Testar att skriva in en kodsnutt.</b>
</summary>
<br>

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och skriv in följande kodsnutt: ```<style> .colored-text {
            color: blue;
        }</style>```


<b>Förväntad resultat:</b>
Du bör direkt få ett meddelande som säger att det inte är tillåtet att använda dessa tecken < > (se bild nedan).

![Error message1](/src/images/error-message1.png)
<hr>
</details>
<br>
<details>
<summary>
<b>TC 17: Testar att kopiera in massa text.</b>
</summary>
<br>

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och kopiera in följande kodsnutt 12 gånger: <br>
"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."


<b>Förväntad resultat:</b>
Du bör få ett meddelande som säger att det inte är tillåtet att skriva mer än 2000 ord (se bild nedan).

![Error message2](/src/images/error-message2.png)
<hr>
</details>
