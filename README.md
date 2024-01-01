<p align="center">
  <img width="400px" src="https://github.com/rohan-bhautoo/Issue-Tracker/assets/47154593/5a5ba13a-08b2-4b34-a6fe-5c43b3fa2508" alt="logo">
</p>
<p>
  <img alt="React" src="https://img.shields.io/npm/v/react.svg?logo=react&label=React" />
  <img alt="Node" src="https://img.shields.io/npm/v/npm.svg?logo=nodedotjs" />
  <img alt="Tailwind" src="https://img.shields.io/npm/v/tailwindcss.svg?logo=tailwindcss&label=Tailwind" />
  <img alt="MySQL" src="https://img.shields.io/npm/v/mysql.svg?logo=mysql&label=MySQL" />
  <img alt="Prisma" src="https://img.shields.io/npm/v/prisma.svg?logo=prisma&label=Prisma" />
</p>

Issue Tracker is a web application developed using Next.js and TypeScript to help teams track and manage issues efficiently. With a sleek frontend built using Radix UI and Tailwind CSS, the platform offers a visually appealing and user-friendly experience. The backend leverages MySQL as the database and utilizes Prisma ORM for seamless data interactions. The project also incorporates authentication via Google accounts to ensure secure access.

![image](https://github.com/rohan-bhautoo/Issue-Tracker/assets/47154593/1796da5e-f9fb-4214-a9ed-8671fb64392c)

## Features

### Issue Status Tracking
Every issue within the system can be categorized into one of three statuses: OPEN, IN_PROGRESS, or CLOSED.
A bar chart visualization using the react-charts package is displayed on the frontend to represent the distribution of issues across different statuses.

### User Authentication using NextAuth
Users can securely log in to the application using their Google accounts, ensuring a streamlined and hassle-free authentication process.

### Issue Management
Authorized users have the capability to edit or delete issues as needed, providing flexibility and control over the tracking process.
The system allows for easy filtering of issues based on their status, enabling users to focus on specific categories as required.

## Tech Stack
Frontend: Radix UI, Tailwind CSS, React Charts
Backend: Next.js, TypeScript
Database: MySQL
ORM: Prisma

## Getting Started

### Clone the repository
```bash
git clone https://github.com/rohan-bhautoo/Issue-Tracker.git
```

### Navigate to Project Directory
```bash
cd issue-tracker
```

### Install the dependencies
```bash
npm i
```

### Set Up Prisma
```bash
npx init && npx migrate dev
```

### Set Up Environment 
Add your Google OAuth credentials and MySQL connection details. Use ```.env.example``` to get started.

## Usage
Execute the command below to open a local session. Navigate to ```http://localhost:3000``` to access the Issue Tracker application.
```bash
npm run dev
```

## Contributing
We welcome contributions from the community to enhance the functionality and usability of the Issue Tracker. To contribute, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code is well-documented.
4. Test your changes thoroughly.
5. Create a pull request with a detailed description of the changes.

## Author

👤 **Rohan Bhautoo**

* Github: [@rohan-bhautoo](https://github.com/rohan-bhautoo)
* LinkedIn: [@rohan-bhautoo](https://linkedin.com/in/rohan-bhautoo)

## Show your support

Give a ⭐️ if this project helped you!
