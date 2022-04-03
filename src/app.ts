import express from "express";
import { routerCommon } from "./api/common/router";

const app = express();
const port = 3000;

app.use("/common", routerCommon);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
