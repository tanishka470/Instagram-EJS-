const express = require("express");
const app = express();
const data = require("./data.json");

app.set("view engine", "ejs");
app.use(express.static("public"));

// Dynamic route for profile
// Example: /cats or /dogs
app.get("/:username", (req, res) => {
    console.log("Request received for profile");
    const username = req.params.username;
    const userData = data[username];

    if (!userData) {
        return res.send("Profile not found ❌");
    }

    res.render("profile", { user: userData });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
