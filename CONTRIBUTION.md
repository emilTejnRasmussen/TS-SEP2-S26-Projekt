# Contributing Guide

Denne guide beskriver, hvordan vi arbejder med Git og GitHub i projektet.

Projektet består af følgende mapper:

* `backend/` → Java backend (IntelliJ)
* `frontend/` → Web frontend
* `docs/` → Dokumentation

Alle arbejder i **samme Git repository**, som ligger i projektets root.

---

# Første gang (Setup)

1. Klon repository:

```
git clone https://github.com/emilTejnRasmussen/TS-SEP2-S26-Projekt.git
```

2. Gå ind i projektmappen:

```
cd TS-SEP2-S26-Projekt
```

3. Åbn projektet i din IDE:

Backend (IntelliJ):

* Åbn mappen `backend`

Frontend (WebStorm / VSCode):

* Åbn mappen `frontend`

---

# Workflow (hver gang du arbejder)

## 1. Opdater main

Før du starter arbejde, skal du hente den nyeste version:

```
git checkout main
git pull
```

---

## 2. Opret en feature branch

Alle nye ændringer laves i en **feature branch**.

```
git checkout -b feature/<description>
```

Eksempler:

```
feature/add-course-api
feature/login-page
feature/create-course-form
fix/nullpointer-course-service
```

Branch-navnet skal kort beskrive hvad du arbejder på.

---

## 3. Lav ændringer

Arbejd på din feature.

Commit ofte:

```
git add .
git commit -m "Kort beskrivelse af ændringen"
```

Eksempel:

```
git commit -m "Add course API endpoint"
```

---

## 4. Push din branch

Når du vil dele dit arbejde:

```
git push -u origin feature/<description>
```

---

# Pull Request (PR)

Når din feature er færdig:

1. Opret en **Pull Request** på GitHub
2. Skriv en kort beskrivelse af ændringen
3. Tilføj mindst én reviewer

Eksempel på beskrivelse:

```
Adds API endpoint for creating courses
Includes validation and service layer
```

---

# Review og merge

Når PR'en er godkendt:

1. Merge til `main`
2. Slet branchen på GitHub

Slet også din lokale branch:

```
git branch -d feature/<description>
```

---

# Efter merge

Opdater din lokale version:

```
git checkout main
git pull
```

---

# Gode Git vaner

Commit små ændringer ofte.

Gode commit beskeder:

```
Add course controller
Implement course service
Fix null pointer in course repository
Add login form UI
```

Undgå commits som:

```
stuff
fix
changes
```

---

# Nyttige Git kommandoer

Se hvilken branch du er på:

```
git branch
```

Se ændringer i projektet:

```
git status
```

---

# Hvis du er i tvivl

Spørg i gruppen før du merger noget til `main`.
