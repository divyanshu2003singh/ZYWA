
# Card Status Management System

The Card Status Management System is a Node.js application designed to manage the status of various cards. It allows users to load data from CSV files, store it in a MongoDB database, and perform operations such as retrieving card status based on card ID or user contact.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [CSV File Format](#csv-file-format)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/divyanshu2003singh/ZYWA.git
   ```

2. Navigate to the project directory:

   ```
   cd ZYWA
   ```

3. Install dependencies using npm:

   ```
   npm install
   ```

## Usage

1. Ensure that you have MongoDB installed and running on your system.

2. Update the MongoDB connection string in the `config/db.config.js` file with your database connection URI.

3. Place your CSV files containing card status information in the `data` directory.

4. Start the server:

   ```
   nodemon start
   ```

5. Once the server is running, you can use Postman or any other API testing tool to interact with the API endpoints.

## API Endpoints

### Get Card Status

- **URL:** `/card/status`
- **Method:** `GET`
- **Query Parameters:**
  - `card_id`: The ID of the card for which you want to retrieve status.
  - `user_contact`: The contact number of the user associated with the card.
- **Response:**
  - `200 OK`: Returns the status of the card.
  - `404 Not Found`: If no entries are found for the provided card ID or user contact.

## CSV File Format

Ensure that your CSV files follow the following format:

```
ID,Card ID,User contact,Timestamp,Comment
```

## Dependencies

- [express](https://www.npmjs.com/package/express): Web framework for Node.js
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool
- [csv-parser](https://www.npmjs.com/package/csv-parser): CSV parsing and transformation tool
- [dotenv](https://www.npmjs.com/package/dotenv): Environment variable loader
- [nodemon](https://www.npmjs.com/package/nodemon): Utility for auto-restarting Node.js applications

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

