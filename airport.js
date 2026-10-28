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

const addAirport = (code, name, country, isInternational) => {
  return new Promise((resolve, reject) => {
    db.run(
      insertStatement,
      [code, name, country, isInternational],
      (err) => {
        if (err) reject(err)
        else resolve()
      }
    )
  })
}

const readAirport = (code) => {
  return new Promise((resolve, reject) => {
    db.get(selectOneStatement, code, (err, airport) => {
      if (err) reject(err)
      else resolve(airport)
    })
  })
}

const updateAirport = (code, name, country, isInternational) => {
  return new Promise((resolve, reject) => {
    db.run(
      updateStatement,
      [name, country, isInternational],
      (err) => {
        if (err) reject(err)
        else resolve()
      }
    )
  })
}

const deleteAirport = (code) => {
  return new Promise((resolve, reject) => {
    db.run(deleteStatement, code, (err) => {
      if (err) reject (err)
      else resolve()
    })
  })
}

const searchAirport = (country) => {
  return new Promise((resolve, reject) => {
    let finalStatement = selectManyStatement
    if (country) finalStatement += " WHERE country = ?"
    db.all(
      finalStatement,
      country,
      (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      }
    )
  })
}

module.exports = {
  addAirport,
  readAirport,
  updateAirport,
  deleteAirport,
  searchAirport
}