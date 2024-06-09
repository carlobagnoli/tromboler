# Tromboler
A simple app for a test

### Initialize the database
To Initialize the database you can run:
```
mongosh -f mongo.init.js
```

If you're running the app with docker, it's the same command, just make sure you run it after the docker is up.

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

Then run in each folder:
```
docker compose up
```

Then go to `localhost:8080`
