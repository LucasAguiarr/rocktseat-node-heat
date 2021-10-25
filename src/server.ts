import { serverHttp } from "./app";
const port = process.env.APP_API_PORT;

serverHttp.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
