# Cloud Radar Setup

## 1. Wymagania
- Zainstalowany **Docker Desktop**.
- Projekt C# skompilowany z nowymi zmianami.

## 2. Uruchomienie Serwera (Docker)
1. Otwórz terminal (PowerShell lub CMD) w folderze `CloudRadarServer`.
2. Uruchom komendę:
   ```bash
   docker-compose up --build -d
   ```
3. Serwer będzie dostępny pod adresem: [http://localhost:3000](http://localhost:3000)

## 3. Uruchomienie Cheata
1. Skompiluj i uruchom swój projekt C#.
2. Cheat automatycznie zacznie wysyłać dane o pozycjach graczy do serwera.

## 4. Korzystanie z Radaru
1. Otwórz przeglądarkę na dowolnym urządzeniu w tej samej sieci (lub na drugim monitorze).
2. Wejdź na `http://localhost:3000`.
3. Zobaczysz "kropki" reprezentujące graczy.

> [!TIP]
> Aby radar wyglądał profesjonalnie, wrzuć obrazek mapy (np. `de_dust2_radar.png`) do folderu `public` i ustaw go jako tło w `index.html`. Musisz też dopasować `scale` w `index.html`, aby kropki pokrywały się z mapą.
