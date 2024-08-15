Patient Information Management System
This application is designed to manage patient information within a hospital setting, allowing users to create, read, update, and delete patient records. The system utilizes a combination of technologies to provide a robust and interactive user experience. Below is a detailed explanation of the key components and how they work together:

Technologies Used
Node.js: A runtime environment that allows for the execution of JavaScript server-side. It powers the backend of the application, handling server requests and responses.
Next.js: A React framework that enables server-side rendering and static site generation. It is used to build the application's front end with optimal performance and SEO.
React: A JavaScript library for building user interfaces. It helps in creating interactive and dynamic frontend components.
Application Overview
The application is structured into a backend and a frontend, each serving distinct purposes:

Necessary Dependencies: Backend  
Mongoose
Cors
Express
Nodemon

Necessary Dependencies: Front-End
React
Axios
Material UI

Backend (Node.js and Mongoose)
Server Setup: The backend server is built using Node.js, providing the API endpoints for CRUD operations.
Database Connection: Mongoose is used to connect to a MongoDB database, where patient information is stored. It defines schemas for patient data and manages interactions with the database.
API Endpoints: The backend exposes several API endpoints to perform CRUD operations:
Create: Add new patient records to the database.
Read: Retrieves patient records from the database.
Update: Modifies existing patient records.
Delete: Removes patient records from the database.


screenshot of the database and cluster in the cloud
![Screenshot (9)](https://github.com/user-attachments/assets/fc8d6c78-bbd1-49ad-9ddf-1a1656611c1d)
![Screenshot (10)](https://github.com/user-attachments/assets/a9585ef9-4861-4b26-a0a2-db4f57092f78)

screenshot of connected to the database

![Screenshot (22)](https://github.com/user-attachments/assets/f07cf7fd-65ba-48dc-8536-f81cef2d4569)


screenshot of CRUD operation on Thunder client
![Screenshot (17)](https://github.com/user-attachments/assets/6e453cad-e6d3-4b6e-9ded-08871a193375)
![Screenshot (18)](https://github.com/user-attachments/assets/278ed869-3b8b-43db-83bd-90a45094bde4)
![Screenshot (19)](https://github.com/user-attachments/assets/f9d557af-8fa8-435e-98bd-5cf1f35f0a5d)
![Screenshot (20)](https://github.com/user-attachments/assets/f47a80dc-408b-4175-a9e9-cdd78c556a6a)
![Screenshot (21)](https://github.com/user-attachments/assets/3c4136d2-2245-430f-b7fa-d8ef7861fcc0)














Front-End
Frontend (Next.js and React)
Page Components: The frontend is developed using Next.js and React. It includes components for viewing, adding, editing, and deleting patient information.
Client-Side Interaction: React components manage the user interface and handle interactions, such as form submissions and data display.
Server-Side Rendering: Next.js ensures efficient rendering of pages, which improves performance and enhances the user experience.
Key Features
Add Patient Information: Users can input new patient details through a form, which is then sent to the backend and stored in the database.
View Patient Information: Patient records are displayed on the front end, allowing users to browse through the list of patients.
Update Patient Information: Users can edit existing patient records, and the updated information is sent to the backend for modification in the database.
Delete Patient Information: Users have the option to remove patient records, with the deletion request processed by the backend and reflected in the database.
Conclusion
This application provides a comprehensive solution for managing patient information in a hospital environment. Leveraging Node.js, Mongoose, Next.js, and React ensures a seamless and efficient user experience for handling patient records through intuitive CRUD operations.





screenshot of removing default react
![Screenshot (23)](https://github.com/user-attachments/assets/af56bf2b-7072-4d0f-b39f-d3ca21e1cf7a)




screenshot of the nav toolbar

![Screenshot (11)](https://github.com/user-attachments/assets/7f1699dd-78d4-402a-b129-3ed35e346db0)



screenshot of the home page 

![Home screen page screenshot](https://github.com/user-attachments/assets/93fda754-6a05-4a6f-b686-03460d6fec84)


screenshot of creating a patient
![Screenshot (24)](https://github.com/user-attachments/assets/5595260b-d8ec-4a33-8c48-91324484860c)

screenshot of reading card component for patient

![Screenshot (13)](https://github.com/user-attachments/assets/db634ba2-0479-4aec-b98c-9efa6ceb5706)


screenshot of updating patient information

![Screenshot (26)](https://github.com/user-attachments/assets/1ec4bb65-64c3-4bb6-bf8b-480d333d0b81)

screenshot of updated information
![Screenshot (15)](https://github.com/user-attachments/assets/2591674e-b3c5-4242-a80a-165b083047c2)



screenshot of deleting patient information
![Screenshot (16)](https://github.com/user-attachments/assets/2bbc0481-870f-4097-a7ff-790e8cf29ebf)

