const express = require("express");
const app = express();
const indexRouter = require("./routers/index");
const { corsWithOptions } = require("./config/cors");
const db = require("./models");

(async () => {
  await db.sequelize.sync();
})();

app.use(corsWithOptions);
app.use(express.json());
app.use("/api", indexRouter);

app.listen(process.env.PORT || "3000", () => {
  console.log("Le serveur est à l’écoute sur le port 3000");
});
