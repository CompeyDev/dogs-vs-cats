  const axios = require('axios');
  const express = require('express');
  const app = express();
  let img;
  
  app.listen(3000, () => console.log("Server listening on port 3000!"));
  
  /** app.get("/", (req, res) => res.send(`<head><meta property="og:image" content="${img}"></head>`)); */
 

  app.get("/", (req, res) => res.send(`<html><head><meta property="og:image" content="${img}"></head><body><img src='${img}' width='1000'></img></body></html>`));
  
  async function fetch(){
    const res = await axios.get('http://aws.random.cat/meow');
    img = res.data.file;
    console.log("Fetched new cat from", img)
  }
  
  setInterval(fetch, 1000);