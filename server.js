require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const accessToken = process.env.ACCESS_TOKEN;

// 모든 경로에 대한 OPTIONS 요청 허용
app.options("*", cors());

// Pinterest 보드 검색 프록시 엔드포인트
app.get("/api/boards", async (req, res) => {
  console.log("Received request for /api/boards");
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  try {
    const response = await fetch(
      "https://kr.pinterest.com/resource/NewsHubBadgeResource/get/?source_url=%2Fswanyjke%2Fmovie%2F&data=%7B%22options%22%3A%7B%7D%2C%22context%22%3A%7B%7D%7D&_=1731749789093",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Pinterest API error: ${response.status} - ${errorText}`);
      throw new Error(`Pinterest API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Pinterest API:", error);
    res.status(500).json({ error: "Failed to fetch Pinterest API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
