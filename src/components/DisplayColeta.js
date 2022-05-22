import React from "react"
var XMLHttpRequest = require("xhr2")

function getData() {
  var data = "a"
  var url =
    "https://demo.thingsboard.io:443/api/plugins/telemetry/DEVICE/b3f21300-b683-11ec-942a-51543ec1dbaf/values/timeseries?keys=temperatura%2Cumidade"

  var xhr = new XMLHttpRequest()
  xhr.open("GET", url)

  xhr.setRequestHeader("accept", "application/json")
  xhr.setRequestHeader(
    "X-Authorization",
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YWx2c2FyaUBnbWFpbC5jb20iLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInVzZXJJZCI6IjUxMzk1ZmYwLWI2N2ItMTFlYy05NDJhLTUxNTQzZWMxZGJhZiIsImZpcnN0TmFtZSI6Ik1hbmt5IiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiNTA3YmI1NDAtYjY3Yi0xMWVjLTk0MmEtNTE1NDNlYzFkYmFmIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjUzMTY2NDE1LCJleHAiOjE2NTQ5NjY0MTV9.jnW8MaohFT84Q_dJayTblW7zXSkHseufM2MW5YyDQjJP8EP6eYr5vGUN3TfWvHYDchfChm7AWcq8BfSXJgFaeQ"
  )

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //console.log(xhr.status)
      console.log(JSON.parse(xhr.responseText).temperatura[0].value)
      data = JSON.parse(xhr.responseText).temperatura[0].value
    }
  }

  xhr.send()

  return data
}

function DisplayColeta() {
  return <div>{getData()}</div>
}

export default DisplayColeta
