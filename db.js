const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./airport.db")

const createStatement = `
  CREATE TABLE IF NOT EXISTS airport(
    code TEXT NOT NULL PRIMARY KEY check(length(code) = 3),
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    isInternational INT DEFAULT 1 check(isInternational IN (0, 1))
  )
`
db.run(createStatement)

module.exports = db