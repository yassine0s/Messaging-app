const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const io = require("socket.io")(3000);
io.on("connection", (socket) => {
  const Email = socket.handshake.query.Email; //keep same Email everytime when refreshing
  socket.join(Email);
  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(Email);
      socket.braodcast
        .to(recipient)
        .emit('recieve-message', {
          recipients: newRecipients,
          sender: Email,
          text,
        });
    });
  }); //everytime message is sent it will go through this send-message
});
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
      if (result.length > 0) {
        res.send(result);
      } else res.send({ message: "wrong" });
    }
  );
});
app.post("/NewContact", (req, res) => {
  const Email = req.body.Email;
  const Name = req.body.Name;
  db.query(
    "Select * from authentication where Email = ? and Name = ?",
    [Email, Name],
    (err, result) => {
      if (err) res.send({ err: err });
      if (result.length > 0) {
        res.send(result);
      } else res.send({ message: "wrong" });
    }
  );
});
app.listen(3001, console.log("Server started on PORT 3001"));
