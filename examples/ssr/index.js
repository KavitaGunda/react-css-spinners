const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const express = require('express')
const { Ellipsis, Ring, Ripple } = require('react-css-spinners')

const PORT = 3000
const app = express()

app.get('*', (req, res) => {
  const el = createElement(Fragment, null, createElement(Ellipsis), createElement(Ring), createElement(Ripple))
  const html = renderToString(el)
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body{
      background-color: grey;
    }
  </style>
</head>
<body >
  ${html}
</body>
</html>`)
})

app.listen(PORT, () => console.log('http://localhost:3000'))
