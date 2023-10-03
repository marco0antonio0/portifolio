// api/exemplo.js
const DatabaseConnection = require("./../../models/connection"); // Ajuste o caminho conforme necessário
const cors = require("cors");
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const db = new DatabaseConnection();
  const { titulo } = req.query;
  console.log(titulo);
  try {
    await db.connect();
    console.log("Connected to the database");

    const sql = `SELECT * FROM post WHERE titulo = "${titulo}"`; // query SQL atribuida a variavel
    const results = await db.query(sql); // query SQL sendo executada
    console.log("Query results:", results); // em caso de sucesso ira print a mensagem results
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Error:", error); // caso falhe irar printar o erro
    res.status(400).json({ data: "erro" + error });
  } finally {
    // Certifique-se de fechar a conexão quando terminar
    await db.close(); // por fim ele encerra a conexão
  }
}
