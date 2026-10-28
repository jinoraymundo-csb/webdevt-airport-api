const db = require("./db")

const insertStatement = `
  INSERT INTO airport (
    code, name, country, isInternational)
  VALUES (?, ?, ?, ?)
`