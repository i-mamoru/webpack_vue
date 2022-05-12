const express = require('express')
const path  = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const DIST_DIR = path.join(__dirname,'/public')
const HTML_FILE = path.join(DIST_DIR,'index.html')




app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(DIST_DIR))
  .use((_req, res, next) => {
    res.header("Access-Controle-Allow-Origin", "*");
    res.header("Access-Controle-Allow-Methoxds", "*");
    res.header("Access-Controle-Allow-Headers", "*");
    next()
  })

  .get('*', (_req, res) => {
    res.sendFile(HTML_FILE)
  })

  .get('/api', (_req, res) => {
    // res.send(JSON.stringify(users))
  })

  .listen(PORT, () => {
    console.log(` \x1b[36m
      ╭──────────────────────────────────────────────╮
      │                                              │
      │                                              │
      │            http:/localhost:${PORT}              │
      │            ${new Date().toLocaleString()}                │
      │                                              │
      ╰──────────────────────────────────────────────╯
      \x1b[0m`);
  })