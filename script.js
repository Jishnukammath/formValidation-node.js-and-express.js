const express= require("express");
const app=express();

app.use(express.static("view"));

const PORT=process.env.PORT || 3001;
app.listen(PORT);