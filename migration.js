const sqlite = require('sqlite3');
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS Employee");
  db.run("CREATE TABLE Employee ( " +
          "id INTEGER PRIMARY KEY, " +
          "name TEXT NOT NULL, " +
          "position TEXT NOT NULL, " +
          "wage INTEGER NOT NULL, " +
          "is_current_employee INTEGER DEFAULT 1)",
        error => {
          if(!error) {
            console.log("Successfully created Table Employee.");
          } else {
            console.log("Error creating Table Employee");
          }
        });

  db.run("DROP TABLE IF EXISTS Timesheet");
  db.run("CREATE TABLE Timesheet ( " +
          "id INTEGER PRIMARY KEY, " +
          "hours INTEGER NOT NULL, " +
          "rate INTEGER NOT NULL, " +
          "date INTEGER NOT NULL, " +
          "employee_id INTEGER NOT NULL, " +
          "FOREIGN KEY(employee_id) REFERENCES Employee(id))",
        error => {
          if(!error) {
            console.log("Successfully created Table Timesheet.");
          } else {
            console.log("Error creating Table Timesheet");
          }
        });

  db.run("DROP TABLE IF EXISTS Menu");
  db.run("CREATE TABLE Menu ( " +
          "id INTEGER PRIMARY KEY, " +
          "title TEXT NOT NULL)",
        error => {
          if(!error) {
            console.log("Successfully created Table Menu.");
          } else {
            console.log("Error creating Table Menu");
          }
        });

  db.run("DROP TABLE IF EXISTS MenuItem");
  db.run("CREATE TABLE MenuItem ( " +
          "id INTEGER PRIMARY KEY, " +
          "name TEXT NOT NULL, " +
          "description TEXT, " +
          "inventory INTEGER NOT NULL, " +
          "price INTEGER NOT NULL, " +
          "menu_id INTEGER NOT NULL, " +
          "FOREIGN KEY(menu_id) REFERENCES Menu(id))",
        error => {
          if(!error) {
            console.log("Successfully created Table MenuItem.");
          } else {
            console.log("Error creating Table MenuItem");
          }
        });
});
