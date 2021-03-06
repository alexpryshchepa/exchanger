import React from 'react'

export default function GetRates(base, cb, error) {
  let url = 'http://api.fixer.io/latest?base=' + base;
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        let data = response.json();
        return data;
      } else {
        error();
      }
    }).then(function (data) {
      let names = [];
      for (let key in data.rates) {
        names.push(String(key))
      }
      cb(data, names);
    })
}