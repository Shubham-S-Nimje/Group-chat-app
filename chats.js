const expresss = require("express");
const fs = require("fs");
const router = expresss.Router();
let arr = "";
router.get("/", (req, res, next) => {
  const displayMsg = fs.readFileSync("chats.txt");
  // console.log(displayMsg.toString())
  res.send(
    `${displayMsg.toString()} <form action="/chats" method="POST" 
        onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="title"/> 
        <input type="hidden" name="username" id="username"/> 
        <button type="submit">Submit</button></form>`
  );
});

router.post("/chats", (req, res, next) => {
  // console.log(req.body.title);
  console.log('username',req.body.username);
  arr = arr + req.body.username + ":" + req.body.title + `</br>`;
  fs.writeFileSync("chats.txt", arr);
  res.redirect("/");
});

module.exports = router;
