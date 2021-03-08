
# DevBootcamps API

Backend API for DevBootcamps application to manage bootcamps, courses, reviews, users and authentication

## Indices

* [Authentication](#authentication)

  * [Forgot Password](#1-forgot-password)
  * [Get Me](#2-get-me)
  * [Login User](#3-login-user)
  * [Logout User](#4-logout-user)
  * [Register User](#5-register-user)
  * [Reset Password](#6-reset-password)
  * [Update Password](#7-update-password)
  * [Update Profile](#8-update-profile)

* [Bootcamps](#bootcamps)

  * [Create New Bootcamp](#1-create-new-bootcamp)
  * [Delete  Bootcamp](#2-delete--bootcamp)
  * [Get All Bootcamps](#3-get-all-bootcamps)
  * [Get All bootcamps within Radius](#4-get-all-bootcamps-within-radius)
  * [Get Single Bootcamp](#5-get-single-bootcamp)
  * [Update Bootcamp](#6-update-bootcamp)
  * [Upload Bootcamp Photo](#7-upload-bootcamp-photo)

* [Courses](#courses)

  * [Add New Course to Bootcamp](#1-add-new-course-to-bootcamp)
  * [Delete Course](#2-delete-course)
  * [Get All Courses](#3-get-all-courses)
  * [Get All Courses in Bootcamp](#4-get-all-courses-in-bootcamp)
  * [Get Single Course](#5-get-single-course)
  * [Update Course](#6-update-course)

* [Users](#users)

  * [Add User](#1-add-user)
  * [Delete User](#2-delete-user)
  * [Get All  Users](#3-get-all--users)
  * [Get Single User](#4-get-single-user)
  * [Update User](#5-update-user)


--------


## Authentication
Auth Endpoints



### 1. Forgot Password


Generate password-reset token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "email": "kevin@gmail.com"
}
```



### 2. Get Me


Fetch currently logged in user from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/me
```



### 3. Login User


Authenticate user based on input credentials and return signed jwt in case of successful authentication


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "email": "kevin@gmail.com",
    "password": "pass@12345"
}
```



### 4. Logout User


Logout by clearing a token cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



### 5. Register User


Add user to the database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "name": "Kevin Smith",
    "email": "kevin@gmail.com",
    "role": "publisher",
    "password": "pass@1234"
}
```



### 6. Reset Password


Reset user password using token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/33b02013925d18051cace1cbe3885d60a43df227
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "password": "pass@1234"
}
```



### 7. Update Password


Update logged in user's password, send in the body both current password and new password.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "currentPassword": "pass@1234",
    "newPassword": "pass@12345"
}
```



### 8. Update Profile


Update logged in user's details like name and email


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updateprofile
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "email": "john@gmail.com",
    "name": "John Hopkins"
}
```



## Bootcamps
Bootcamps CRUD Endpoints



### 1. Create New Bootcamp


Add new bootcamp to the database (must be authenticated and must be a publisher or admin)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "name": "ModernTech Bootcamp",
    "description": "ModernTech Bootcamp has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
    "website": "https://moderntech.com",
    "phone": "(222) 222-2222",
    "email": "enroll@moderntech.com",
    "address": "220 Pawtucket St, Lowell, MA 01854",
    "careers": ["Web Development", "UI/UX", "Mobile Development"],
    "housing": false,
    "jobAssistance": true
}
```



### 2. Delete  Bootcamp


Delete bootcamp from the database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/603fbbcf319049781065902a
```



### 3. Get All Bootcamps


Fetch all bootcamps from the database (includes pagination, filtering, etc.)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```



### 4. Get All bootcamps within Radius


Fetch all bootcamps within the radius of a specific zipcode


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/radius/02125/50
```



### 5. Get Single Bootcamp


Fetch single bootcamp by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```



### 6. Update Bootcamp


Update single bootcamp in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/603fbbcf319049781065902a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "housing": false
}
```



### 7. Upload Bootcamp Photo


Route to upload a bootcamp photo


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



## Courses
Courses CRUD Endpoints



### 1. Add New Course to Bootcamp


Create course for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/603fbbcf319049781065902a/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "title": "Full Stack Web Development with React and Node.js",
    "description": "In this course, you will learn ull stack web development with React and Node.js.",
    "weeks": 10,
    "tuition": 1500,
    "minimumSkill": "beginner",
    "scholarshipAvailable": false
}
```



### 2. Delete Course


Delete course from the database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/courses/60431f1f7de8c348d8807d57
```



### 3. Get All Courses


Fetch all courses from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```



### 4. Get All Courses in Bootcamp


Fetch all courses in a specific bootcamp based on bootcampId


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d713995b721c3bb38c1f5d0/courses
```



### 5. Get Single Course


Fetch single course by its ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725c84c4ded7bcb480eaa0
```



### 6. Update Course



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "tuition": 1200,
    "minimumSkill": "advanced",
    "title": "MERN Stack Web Development",
    "description": "In this course, you will learn full stack web development, with React.js on frontend and Node.js/Express/MongoDB on backend"
}
```



## Users
CRUD functionality for users only available to admins



### 1. Add User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "name": "Natalie Martinez",
    "email": "natalie@gmail.com",
    "password": "pass@12345"
}
```



### 2. Delete User


Delete user from the database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/users/60447552960b052e2c7faae3
```



### 3. Get All  Users


Fetch all users from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```



### 4. Get Single User


Get single user by ID (only admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/603fcc18319049781065902b
```



### 5. Update User


Update user in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/60447552960b052e2c7faae3
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Content-Type |



***Body:***

```js        
{
    "role": "publisher"
}
```



---
[Back to top](#devbootcamps-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-03-08 23:55:19 by [docgen](https://github.com/thedevsaddam/docgen)
