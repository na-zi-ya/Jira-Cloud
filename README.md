

Jira API Integration with Node.js
This project demonstrates how to integrate with the Jira REST API using Node.js and Express.

Prerequisites
Before running this application, ensure you have the following:

Node.js installed on your machine
A Jira Cloud account
Jira API credentials (username and API token)
.env file configured with your Jira API credentials and base URL

Installation:

Clone the repository:
git clone <https://github.com/naz-i-ya/Jira-Cloud>
cd <repository-folder>

Install dependencies:
npm install

Create a .env file in the root directory:
PORT=8080
JIRA_BASE_URL=https://your-domain.atlassian.net
JIRA_PROJECT_KEY=YOUR_PROJECT_KEY
JIRA_USERNAME=your-jira-username
JIRA_API_TOKEN=your-jira-api-token

Replace placeholders (YOUR_PROJECT_KEY, your-jira-username, your-jira-api-token) with your actual values.

Usage
To start the server:
npm start

The server will start at http://localhost:8080 by default.

Endpoints
GET /api/jira/issues: Retrieves a list of issues from Jira based on the configured project key.
