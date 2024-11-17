
# lazyAiVerse

Welcome to **lazyAiVerse**, a simple project that uses **Express** for server-side functionality, **SQLite3** for database management, and other essential dependencies like **body-parser** and **cors** to handle HTTP requests and ensure cross-origin resource sharing.


# 1. Install Dependencies

Install the required Node.js dependencies:

```bash
npm init -y

npm install express sqlite3 body-parser cors
```

This will initialize the project with a `package.json` file and install the necessary packages:
- **express**: Web framework for Node.js.
- **sqlite3**: Lightweight SQL database engine for storing data.
- **body-parser**: Middleware to parse incoming request bodies.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.

## Running the Server

Once the dependencies are installed, you can run the server:

### 1. Start the Server

```bash
node server/app.js
```

### 2. Access the Application

After the server starts, open your browser and go to:

```
http://localhost:3000
```

You should now see the application running locally on your machine.

## Troubleshooting

- **If you encounter any issues**, ensure that all dependencies are correctly installed by running `npm install` again.
- **Database Issues**: Ensure the SQLite3 database file is properly created and accessible in the `server/db` folder.

## Project Structure

Here's a brief overview of the project structure:

```
project/
├── node_modules
├── public/
│   ├── css/
│   │   └── styles.css
|   |   └── search.css
|   |   └── landingcss.css
│   ├── js/
│   │   ├── script.js
│   │   └── auth.js
│   │   └── search.js
│   ├── images/
│   └── landing.html
├── server/
│   ├── app.js
│   ├── db/
│   │   └── (empty directory; SQLite will create `database.sqlite`)
│   ├── routes/
│   │   └── authRoutes.js
└── package.json
└── package-lock.json
└── .gitignore

```
