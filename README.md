# Financely - Personal Finance Tracker

A modern, responsive, and user-friendly Personal Finance Tracker built with React.js and Firebase. Financely helps users manage income, expenses, transactions, and financial analytics in one clean dashboard.

---

## Repository

GitHub Repository: https://github.com/NishantAwasthi87/financeTracker

---

## Overview

Financely is a personal finance management web application designed to help users track and manage their money in a simple, organized, and visual way. Users can add income and expense transactions, categorize records, monitor total balance, analyze spending patterns, and import or export transaction data using CSV files.

The application provides a clean dashboard where users can view their financial activity with interactive charts and real-time transaction updates. Firebase is used for authentication and cloud database storage, making the app secure, scalable, and easy to use.

---

## Key Highlights

- Clean and professional user interface
- Secure user authentication
- Real-time income and expense tracking
- Interactive financial dashboard
- Transaction search, filter, and sorting
- CSV import and export support
- Visual analytics using charts
- Responsive design for better user experience

---

## Features

### Authentication

- User signup and signin
- Firebase Authentication integration
- Secure user session management
- Logout functionality
- User profile image support

### Dashboard

- View current balance
- View total income
- View total expenses
- Add income transactions
- Add expense transactions
- Real-time balance calculation
- Clean financial summary cards

### Transaction Management

- Add income records
- Add expense records
- Store transaction name, amount, tag, date, and type
- View all transactions in a structured table
- Search transactions by name
- Filter transactions by transaction type
- Sort transactions by date
- Sort transactions by amount

### Analytics

- Line chart for transaction trends
- Pie chart for spending distribution
- Category-wise expense visualization
- Better understanding of financial habits

### CSV Support

- Export all transactions as CSV
- Import transactions from CSV
- Bulk upload transaction records
- Useful for backup and data portability

### Notifications

- Success and error messages using React Toastify
- Better feedback for user actions
- Smooth user experience

---

## Tech Stack

- React.js
- Firebase Authentication
- Firebase Firestore
- React Router DOM
- React Firebase Hooks
- Ant Design
- Ant Design Charts
- PapaParse
- Moment.js
- React Toastify
- CSS

---

## Project Structure

```bash
financeTracker/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── search.svg
│   │   ├── transactions.svg
│   │   └── user.svg
│   │
│   ├── components/
│   │   └── Header/
│   │       ├── Button/
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       │
│   │       ├── Cards/
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       │
│   │       ├── Charts/
│   │       │   └── index.js
│   │       │
│   │       ├── Input/
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       │
│   │       ├── Modals/
│   │       │   ├── addExpense.js
│   │       │   └── addincome.js
│   │       │
│   │       ├── SignupSignin/
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       │
│   │       ├── TransactionsTable/
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       │
│   │       ├── NOTransactions.js
│   │       ├── index.js
│   │       └── styles.css
│   │
│   ├── pages/
│   │   ├── Dashboard.js
│   │   └── Signup.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── firebase.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Installation and Setup

Follow the steps below to run this project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/NishantAwasthi87/financeTracker.git
```

### 2. Navigate to the Project Directory

```bash
cd financeTracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Firebase

Create a Firebase project from the Firebase Console and enable the following services:

- Firebase Authentication
- Cloud Firestore

After creating the Firebase project, update your Firebase configuration inside:

```bash
src/firebase.js
```

Example Firebase configuration:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Start the Development Server

```bash
npm start
```

The application will run locally at:

```bash
http://localhost:3000
```

---

## Available Scripts

In the project directory, you can run the following commands:

### Start Development Server

```bash
npm start
```

Runs the application in development mode.

### Build for Production

```bash
npm run build
```

Creates an optimized production build of the application.

### Run Tests

```bash
npm test
```

Launches the test runner.

### Eject Configuration

```bash
npm run eject
```

Ejects the Create React App configuration.

---

## Main Functionalities

### User Authentication

Users can create an account, sign in securely, and log out using Firebase Authentication. The app maintains user sessions and redirects authenticated users to the dashboard.

### Income Tracking

Users can add income records by entering details such as income name, amount, date, and category. Income records help users monitor all earning sources in one place.

### Expense Tracking

Users can add expense records by entering expense name, amount, date, and category. Expense records help users understand where their money is being spent.

### Balance Calculation

The application automatically calculates:

- Total income
- Total expenses
- Current balance

This gives users a clear overview of their financial position.

### Transaction Table

All income and expense records are displayed in a structured table. Users can search, filter, and sort transactions for better financial management.

### Financial Analytics

The app provides visual analytics using charts:

- Line chart for transaction trends
- Pie chart for category-wise spending

These charts help users understand financial behavior and spending habits.

### CSV Import and Export

Users can export their transactions into a CSV file and also import transaction records from a CSV file. This makes data backup and migration simple.

---

## Firebase Database Structure

Transactions are stored inside each user's collection in Firestore.

```js
users
 └── userId
      └── transactions
           └── transactionId
```

Example transaction document:

```js
{
  name: "Salary",
  amount: 50000,
  tag: "salary",
  type: "income",
  date: "2024-07-20"
}
```

Example expense document:

```js
{
  name: "Food",
  amount: 1200,
  tag: "food",
  type: "expense",
  date: "2024-07-21"
}
```

---

## Pages

- Signup Page
- Signin Page
- Dashboard Page

---

## Components

- Header
- SignupSignin
- Cards
- Add Income Modal
- Add Expense Modal
- Transactions Table
- Charts
- Button
- Input
- No Transactions Component

---

## Dependencies

```json
{
  "@ant-design/charts": "^2.1.2",
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "antd": "^5.19.2",
  "firebase": "^10.12.3",
  "moment": "^2.30.1",
  "papaparse": "^5.4.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-firebase-hooks": "^5.1.1",
  "react-router-dom": "^6.24.1",
  "react-scripts": "5.0.1",
  "react-toastify": "^10.0.5",
  "web-vitals": "^2.1.4"
}
```

---

## Why This Project?

Managing personal finances manually can be difficult and time-consuming. Financely solves this problem by providing a simple digital platform where users can track income, expenses, balance, and spending patterns in one place.

This project demonstrates practical knowledge of React.js, Firebase Authentication, Firestore database operations, charts, CSV handling, state management, and responsive UI development.

---

## Future Improvements

- Add transaction edit functionality
- Add transaction delete functionality
- Add monthly budget planning
- Add expense limit alerts
- Add recurring income and expenses
- Add dark mode
- Add advanced category management
- Add date range filtering
- Add downloadable PDF reports
- Add mobile-first UI improvements
- Add multi-currency support
- Add profile settings page

---

## Author

**Nishant Awasthi**

GitHub: https://github.com/NishantAwasthi87

---

## Conclusion

Financely is a complete personal finance tracker that helps users manage money more effectively. With secure authentication, real-time transaction storage, income and expense tracking, CSV support, and interactive analytics, it provides a practical and professional solution for personal finance management.

---

