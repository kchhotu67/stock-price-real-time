# Real Time Stock Data Tracker

Follow these steps to get the application up and running on your local machine.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation
1. **Clone the Repository**
```bash
git clone https://github.com/kchhotu67/stock-price-real-time.git
cd stock-price-real-time
```
2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Environment Setup**
- Create .env file inside backend directory
- Generate STOCK_API_KEY from https://www.livecoinwatch.com/tools/api#try
- .env file should have configuration as shown below
```bash
PORT=3001
MONGODB_URI=mongodb://localhost:27017/stockdb
STOCK_API_URL=https://api.livecoinwatch.com/coins/single
STOCK_API_KEY=
STOCK_CURRENCY=USD
STOCK_PULL_INTERVAL=15
```

4. **Run the Backend Server**

- Ensure MongoDB is running on your machine. Then, start the backend server:
```bash
npm run dev
```
The backend server will be available at http://localhost:3001


5. **Frontend Setup**
- Open a new terminal window, navigate to the frontend directory, and install the dependencies:
```bash
npm install
```
6. **Environment Setup for Frontend**
- Create a .env file inside /frontend directory
- put the below configuration
```bash
REACT_APP_API_BASE_URL=http://localhost:3001
```

7. **Run the Frontend Server**
- Start the frontend server:
```bash
npm start
```
The frontend application will be available at http://localhost:3000

## Usage
Once both servers are running, access the application by opening http://localhost:3000 in your web browser.
