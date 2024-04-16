const axios = require("axios");
const express = require("express");
const router = express.Router();
// const axios = require("axios");

router.get("/test", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://instagram-scraper-api2.p.rapidapi.com/v1/info",
    params: {
      username_or_id_or_url: "feliOliva",
      url_embed_safe: "true",
    },
    headers: {
      "X-RapidAPI-Key": "0c1d3524e7msh2ae488930221087p14bd96jsn0cf24df27d63",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

router.post("/buscar/:name", async (req, res) => {
  const name = req.params.name;
  console.log(name);
  const options = {
    method: "GET",
    url: "https://instagram-scraper-api2.p.rapidapi.com/v1/info",
    params: {
      username_or_id_or_url: name,
      url_embed_safe: "true",
    },
    headers: {
      "X-RapidAPI-Key": "0c1d3524e7msh2ae488930221087p14bd96jsn0cf24df27d63",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

router.get("/post", async (req, res) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://instagram-scraper-api2.p.rapidapi.com/v1/post_info",
    params: {
      code_or_id_or_url:
        "https://www.instagram.com/p/C1k33IwMBbv2PDaRbzmBDQZl33NIU_1m2GwL8E0/",
      include_insights: "true",
    },
    headers: {
      "X-RapidAPI-Key": "0c1d3524e7msh2ae488930221087p14bd96jsn0cf24df27d63",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
