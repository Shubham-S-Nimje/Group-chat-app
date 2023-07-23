const expresss = require("express");
const router = expresss.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/login" method="POST" onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input id="username" type="text" name="title"/> <button type="submit">Add</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
