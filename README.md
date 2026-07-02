# 🌲 Mini-Hub: Frankreich (Ardennen & Argonnen Edition)

Willkommen beim **Mini-Hub Projekt**! Dies ist eine moderne, interaktive React-Applikation im eleganten "Glassmorphismus"-Design, eingebettet in die mystische, waldige Atmosphäre der französischen Ardennen und Argonnen.

Mit dieser App kannst du Links, Sehenswürdigkeiten, Artikel und Bücher zentral an einem Ort sammeln, verwalten und filtern.

---

## ✨ Features

### 📦 Kernfunktionen (CRUD)
- **Erstellen:** Füge eigene Items (Titel, URL und Tags) über das Formular hinzu.
- **Lesen/Suchen:** Durchsuche deine Sammlung in Echtzeit mit der Textsuche.
- **Aktualisieren (Bearbeiten):** Ändere Titel, Link und Tags bestehender Items mit dem Inline-Editor.
- **Löschen & Mehrfachauswahl:** Lösche einzelne Items oder nutze den **Auswahl-Modus**, um mehrere Karten zu markieren und in einem Rutsch zu entfernen.
- **Favoriten:** Markiere wichtige Items mit einem Stern.

### 🏷️ Dynamische Tag-Filter
Alle vergebenen Tags deiner Items werden automatisch ausgelesen und als klickbare Filter-Buttons dargestellt. Ein Klick auf `#ardennen` oder `#buch` zeigt dir sofort nur die passenden Ergebnisse.

### 💾 Lokale Speicherung
Dank eines eigens entwickelten Custom-Hooks (`useLocalStorageState`) gehen deine Daten nie verloren. Alles wird lokal in deinem Browser (LocalStorage) gespeichert und ist beim nächsten Öffnen sofort wieder da.

### 🔌 API Integrationen
(Aktuell sind keine externen APIs eingebunden. Die Anwendung läuft komplett lokal.)

### 🎨 Design (Glassmorphismus)
Das UI-Design setzt auf halbtransparente, "gläserne" Container mit dezenten Blur-Effekten (`backdrop-filter`). Ein hochauflösendes, dunkles Tannenwald-Hintergrundbild sorgt dabei für einen extrem hochwertigen, mystischen und fokussierten "Dark Mode" Look.

---

## 🛠️ Technologien

- **React 18** (Vite als Build-Tool)
- **JavaScript (ES6+)**
- **Vanilla CSS** (für das Glassmorphism-Design, CSS-Variablen und Responsive Layouts)
- **APIs:** 
  - `de.wikipedia.org/w/api.php`
  - `openlibrary.org/search.json`

---

## 🚀 Lokale Installation & Start

1. **Repository klonen / herunterladen**
   Gehe in den Projektordner deines Terminals:
   ```bash
   cd kleines_Projekt
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   Die App ist nun unter `http://localhost:5173` (oder einem ähnlichen Port) in deinem Browser erreichbar!

---

## 💡 Wie nutze ich die App?

1. **Eigene Links speichern:** Nutze das linke Formular "Neues Item", gib einen Namen, eine URL (optional) und Tags (kommagetrennt) ein.
2. **Bücher finden:** Scrolle in der linken Leiste nach unten zur "Buch-Suche", wähle eine Sprache, suche nach einem Buch und klicke auf `+`.
3. **Regionen erkunden:** Klicke in der Seitenleiste auf "Ardennen-Highlights laden", um deine Liste mit echten Sehenswürdigkeiten zu füllen.
4. **Aufräumen:** Klicke oben auf den Button **"Auswählen"**, markiere die Checkboxen der Karten, die du nicht mehr brauchst, und klicke auf **"X ausgewählt Löschen"**.

---

*Erstellt mit ❤️ als interaktives React-Projekt.*
