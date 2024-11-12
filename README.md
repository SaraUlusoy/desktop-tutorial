Filmlista
Detta projekt är en enkel React-applikation för att hantera en lista av filmer. Användaren kan lägga till, ta bort och sortera filmer baserat på titel eller betyg.

Installation
Följ stegen nedan för att installera och köra projektet lokalt:

1. Klicka på < >Code och välj HTTPS

2. Kopiera URL: https://github.com/SaraUlusoy/desktop-tutorial.git

3. Öppna Github desktop

4. Välj " Clone a Respository from the internet

5. Välj URL och sedan klistra in url : https://github.com/SaraUlusoy/desktop-tutorial.git, därefter klickar du på clone. 

2. Installera nödvändiga npm-paket (du behöver bara göra detta en gång): npm install

3. Starta utvecklingsservern: npm start

4. Bygg projektet för produktion (om du vill distribuera en optimerad version): npm run build

Användning
När utvecklingsservern är igång kan du öppna applikationen i din webbläsare på http://localhost:9002/ (eller annan port som anges i terminalen).

Funktioner
Lägg till en film: Fyll i titeln och välj ett betyg i formuläret, klicka sedan på "Spara film".
Ta bort en film: Klicka på soptunneikonen bredvid filmen du vill ta bort.
Sortera filmer: Använd knapparna "Alfabetisk ordning" och "Betygsordning" för att sortera filmerna.

Projektstruktur
├── dist/                # Byggd mapp för produktion
├── node_modules/        # npm-paket
├── src/                 # Källkod
│   ├── components/      # React-komponenter
│   │   └── Movie.js     # Komponent för att visa en enskild film
│   ├── images/          # Bildfiler
│   │   ├── star.png     # Stjärnikon för betyg
│   │   └── delete.png   # Soptunneikon för att ta bort filmer
│   ├── assignment_3.js  # Huvudkomponenten för applikationen
│   └── index.html       # HTML-fil för Webpack
├── .gitignore           # Filer som ska ignoreras av Git
├── package.json         # Projektets beroenden och scripts
├── package-lock.json    # Låser beroendeversionerna för att säkerställa konsekventa byggningar
├── README.md            # Denna fil
└── webpack.config.js    # Webpack-konfiguration för att bygga projektet

Viktiga beroenden
* React: Ett JavaScript-bibliotek för att bygga användargränssnitt.
* Webpack: En modulbuntare för JavaScript-applikationer, som hanterar både JavaScript och andra tillgångar som CSS och bilder.
* Babel: En JavaScript-kompilator som används för att omvandla modern JavaScript till en version som kan köras i äldre webbläsare.

Extra beroenden:
* css-loader: Hanterar CSS-importer i JavaScript.
* style-loader: Inkluderar CSS direkt i DOM.
* file-loader: Hanterar import och export av bildfiler (som stjärnor och delete-knappen).
* html-webpack-plugin: Genererar HTML-filen och inkluderar automatiskt de bundlade JavaScript-filerna.







