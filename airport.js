const db = require("./db")

const insertStatement = `
  INSERT INTO airport (
    code, name, country, isInternational)
  VALUES (?, ?, ?, ?)
`

const selectOneStatement = "SELECT * FROM airport WHERE code = ?"

const updateStatement = `
  UPDATE airport SET
    name = (?), country = (?), isInternational = (?)
  WHERE code = (?)
`

const deleteStatement = "DELETE FROM airport WHERE code = ?"

const selectManyStatement = "SELECT * FROM airport"