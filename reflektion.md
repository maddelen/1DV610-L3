# Reflektion Clean Code (kap 2-11)

## Kap 2 - Meaningful Names.
Detta kapitel hade man haft nytta av tidigt i utbildningen. Att namnge variabler, funktioner, metoder det är inte lätt. Det kräver lite omtanke. Namnen behöver berätta vad det är som görs (Use Intention-Revealing Names). I min metod nedan så berättar mitt metodnamn att den updaterar räknaren av vokaler. Jag fick uppdatera några metodnamn i tidigare uppgift (L2) så att jag kunde vara ännu tydligare när det kommer till just Use Intention-Revealing Names. Jag tog även till mig av, "Avoid Disinformation". Jag ändrade ett metodnamn från "validateInput" till "validateUserInput". Då blev det tydligare <i>vart</i> inputen som ska valideras kommer ifrån. Författaren tar även upp att det kan vara farligt att ha namn som är för lika varandra. Detta kan jag verkligen ta till mig då jag ibland har fastnat på just två namn som är för lika varandra och det stannar upp hela min tankeproccess. En anna sak är precis som det står i boken att all kod tolkas och alla har olika bakgrund, så det är viktigt att se över sina namn och komma ihåg att man kan byta namn, det namn man börjar med behöver man inte vara fast med. Jag kan avsluta med en mening från boken som sammanfattar kapitlet rätt bra "Say what you mean. Mean what you say."

![Kapitel 2](/src/images/kapitel2.png)

<hr>

## Kap 3 - Functions.
Efter att ha läst detta kapitel så har jag gjort alla mina metoder "Small!". Jag har bland annat brytit ut en metod till fem (5) separata metoder. I denna uppgift är metoderna rätt små för att de gör inte så mycket. Jag kan säga att mina metoder är små (Small!) och att de gör en sak (Do One Thing) men jag kan tycka att detta passar in just nu, bara för att metoderna inte gör så mycket. Hade det varit en större applikation med fler vilkor och undantag hade metoderna eventullet varit större och kanske gjort fler saker. Dessa regler beror helt på sammanhanget. Precis som med "Dyadic Functions" tycker jag absolut att ett argument är tydligare i kod att läsa än fler, men kräver situationen att fler argument behövs så tycker jag att det är okej. Men jag förstår vad han menar med "The parts we ignore are where the bugs will hide." Det är lätt att missa argument om de är flera. Bilden nedan går emot "Do one thing" reglen och det är för att jag valt att använda en if-sats för att antingen visa eller dölja errormeddelandet. Jag tyckte att det var smidigt och hörde ihop med metoden.

![Kapitel 3](/src/images/kapitel3.png)

<hr>

## Kap 4 - Comments.
Jag tycker om kommentarer. Jag tycker de avslöjar/berättar vad som sker och vad som är tänkt ska ske. Funktion/metod dokumentation så som JSDoc gör att det går fortare att sätta sig in i koden. Radkommentarer kan hjälpa till att förstå svårare, mer inveklade delar av en metod. Så som "Clarification" i boken skriver att det kan vara hjälpsamt men att man helst ska försöka göra om koden så att den blir tydligare. TODO-kommentarer är också hjälpsamma då man sitter och programmerar med andra. Det har hjälpt mig och min grupp i en annan kurs att hålla koll på utveckligen av koden. Hjälpsamma, tydliga kommentarer uppskattas, men som i boken så finns det ju andra kommentarer också. För det är så att man hajjar till när man ser en kommentar, och då är det tråkigt om det är utkommentarad kod som egentligen hade kunnat raderas eller komentarer som används som stöd vid programmering (som också kunde ha rederats). I denna kommentar som jag lämnat (se bild) så är det för att jag själv inte använt mig av propagate så mycket och detta hjälper mig (andra också kanske) att förstå vad det är jag har kodat.

![Kapitel 4](/src/images/kapitel4.png)

<hr>

