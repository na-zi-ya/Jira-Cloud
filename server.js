import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api/jira/issues", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.JIRA_BASE_URL}/rest/api/3/search?jql=project=${process.env.JIRA_PROJECT_KEY}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.JIRA_USERNAME}:${process.env.JIRA_API_TOKEN}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Jira issues:", error);
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal Server Error" });
  }
});

// Vercel specific export
export default app;

// Local development
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
