import http from "http";
import GUN from "gun";

const server = http.createServer().listen(8080);
GUN({ web: server });