## Kap 5 - Formatting.
"Without indentation, programs would be virtually unreadable by humans". Det är ett sätt att synliggöra struktur och ordning i koden som gör det lättare att läsa och förstå den. Absolut. Jag tycker det är jätteviktigt att strukturera koden, inte bara i funktioner/metoder utan även i den övriga koden också. Det är därför jag har valt en bild på min div struktur. Här visar strukturen tydligt en indelning som hjälper till att förstå koden. Även i större metoder så hjälper indenteringen till att förstå och läsa metoden på ett bättre sätt. I boken tar författaren upp "The newspaper Metaphor" som även den hjälper till att göra kod tydlig och lättläst. Att se det som att man läser en artikel i en tidning med rubrik och paragrafer var en visualiering som kommer vara till hjälp framöver. 

![Kapitel 5](/src/images/kapitel5.png)

<hr>

## Kap 6 - Objects and Data Structures.
Jag har haft lite svårt att förstå detta kapitel. Men vad jag tar med mig ifrån det är att i "Law of Demeter" handlar det om att ifall en bit av våran kod behöver prata med en annan bit av kod så ska de vara "nära" varandra, som det står i boken "In other words, talk to friends, not to strangers". Säg att man skapar en sorts "telefonnummer" för varje bit av kod. Istället för att ringa någon direkt, ringer vi deras "telefonnummer." Vilket gör att om man ändrar något i en del av koden, påverkar det inte automatiskt andra delar.

<hr>

## Kap 7 - Error Handling.
Ett nyttigt kapitel. Jag tycker det är viktigt att meddela vad det är som har gått fel och inte bara att applikationen krashar och man får en felkod. Det är så många gånger man har suttit flera timmar och problemsökt på grund av detta. En felkod är alltid något men det är fortfarande för lite information. Som användare av en tjänst är det också bra att få veta vad som gått fel och varför. När man fyller i ett formulär till exempel så kan man få en informativ text som säger villkoren för att det man fyllt i ska vara godkänt. Det är hjälpsamt, både front-end och back-end att få informativa felmeddelande. Jag har i min validateUserInput valt att skriva ut ett meddelnade till användaren varför applikationen inte analyserar texten. Att ha error hantering separerad från övrig kod och logik är något som de tar upp i boken och jag tycker absolut att det ger en tydlighet att separera dessa två delar. Det blir lättare att leta på rätt ställe. Men som tidigare kan jag tycka att det kan finnas undantag beroende på sammanhanget.  

![Kapitel 7](/src/images/kapitel3.png)

<hr>

## Kap 8 - Boundaries.
Jag använder ingen tredjepart kod i min applikation, mycket av kapitlet handlade om det. Men jag försåt att man ska försöka koda med så få begränsningar som möjligt. Jag har tillexempel valt att göra componenter av varje del i applikationen. Jag ville att man lätt skulle kunna plocka bort en del om man inte ville ha den funktionen längre. Säg att jag vill skala ner applikationen och bara analysera ord, meningar och antal tecken, då kan jag plocka bort de övriga komponenterna. Eller om jag för den delen skulle vilja lägga till ytterligare en funktion så kan jag det rätt lätt. Eller använda en av dessa komponenter i ett annat projekt så är den redo. Det beroende min applikation har är modulen från L2. Skulle modulen ändras så kan det påverka min applikation. Jag har dock klargjort detta i README.

Här är ju automatiska tester något att föredra om man skulle använda sig av ett tredjeparts API till exempel. Kör man testerna regelbundet så märker man om APIet skulle ha ändrats/updaterats av de som äger APIet och på så sätt upptäka om den kod som är beroende av APIet slutat fungera.

![Kapitel 8](/src/images/kapitel8.png)

<hr>

