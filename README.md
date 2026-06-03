 ## Serverless Job Application Portal (AWS + VPS Project)

A fully serverless **Job Application Portal** built using AWS services and hosted on a Linux VPS with Nginx.  
This project demonstrates a real-world **cloud-native architecture without a traditional backend server**.

---

## 🌐 Live Demo

👉 http://13.232.95.182/

---

## 📌 Project Overview

This project allows users to:

- View a job posting
- Fill out an application form
- Submit application data
- Store data securely in AWS DynamoDB

The system uses **AWS Lambda + API Gateway** as a serverless backend and **Nginx on VPS** for frontend hosting.

---

## 🏗️ Architecture


User Browser
↓
VPS (Nginx Server)
↓
Frontend (HTML / CSS / JavaScript)
↓
API Gateway (REST API)
↓
AWS Lambda Function
↓
Amazon DynamoDB
↓
CloudWatch Logs


---

## ⚙️ AWS Services Used

- 🧠 AWS Lambda (Backend processing)
- 🌐 API Gateway (REST API endpoint)
- 🗄️ Amazon DynamoDB (Database)
- 📊 Amazon CloudWatch (Logging & Monitoring)

---

## 🖥️ Infrastructure Used

- Linux VPS (AWS Lightsail)
- Nginx Web Server
- Ubuntu OS

---

## 📂 Project Features

### 📌 Job Details Section
Displays static job information:
- Job Title: Software Developer
- Company: Demo Technologies Pvt Ltd
- Location: Hyderabad
- Experience: 0–2 Years
- Skills: Java, SQL, HTML, CSS

---

### 📌 Application Form

Users can submit:

- Full Name
- Email Address
- Phone Number
- Qualification
- Years of Experience
- Skills
- Cover Letter

---

## ⚡ Serverless Backend Workflow

1. User submits form
2. API Gateway receives request
3. Lambda validates input
4. Lambda generates unique `applicationId`
5. Data stored in DynamoDB
6. Success response returned

---

## 🗄️ DynamoDB Table

**Table Name:** `JobApplications`

### Primary Key:
- `applicationId` (String)

### Stored Fields:
- fullName
- email
- phoneNumber
- qualification
- experience
- skills
- coverLetter
- appliedDate

---

## 🔗 API Endpoint

```
POST /apply
```

Example:

```
https://oeake2ugij.execute-api.ap-south-1.amazonaws.com/prod/apply
```

---

## 🧠 Lambda Function

**Function Name:** `SubmitJobApplication`

Features:
- Input validation
- UUID generation
- DynamoDB storage
- Error handling
- CORS enabled

---

## 🌐 Frontend Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

Features:
- Responsive UI
- Form validation
- API integration
- Success/error messages

---

---

## 📊 Monitoring

### CloudWatch Logs

Used for:
- Lambda execution tracking
- Debugging errors
- Request monitoring

---

## 🚀 Deployment Steps

1. Create DynamoDB table `JobApplications`
2. Create Lambda function `SubmitJobApplication`
3. Configure API Gateway (`/apply`)
4. Enable CORS
5. Deploy frontend on VPS using Nginx
6. Connect frontend with API Gateway URL
7. Test full workflow

---

