# AngularJS Currency Converter App

## Overview

The AngularJS Currency Converter App is a user-friendly application that allows users to convert currencies in real-time. By utilizing public APIs for exchange rates, this app provides a seamless experience for users to input amounts and select currencies to convert. Built with AngularJS, the app showcases the capabilities of single-page applications (SPAs) and data binding.

## Features

- **Real-time Currency Conversion**: Convert between multiple currencies using up-to-date exchange rates.
- **User-Friendly Interface**: Simple and clean design for easy navigation.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Error Handling**: Robust error handling for API requests and user inputs.
- **CSS to SCSS Conversion**: Automatically converts CSS files to SCSS format using `npm convert-css-to-sass`.

## Technologies Used

- **AngularJS**: The core framework for building the application.
- **HTML/CSS**: For structuring and styling the application.
- **Fetch API**: For making asynchronous requests to public APIs.
- **Currency Exchange Rate API**: Utilized to fetch real-time exchange rates.
- **CSS-to-SCSS Converter**: Converts CSS syntax into SCSS.
- **Nodemon**: Nodemon is a utility that automatically restarts your Node.js application when it detects changes in the source files. 

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for running a local server)
- A modern web browser (Chrome, Firefox, etc.)

### Steps to Run Locally

1. **Clone the Repository**:

```bash
git clone git@github.com:RoystonDAlmeida/currency-converter.git
cd currency-converter/
```

2. **Install Dependencies**:
To install the dependencies specified in a package.json file, run:

```bash
npm install
```

3. **Convert CSS to SCSS**:
Use the following command to convert CSS files into SCSS format:

```bash
npm convert-css-to-sass
```

4. **Create a `.env` File**:
In the root of your project, create a file named `.env` and add the following variables:

```bash
CURRENCY_API_URL = 
CURRENCY_API_KEY =
```

5. **Run the Application**:
Start your application with:

```bash
npm start
```

Your application will be accessible at `http://localhost:3000`.

6. **Access the App**:
Open your web browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. Enter the amount you wish to convert in the input field.
2. Select the source currency from the dropdown menu.
3. Select the target currency from another dropdown menu.
4. Click on the "Convert" button to see the converted amount.