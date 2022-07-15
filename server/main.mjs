import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const DIRNAME = fileURLToPath(path.dirname(import.meta.url))
const app = express()

app.use(express.static(path.resolve(DIRNAME, 'static')))
app.listen(7777)
