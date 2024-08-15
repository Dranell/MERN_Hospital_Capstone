Patient Information Management System
This application is designed to manage patient information within a hospital setting, allowing users to create, read, update, and delete patient records. The system utilizes a combination of technologies to provide a robust and interactive user experience. Below is a detailed explanation of the key components and how they work together:

Technologies Used
Node.js: A runtime environment that allows for the execution of JavaScript server-side. It powers the backend of the application, handling server requests and responses.
Next.js: A React framework that enables server-side rendering and static site generation. It is used for building the frontend of the application with optimal performance and SEO.
React: A JavaScript library for building user interfaces. It helps in creating interactive and dynamic frontend components.
Application Overview
The application is structured into a backend and a frontend, each serving distinct purposes:

Neccessary Dependecies: Backend  
Mongoose
Cors
Express
Nodemon

Neccessary Dependecies: Front-End
React
Axios
Material UI

Backend (Node.js and Mongoose)
Server Setup: The backend server is built using Node.js, providing the API endpoints for CRUD operations.
Database Connection: Mongoose is used to connect to a MongoDB database, where patient information is stored. It defines schemas for patient data and manages interactions with the database.
API Endpoints: The backend exposes several API endpoints to perform CRUD operations:
Create: Adds new patient records to the database.
Read: Retrieves patient records from the database.
Update: Modifies existing patient records.
Delete: Removes patient records from the database.


screenshot of database and cluster in cloud
![alt text](<Screenshot (9).png>)

![alt text](<Screenshot (10).png>)
screenshot of stating conneted to the database

![alt text](<Screenshot (22).png>)

screenshot of CRUD operation on thunder client
![alt text](<Screenshot (17).png>)

![alt text](<Screenshot (18).png>)

![alt text](<Screenshot (19).png>)

![alt text](<Screenshot (20).png>)

![alt text](<Screenshot (21).png>)














Front-End
Frontend (Next.js and React)
Page Components: The frontend is developed using Next.js and React. It includes components for viewing, adding, editing, and deleting patient information.
Client-Side Interaction: React components manage the user interface and handle interactions, such as form submissions and data display.
Server-Side Rendering: Next.js ensures efficient rendering of pages, which improves performance and enhances the user experience.
Key Features
Add Patient Information: Users can input new patient details through a form, which is then sent to the backend and stored in the database.
View Patient Information: Patient records are displayed on the frontend, allowing users to browse through the list of patients.
Update Patient Information: Users can edit existing patient records, and the updated information is sent to the backend for modification in the database.
Delete Patient Information: Users have the option to remove patient records, with the deletion request processed by the backend and reflected in the database.
Conclusion
This application provides a comprehensive solution for managing patient information in a hospital environment. By leveraging Node.js, Mongoose, Next.js, and React, it ensures a seamless and efficient user experience for handling patient records through intuitive CRUD operations.





screenshot of removing default react
![alt text](<Screenshot (23).png>)



screenshot of nav toolbar
![alt text](<Screenshot (11).png>)



screenshot of home page 
![alt text](<Home screen page screenshot.png>)


screenshot of creating patient
![alt text](<Screenshot (12).png>)



screenshot of reading card component for patient
![alt text](<Screenshot (13).png>)


screenshot of updating patient information
![alt text](<Screenshot (14).png>)

screenshot of updated information
![alt text](<Screenshot (15).png>)


screenshot of deleting patient information
![alt text](<Screenshot (16).png>)
