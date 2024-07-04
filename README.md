# Welcome to GitHub Desktop!

This is your README. READMEs are where you can communicate what your project is and how to use it.

Write your name on line 6, save it, and then head back to GitHub Desktop.
Sara Ulusoy


# Desktop Tutorial

# Filmlista

Detta projekt är en enkel React-applikation för att hantera en lista av filmer. Användaren kan lägga till, ta bort och sortera filmer baserat på titel eller betyg.

## Installation

Följ stegen nedan för att installera och köra projektet lokalt:

1. Klona repositoriet:
    ```bash
    git clone https://github.com/ditt-användarnamn/filmlista.git
    cd filmlista
    ```

2. Installera nödvändiga npm-paket:
    ```bash
    npm install
    ```

3. Starta utvecklingsservern:
    ```bash
    npm start
    ```

4. Bygg projektet för produktion:
    ```bash
    npm run build
    ```

## Användning

När utvecklingsservern är igång kan du öppna applikationen i din webbläsare på 'http://localhost:9002/' (eller annan port som anges i terminalen).

### Funktioner

- **Lägg till en film**: Fyll i titeln och välj ett betyg i formuläret, klicka sedan på "Spara film".
- **Ta bort en film**: Klicka på soptunneikonen bredvid filmen du vill ta bort.
- **Sortera filmer**: Använd knapparna "Alfabetisk ordning" och "Betygsordning" för att sortera filmerna.

### Projektstruktur
├── dist/ # Byggd mapp
├── node_modules/ # npm-paket
├── src/ # Källkod
│ ├── components/ # React-komponenter
│ │ └── Movie.js
│ ├── images/ # Bildfiler
│ │ ├── star.png
│ │ └── delete.png
│ ├── assignment_3.js # Huvudkomponenten
│ └── index.html # HTML-fil för Webpack
├── .gitignore
├── package.json
├── package-lock.json
├── README.md # Denna fil
└── webpack.config.js # Webpack-konfiguration


### Viktiga beroenden

- React: En JavaScript-bibliotek för att bygga användargränssnitt.
- Webpack: En modulbuntare för JavaScript-applikationer.
- Babel: En JavaScript-kompilator som används för att omvandla modern JavaScript till en version som kan köras i äldre webbläsare.





