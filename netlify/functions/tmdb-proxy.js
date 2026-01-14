// netlify/functions/tmdb-proxy.js
const fetch = require("node-fetch");

exports.handler = async function(event) {
  const query = event.queryStringParameters?.q || "";
  const token = process.env.TMDB_READ_ACCESS_TOKEN;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Query parameter 'q' is required" }),
    };
  }

  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;

  try {
    const resp = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        body: JSON.stringify({ error: `TMDB API error: ${resp.statusText}` }),
      };
    }

    const data = await resp.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};