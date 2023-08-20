import axios from "axios";

export const brasilAbertoApi = axios.create({
  baseURL: "https://brasilaberto.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    Authorization:
      "DBUT7HaZfpf9h7if0hAJux4altgARf9QNxnb4S0kwW87iUa4C06e50QugVuluyXW",
  },
});
