# Template user crud using firebase auth (Realised in 2024).

## Steps

If you've just started your project, copy and paste the entire file.

Else...

### 1. Install packages you need

- express

- firebase

- dotenv

- express-session

`npm express firebase dotenv express-session`

### 2. Add .use in the file you use to launch your server

_To use data through the URL_

`app.use(express.json());`

`app.use(express.urlencoded({ extended: true }));`

### 3. Routes

Import differents routes there are in router.js

### 4. Controllers

Import `crudUser` folder in your controller folder. If you don't have one, adapt paths or create one !

### 5. Services

Import `services` folder in your project root.

### 6. Firebase configuration

Rename `.env.exemple`and add your own informations

That's it ! Enjoy my friend
# twitch-tools
