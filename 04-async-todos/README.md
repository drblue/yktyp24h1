# 04-async-todos

Detta är en kopia av
[`03-todos`](https://github.com/drblue/yktyp24h1/tree/lesson-2/03-todos) där
jag har installerat [`json-server`](https://github.com/typicode/json-server)
för att appen ska ha en backend.

Jag har också lagt till [`axios`](https://axios-http.com/docs/intro) för att
kunna göra HTTP-anrop till backend:en, men det är upp till dig om du vill
använda `axios` eller `fetch`.

## Uppgiften

Din uppgift är att refaktorera appen till att fungera med REST API:et som ni
kommer åt via `http://localhost:3000` när ni kör `npm run server` ifrån mappen.

**Tänk på att servern måste vara igång för att appen ska fungera!**

REST API:et exponerar resursen `todos` som har följande egenskaper:

- `id` (number)
- `title` (string)
- `completed` (boolean)

Resursen stödjer följande operationer:

- `GET /todos` - returnerar en lista över alla todos
- `GET /todos/:id` - returnerar en enskild todo
- `POST /todos` - skapar en ny todo
- `PUT /todos/:id` - uppdaterar en todo
- `DELETE /todos/:id` - tar bort en todo

## Skapa från början

Om du vill lägga in ändringarna i din egna kod så är här stegen jag gjorde. Du
kan också se ändringarna i commit
[#fae07f9](https://github.com/drblue/yktyp24h1/commit/fae07f97f79b2a2feecf827468c66a450ee1ac3f).

Gör en kopia av din egen `03-todos`:

```bash
cp -R 03-todos 04-async-todos
cd 04-async-todos
npm install json-server@^0.17.4 --save-dev
npm install axios
```

Lägg till följande rad i scripts i package.json:

```json
    "server": "json-server --watch data/db.json --port 3000 --delay 0"
```

Skapa `data/db.json` med följande innehåll:

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Learn basic TypeScript",
      "completed": true
    },
    {
      "id": 2,
      "title": "Learn async TypeScript",
      "completed": false
    },
    {
      "id": 3,
      "title": "Have fun making promises",
      "completed": false
    }
  ]
}
```

## Kör servern

```bash
npm run server
```

## Kör appen

```bash
npm run dev
```
