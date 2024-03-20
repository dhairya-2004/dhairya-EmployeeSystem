# EmployeeEase README

EmployeeEase is an employee information management system built using Spring Boot, MySQL, Hibernate, and React. The application allows you to perform CRUD (Create, Read, Update, Delete) operations, filter, sort, and download employee details as a PDF.

## Prerequisites

Before you start, make sure you have the following installed:

- JDK 8
- Maven
- Node.js (LTS version)
- MySQL Server

## Project Setup

### Backend Setup

1. Import the project into an IDE that supports Maven (e.g., IntelliJ IDEA, Eclipse).
2. Open the `application.properties` file and configure the database connection settings (MySQL server URL, username, and password).
3. Run the following command to build the project:
4. 4. Start the Spring Boot application by running the `EmployeeEaseApplication.java` file.

### Frontend Setup

1. Open the project directory in the terminal.
2. Run the command `npm install` to install the required dependencies.
3. Update the `proxy` field in the `package.json` file with the backend server URL (e.g., http://localhost:8080).
4. Run the command `npm start` to start the React development server.

## Project Features

The application has the following features:

- **Employee Listing:** Display a list of employees with their details (ID, name, position, and office).
- **Employee Filtering:** Filter employees by position, office, or search for a specific employee by name.
- **Employee Sorting:** Sort employees by ID, name, position, or office.
- **Employee Data Management:** Create, update, and delete employee records.
- **Employee Data Export:** Export the list of employees in PDF format.
- **Employee CRUD Operations:** Performing CRUD operations for managing employee's personal details as well as employee's financial payroll details.

## Technologies Used

- Spring Boot: A framework for building stand-alone, production-grade Spring applications.
- MySQL: A popular open-source relational database management system.
- Hibernate: A powerful, lightweight, and high-performance object-relational mapping (ORM) framework.
- React: A JavaScript library for building user interfaces.
- Bootstrap: A popular CSS framework for building responsive, mobile-first projects.

## License

This project is MIT licensed.

## Acknowledgments

Thank you for using EmployeeEase. If you have any questions or need assistance, please contact the project maintainers.

