# Tromboler
A simple app for a test

### How to run
#### Locally:
First copy both `.example.env` to `.env`:
```
cp ./frontend/.example.env ./frontend/.env
cp ./backend/.example.env ./backend/.env
```

Change the `MONGODB_URL` variable in `backend/.env` to `127.0.0.1`:

Then run in both folders:
```
npm start
```

Keep in mind, you should have mongodb installed in your system.

#### Docker:
First copy both `.example.env` to `.env`:
```
cp ./frontend/.example.env ./frontend/.env
cp ./backend/.example.env ./backend/.env
```

Then run:
```
docker compose -f frontend/docker-compose.yml -f backend/docker-compose.yml up
```

Then go to `localhost:8080`
