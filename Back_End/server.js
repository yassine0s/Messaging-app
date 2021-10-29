const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "logging",
});
app.post("/register", (req, res) => {
  const Name = req.body.Name;
  const Email = req.body.Email;
  const Password = req.body.Password;

  db.query(
    "INSERT INTO authentication (Name,Email,Password) VALUES (?,?,?)",
    [Name, Email, Password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;
  db.query(
    "Select * from authentication where Email = ? and Password = ?",
    [Email, Password],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length>0){
        res.send(result);
      } else res.send({ message: "wrong" });
    }
  
  );
});
app.listen(3001, console.log("Server started on PORT 3001"));
