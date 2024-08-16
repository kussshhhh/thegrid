const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database('./database.sqlite', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the SQLite database.');
    });

    this.init();
  }

  init() {
    this.db.serialize(() => {
      this.db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      )`);

      this.db.run(`CREATE TABLE IF NOT EXISTS components (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        author TEXT,
        rating TEXT,
        price TEXT,
        component TEXT,
        websiteUrl TEXT
      )`);
    });
  }

  getUser(username) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  createUser(username, password) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
        if (err) reject(err);
        resolve(this.lastID);
      });
    });
  }

  getAllComponents() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM components', [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  createComponent(component) {
    const { name, description, author, rating, price, component: componentCode, websiteUrl } = component;
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO components (name, description, author, rating, price, component, websiteUrl) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, description, author, rating, price, componentCode, websiteUrl],
        function(err) {
          if (err) reject(err);
          resolve(this.lastID);
        }
      );
    });
  }
}

module.exports = new Database();