## Kap 9 - Unit Tests.
Precis som författaren tar upp i detta kapitel så är den första instinkten till tester inte prioriterad. Han pratar om "dirty" tests och att det sakta men säkert blev som en snöbollseffekt. Problemen blev bara fler och fler, större och större. Det lades mer tid på att felsöka än att koda. 
Författaren skriver "...tests must change as the production code evolves". Detta kan jag bara hålla med om. Att koda lite, testa lite är en toppen kombo. Du får lättare för att se vart och när din kod inte gör som den sak. Det är tester som gör din kod flexibel. Jag har valt att göra manuella tester till denna applikation då den har ett tydligt och överskådligt gränssnitt. Jag har även under tiden jag lagt till komponenter testat i gränssnittet för att se att den gör som den ska. 

![Kapitel 9](/src/images/kapitel9.png)

<hr>

## Kap 10 - Classes.
Klasser ska vara små, precis som i kapitel 3 med funktioner. Jag har små klasser, namnen på klasserna berkriver vad de gör. "Classes should have one responsibility—one reason to change." Jag har valt i mina klasser att de ska ha ett ansvar. Det är därför det är så många av dem. Jag gillar det som boken tar upp angående att när man fått något att fungera så är man klar och går vidare till nästa steg. Jag får den känslan hela tiden. Jag måste verkligen ta mig tiden att kolla igenom koden jag skrivit och se om den faktiskt kan se bättre ut eller struktureras om. Som vi fick göra i L2 till exempel. Där hade jag några namn som kunde vara bättre, metoder som kunde vara mindre. Hade jag bara get mig tiden att kolla igenom allt en gång innan jag gått vidare till nästa steg så hade koden sätt bättre ut och varit lättare för andra att förstå.

![Kapitel 10](/src/images/kapitel10.png)

<hr>

## Kap 11 - Systems.
Jag började litet. Jag skapade en plats för att displaya min textanalysator (my-page komponenten). En komponent för mitt textfält och en komponent för att räkna antalet ord i textfältet. Sedan växta det och textanalysatorn fick fler funktioner. Då jag viste att det var många funktioner textanalysatorn skulle göra så var komponenter den struktur jag valde att gå med från start. Det är lätt att lägga till/ta bort komponenter. Det är inte alltid man vet hur stort eller litet ett projekt kommer vara, "Scaling Up" så som i boken tar upp är ett bra exempel på det. Det går inte att få allt rätt på första försöket. Hur skulle en liten by veta att breda vägar skulle behövas flera år fram? "It is a myth that we can get systems “right the first time.” Instead, we should implement only today’s stories, then refactor and expand the system to implement new stories tomorrow." Jag försöker ha en tydlig struktur och indelning på mina filer och mappar ifall det skulle behöva ändras i framtiden.


![Kapitel 11](/src/images/kapitel11.png)

<hr>

## Sammanfattning.
Jag tyckte om att läsa Clean Code, den var skriven på ett sätt där det var lätt att hänga med både i texten och i exemplen som gjordes kring det olika kapitlen. Jag kommer ta åt mig mycket av det som står i boken. Insikten att man faktiskt kan ändra i sin kod när man fått den att fungera är kul. Och att om man behöver många kommentarer så kanske det istället är värt att se över koden och ändra den så att kommentarerna inte behövs. Koden man skriver är inte bara till för en själv längre, utan den kan komma att läsas av någon annan och bara att ha den vetskapen i bakhuvet är jättebra. Det kommer hjälpa mig att skriva tydligare kod. Det är självklart delar i boken som jag tycker är lite väl hårt dragna linjer (Don't be cute, Do one thing, Dyadic Functions) men jag förstår tanken bakom dem. Det är det jag uppskattar med boken att när det är delar jag inte håller med om så får jag ändå en klarhet i kring varför författaren anser det vara ett problem. Det var kul att få en annan bild av tester och errorhantering. Hur viktiga dessa faktorer faktiskt är för programmerare. Hur mycket mer givande det är att ha tester att köra när koden ändras och att acceptera att lägga lite extra tid och energi på detta. Det kommer ju tillbaka flerfaldigt.