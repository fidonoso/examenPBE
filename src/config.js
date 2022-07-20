import { config } from "dotenv";
config();

const configurations = {
  PORT: process.env.PORT || 3000,
  MYSQL_HOST: process.env.MYSQL_HOST ||"localhost",
  MYSQL_DATABASE: process.env.MYSQL_DB || "cft",
  MYSQL_USER: process.env.MYSQL_USER || "root",
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "13991987Ft"

};
export default configurations;


/////parar docker
// const configurations = {
//   PORT: process.env.PORT || 3000,
//   POSTGRES_HOST: process.env.POSTGRES_HOST || "postgres", 
//   POSTGRES_DATABASE: process.env.POSTGRES_DB || "bd_sequelize",
//   POSTGRES_USER: process.env.POSTGRES_USER || "root", 
//   POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "root" 
// };
// export default configurations;