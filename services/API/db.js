const Airtable = require("airtable");
require("dotenv").config();

const apiKey = process.env.BDD_KEY;
const baseId = process.env.BDD_BASE_ID;

const base = new Airtable({ apiKey }).base(baseId);
module.exports = base;
