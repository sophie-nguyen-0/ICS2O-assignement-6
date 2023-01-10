// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-assignement-6/sw.js", {
    scope: "/ICS2O-assignement-6/",
  })
}

const quote = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("quote").innerHTML =
      '<h4> anime: ' + data.anime + '</h4> <br> <h4> " ' + data.quote + ' " </h4> <br> <h4> - ' + data.character + '</h4>'
  } catch (error) {
    console.log(error)
  }
}

quote(
  "https://animechan.vercel.app/api/random"
)

