# PEVŠ ZAPR 2025 - Semestrálny projekt 1

# 🎮 Gaming Stats Calculator - Kalkulátor herných štatistík

![C 17](https://img.shields.io/badge/language-C17-blue)
![Deadline 03.11.2025 23:59](https://img.shields.io/badge/deadline-16.11.2025%2023%3A59-red)
[![Github Classrom](https://img.shields.io/badge/GitHub-Classroom-green)](https://classroom.github.com/classrooms)
[![Static Badge](https://img.shields.io/badge/Web-ZARP.Interes.Group-aquamarine)](https://zapr.interes.group/assignments/assignments1)

Cieľom zadania je implementovať jednoduchú konzolovú aplikáciu (tzv. CLI - command line interface),
ktorá vypočíta herné štatistiky hráča na základe vstupných parametrov.

Program poskytne používateľovi možnosti zadania rôznych konfigurácii vstupov pre výpočet hráčskej štatistiky.
Celý výpočet prebehne v jednom spustení programu. Program nepracuje so súbormi ani nepracuje so žiadnym externým
zdrojom. Program po vypočítaní a vypísaní hráčskej štatistiky, podľa zadaných parametrov, skončí.

Program po skompilovaní je spustení z konzoly/terminálu s tzv. pomenovaným argumentami (options)

```bash
./gamestats --help
```

## Hra - vstupy

Vstupmi programu je vyjadrená jedna hra. Hra pozostáva u nasledovných metrík:

- Počet zabití (kills)
- Počet úmrtí (deaths)
- Počet asistencií (assists)
- Trvanie hry (duration)

## Funkcionalita

## Vstupy a argumenty

Program príjma povinné argumenty, t.j. musia byť všetky povinné argumenty uvedené pri spustení programu, inak program
vypíše chybu, ktorý povinný argument pri volaní chýbal. A nepovinné argumenty, ktoré dopĺňajú funkcionalitu programu pre
ďalšie štatistiky.

### **Povinné argumenty:**

- `--kills POCET` - počet zabití, celé číslo (_int_)
- `--deaths POCET` - počet úmrtí, celé číslo (_int_)
- `--assists POCET` - počet asistencií, celé číslo (_int_)
- `--duration MINUTY` - trvanie hry v minútach, celé číslo (_int_)

### **Voliteľné argumenty:**

- `--headshots POCET` - počet headshotov z uvedeného počtu zabití, celé číslo (_int_)
- `--teamkills POCET` - počet teamkills na vlastný tým, celé číslo (_int_)
- `--mvp` - získal MVP (Most Valuable Player) príznak. Argument nemá ďalšiu hodnotu, ak je prítomný pri spustení
  programu, tak program použije tento príznak pri výpise a výpočet celkového skóre.

### **Pomocné príkazy:**

- `--help` - zobrazí nápovedu/pomocný text
- `--ranks` - zobrazí rebríček rankov/stupňov

#### Príklady volania programu:

- `./gamestats --help`
- `./gamestats --ranks`
- `./gamestats --kills 25 --deaths 10 --assists 15 --duration 35`
- `./gamestats --kills 25 --deaths 10 --assists 15 --duration 35 --headshots 5 --mvp`

### Výpočet štatistík

Program po spustení a prečítaní argumentov vypočíta štatistiku hry hráča. Program vypočíta nasledovné metriky hry:

- **Kills/Deaths ratio (K/D)**  - Pomer Kills/Deaths (Zabití/Úmrtí)
- **Kill,Assists/Deaths ratio (KDA)** - Pomer K/D aj s asistenciami podľa vzorca: `(Kills + Assists) / Deaths`
- **Kills per minute (KPM)** - Počet zabití za minútu hry, podľa vzorca: `Kills / Duration`
- **Action per minute (APM)** - Počet akcií za minútu hry, podľa vzorca: `(Kills + Assists) / Duration`
- **Performance score** - Celkové skóre podľa načítaných bodov podľa vstupov. Ku vypočítanému skóre hra podľa
  definovanej tabuľky (viď _Rank System_) priradí rank/stupeň schopností hráča.

#### Výpočet celkového skóre:

Celkové skóre sa vypočíta podľa nasledujúceho vzorca:

```text
Performance Score = (KDA × 10) + (KPM × 30) + Headshots × 2 + MVP bonus: +20 - Team Kills × 50
```

Na základe celkového skóre je priradení hráčovi rank/stupeň podľa nasledovnej stupnice:

**Rank System**:

- < 0: Noob
- 0-20: Iron
- 21-40: Bronze
- 41-60: Silver
- 61-75: Gold
- 76-85: Platinum
- 86-92: Diamond
- 93-97: Master
- 98-100: Grandmaster
- \> 100: Godlike

### Výstup

Program po výpočte štatistík vypíše tieto metriky na obrazovku (konzolu/terminál) pre používateľa v nasledujúcom
formáte:

```text
====== GAMING STATS ======
Kills:           <číslo na vstupe>
Deaths:          <číslo na vstupe>
Assists:         <číslo na vstupe>
Duration:        <číslo na vstupe> min
Headshots:       <číslo na vstupe>
Team Kills:      <číslo na vstupe>
MVP:             <TRUE ak je argument --mvp prítomný>
--------------------------
K/D:             <vypočítaná K/D hodnota>
KDA:             <vypočítaná KDA hodnota>
KPM:             <vypočítaná KPM hodnota>
APM:             <vypočítaná APM hodnota>
Performance:     <počet celkového skóre>/100
Rank:            <rank získaný na základe celkového skóre>
==========================
```

Vo formáte znázorňuje text medzi znakmi `<` a `>` inštrukciu aká hodnota sa tam má zobraziť. Riadky zobrazujúce hodnotu
nepovinných argumentov sa nemajú zobraziť ak ich hodnota nie je zadaná.

#### Príklad výstupu:

```text
====== GAMING STATS ======
Kills:           7
Deaths:          4
Assists:         10
Duration:        35 min
Headshots:       2
--------------------------
K/D:             1.75
KDA:             4.25
KPM:             0.20
APM:             0.49
Performance:     52.50/100
Rank:            Silver
==========================
```

## Implementácia

V rámci implementácie môžte použiť všetky štandardné funkcie knižnice jazyka C, v štandarde C17. Kód musí byť
skompilovateľný základnou inštaláciou programu **GCC**, takže pozor na Windows/Mac špecifické kompilátory.

Funkcionalitu programu rozdelte do niekoľkých funkcií, ktoré následne použijete v programe. V zdrojovom kóde programu
by teda mali byť definované minimálne 4 funkcie (ideálne viac):

- main funkcia programu
- vypísanie pomocného text
- výpočet metrík štatistiky
- výpočet celkového skóre a rankingu

Program implementujte v jednom súbore _main.c_, ktorý musí byť umiestnený v priečinku _src_ v tomto repozitáry. Ak je
zdrojový súbor umiestnený na inom mieste, alebo bude nazvaný iným menom, nebude braný pri kompilácii do úvahy, a teda
ani pri hodnotení.

Pri spracovaní vstupov sa môžte inšpirovať
článkom [Práca s argumentami programu v jazyku C](https://zapr.interes.group/guides/program_arguments/#spracovanie-prep%c3%adna%c4%8dov-flags)
na stránke predmetu, alebo inými technikami uvedených na internete. Pre pokročilejších, pre spracovanie argumentov môžte
použiť aj funkciu `getopt_long` z knižnice `getopt.h`. Dokumentáciu nájdete
napríklad [tu](https://sourceware.org/glibc/manual/2.42/html_node/Getopt-Long-Options.html)
alebo [tu](https://linux.die.net/man/3/getopt_long).

Pri implementácii si môžte vypomáhať s AI nástrojmi, pre inšpiráciu, riešenie problémov, či testovanie avšak **je prísne
zakázané priame generovanie kódu vypracovania zadania**, či kopírovanie väčších častí kódu z AI či internetu. Táto práca
je ukážkov vašich schopností a vedomostí programovania nie definovania promptu do AI.

### Kompilácia

Pre testovanie je možné kód skompilovať príkazom:

```bash
gcc -std=c17 -o bin/gamestats -Wall -Wextra src/main.c
```

Kompilátor vytvorí spustený program v priečinku _bin_ v repozitáry.

### Git

Zdrojový kód tohto projektu je manažovaný verziovacím systémom Git. Pomocou Gitu je toto vypracovanie zadania aj
odovzdané. Pre oboznámenie práce s Gitom si prečítajte tento
článok [Git pre začiatočníkov](https://zapr.interes.group/guides/git-for-beginners/) alebo akýkoľvek iný tutoriál na
internete.

Pre kontrolu kompilácie je v repozitáry nastavená automatizácia cez GitHub Actions pipeline. Pipeline sa
spustí automaticky pri aktualizácii kódu vo vetve `main` (napr. `git push`). GitHub zdrojový súbor `src/main.c`
skompiluje pomocou poslednej verzie kompilátora **GCC** pre štandard jazyka C17. Pipeline následne pokračuje jednoduchým
testom spustenia programu. Spustenie je testované a zaznamenané pomocou
programu [tui-test](https://github.com/microsoft/tui-test) a na konci pipeline je vypísaný výsledok takého testu.
Pipeline vždy testuje posledný commit vo vetve `main` a testuje program s argumentom `--help`. Pre správnu kontrolu
programu musí nápoveda/pomocný text programu obsah slovo "Help".
Pipeline je možné spustiť ľubovoľný počet krát. Spustenie pipeline je možné vidieť v záložke _Actions_ vo vašom
repozitáry zadania.

## Hodnotenie

Zadanie je **ohodnotené 20 bodmi**. Odovzdaný program musí byť skompilovateľný kompilátorom GCC a spustiteľný, inak je
hodnotený 0 bodmi. Pri hodnotení vypracovania zadania sa kontroluje originalita odovzdaného vypracovania medzi všetkými
študentmi a zároveň aj voči AI nástrojom (kód vygenerovaný pomocou ChatGPT, Gemini a Claude Sonnet). Vypracovanie **so
zhodou vyššou ako 80% sú hodnotené 0 bodmi**. Hodnotený je iba kód ku poslednému commitu vo vetve `main`, ktorý bol
urobený do termínu odovzdania.

Vypracovanie bude **podrobené automatizovaným testom**, ktoré budú prevolávať program s definovanými argumentami a
kontrolovať obsah výstupu programu. Je teda veľmi dôležité dodržať špecifikáciu argumentov, ako aj formát výstupu
programu pre používateľa. Výsledky automatizovaných testov budú zverejnené do tohto repozitára do vetvy `feedback`.
V prípade chyby v testoch, budú testy spustené znovu a nový výsledkom zverejnený. Po uplynutí termínu odovzdania
zadania budú definície testov zverejnené a ak v nim nájdete chybu prosím nahláste
ju [sem ako nové GitHub issue](https://github.com/Interes-Group/pevs-zapr2025-zadanie1).

Vypracovanie bude hodnotené aj ručne. Pri hodnotení vypracovania sa bude prihliadať na:

- práca s premennými
- definovanie control flow programu
- definovanie vlastných funkcií a ich použitie
- spracovanie argumentov
    - Kontrola záporných hodnôt
    - Kontrola delenia nulou (0 deaths → K/D = kills)
    - Kontrola neplatných hodnôt argumentov (napr. znak namiesto čísla)
- komunikácia chybového stavu programu používateľovi
- štrukturovanie kódu
- dodržanie špecifikácie zadania

## Odovzdanie

Po prihlásení sa na zadanie 1 cez [GitHub Classroom](https://classroom.github.com/classrooms/62511873-pevs-zapr-2025) 
vám je automaticky vytvorená kópia repozitára, ktorý bude
nastavený ako privátny pre vás na vypracovanie (t.j. máte povolený commit a push do repozitára). Skontrolujte si, či sa
váš repozitár nachádza pod skupinou _Interes-Group_, inak vyučujúci nemajú prístup ku vášmu repozitáru a zadanie sa
nepovažuje za odovzdané. Ak sa vám repozitár nevytvorí ihneď kontaktuje vyučujúceho na MS Teams alebo na univerzitnom
emaily. Je prísne zakázané dávať prístup k vášmu repozitára inému študentovi, alebo osobe, ktorá nie je vyučujúci. V
repozitáry by sa mali vytvoriť dve vetvy `main` a `feedback` a vytvorí sa tzv. pull request z vetvy `main` do vetvy
`feedback`. **Váš kód pushujte (t.j. `git push`) do vetvy `main`**. Hodnotenie vypracovania, ako aj komentár ku kódu,
uvidíte v danom pull requeste. Ak sa vám vetva `feedback` alebo pull request nevytvorí ihneď kontaktuje vyučujúceho na
MS Teams alebo na univerzitnom emaily.

V repozitáry upravujte iba súbory pod priečinkom **src**. Ostatné súbory je zakázané upravovať, predovšetkým súbory pre
kompiláciu, súbory obsahujúce GitHub pipeline (.github) a súbory obsahujúce automatizované testy (priečinok **test**).
Pri zmene týchto súborov môže byť vypracovanie ohodnotené 0 bodmi.

Vypracovanie zadania priebežne commitujte (`git commit`)/pushujte (`git push`) do repozitára vytvoreného GitHubom
pre toto zadanie. Váš kód commitujte/pushujte do vetvy `main`. Hodnotený bude posledný commit/push do termínu odovzdania
vypracovania. Vypracovanie je nutné odovzdať/commitnúť/pushnúť do repozitára **do 16.11.2025 23:59**. Neodovzdanie je
hodnotené 0 bodmi.

V prípade otázok, alebo technických problémov môžete kontaktovať vyučujúcich na MS Teams alebo na univerzitnom emaily.

## ✨ Bonus - Porovnanie hier (+3 body)

Ako bonus môžte implementovať porovnanie štatistík viacerých hier naraz. Vstupy pre jednu hru sú zachované, avšak
je potrebné implementovať nové argumenty `--compare` a `--game` ktoré pracujú so vstupmi pre viacero hier.

Argument `--compare` spustí program v porovnávacom móde a ďalšie argumenty, ktoré bude spracovávať len argumenty
s meno `--game`. Argumentov s prepínačom `--game` musia byť minimálne 2 (aby bolo čo porovnávať). Hodnota argumentu
`--game` je string, ktorý obsahuje vstupy pre jednu hru, ako podľa pôvodnej definície programu. Vstupy ako aj
štatistiky pre jednu hru sú spracované rovnako ako v pôvodnej verzii programu.

Režim porovnania viacerých hier:

```shell script
./gamestats --compare \
  --game "--kills 25 --deaths 10 --assists 15 --duration 35" \
  --game "--kills 30 --deaths 5 --assists 20 --duration 40" \
  --game "--kills 15 --deaths 15 --assists 10 --duration 30"
```

Ako výstup programu v porovnávacom móde vypíšte tabuľku jednotlivých vypočítaných štatistík hier pod seba pre prehľadné
porovnanie. Pod tabuľkou vypíše, ktorá hra získala na najvyššie skóre a teda bola najúspešnejšia a priemerné skóre
za všetky hry.

Ukážka výpisu programu pre tri hry:

```text
GAME | K/D   | KDA   | KPM  | APM  | SCORE  | RANK
  1  | 2.50  | 4.00  | 0.71 | 1.14 | 61.30  | Gold
  2  | 6.00  | 10.00 | 0.75 | 1.25 | 122.50 | Godlike
  3  | 1.00  | 1.67  | 0.50 | 0.83 | 31.70  | Bronze
--------------------------------------------
BEST GAME: #2 (Godlike)
AVG SCORE: 71.83
```

## Testovanie

Program odporúčam otestovať lokálne pomocou rôznej konfigurácie príkazov. Nižšie je uvedených niekoľko príkladov
volania programu a aký výstup by mali dať.

Program odporúčam pravidelne kompilovať aby ste sa vyhli zbytočnému opravovaniu veľkých kusov kódu ak by sa vyskytla
chyba.

**Príklady volaní a očakávané výstupy:**

1. Iba povinné argumenty

```bash
./gamestats --kills 25 --deaths 10 --assists 15 --duration 35
```

```text
====== GAMING STATS ======
Kills:           25
Deaths:          10
Assists:         15
Duration:        35 min
--------------------------
K/D:             2.50
KDA:             4.00
KPM:             0.71
APM:             1.14
Performance:     61.3/100
Rank:            Gold
==========================
```

2. S MVP označením

```bash
./gamestats --kills 30 --deaths 5 --assists 20 --duration 40 --mvp
```

```text
====== GAMING STATS ======
Kills:           30
Deaths:          05
Assists:         20
Duration:        40 min   
MVP:             TRUE
--------------------------
K/D:             6.00
KDA:             10.00
KPM:             0.75
APM:             1.25
Performance:     142.50/100
Rank:            Godlike
==========================
```

3. S headshots argumentom

```bash
./gamestats --kills 25 --deaths 10 --assists 15 --duration 35 --headshots 18
```

```text
====== GAMING STATS ======
Kills:           25
Deaths:          10
Assists:         15
Duration:        35 min
Headshots:       18         
--------------------------
K/D:             2.50
KDA:             4.00
KPM:             0.71
APM:             1.14
Performance:     97.30/100
Rank:            Grandmaster
==========================
```

4. S teamkill penalizáciou

```bash
./gamestats --kills 20 --deaths 8 --assists 12 --duration 30 --teamkills 2
```

```text
====== GAMING STATS ======
Kills:           20
Deaths:          08
Assists:         12
Duration:        30 min       
Team Kills:      02           
--------------------------
K/D:             2.50
KDA:             4.00
KPM:             0.67
APM:             1.07
Performance:     -39.90/100
Rank:            Noob
==========================
```

5. S viacerými voliteľnými argumentmi

```bash
./gamestats --kills 20 --deaths 8 --assists 12 --duration 30 --headshots 15 --mvp
```

```text
====== GAMING STATS ======
Kills:           20
Deaths:          08
Assists:         12
Duration:        30 min
Headshots:       15     
MVP:             TRUE
--------------------------
K/D:             2.50
KDA:             4.00
KPM:             0.67
APM:             1.07
Performance:     110.10/100
Rank:            Godlike
==========================
```

### Automatizované testovanie

Tento repozitár obsahuje aj nastavenie pre automatizované testovanie pomocou nástroje _tui-test_.
Tento program je založený na jazyku Typescript a je spúšťaný pomocou Node.js. Všetky testy a nastavenia sú uchované
v priečinku _test_ a **prísne zakázané ich prípadnú zmenu pushnúť do repozitára na odovzdanie**. Pre tých, ktorý
ovládajú tento jazyk a sú schopný si rozšíriť test suite o vlastné testy pokojne môžu, len ich nikde nezdielajte a
nepushujte do repozitára na GitHube na odovzdanie.

#### Návod pre nastavenie a spustenie testov

##### Prerekvizity:

- Nainštalovaný **Node.js** (verzia 16.6.0 alebo vyššia)
- Nainštalovaný **npm** (Node Package Manager)
- Skompilovaný program `gamestats` v priečinku `bin/`

##### Postup:

1. **Skompilujte program** (ak ste to ešte neurobili):

```shell script
mkdir -p bin
gcc -std=c17 -o bin/gamestats -Wall -Wextra src/main.c
```

2. **Prejdite do priečinka test**:

```shell script
cd test
```

3. **Nainštalujte závislosti**:

```shell script
npm install
```

4. **Spustite testy**:

```shell script
npm test
```

**Alternatívne spustenie:**

Môžete použiť priamo nástroj tui-test:

```shell script
cd test
npx @microsoft/tui-test
```

##### Čo testy kontrolujú:

Testy používajú nástroj **tui-test** od Microsoftu, ktorý:

- Spúšťa váš program s rôznymi argumentami
- Zachytáva výstup programu v termináli
- Porovnáva výstup s očakávanými výsledkami (uložené v `__snapshots__`)
- Overuje formát výstupu a správnosť výpočtov



