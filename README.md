# LocoFast Assignment

## Setup Locally

- Clone this Repo
- In root folder run `npm install`
- Start mongoDB server
- Run npm start to start node server

## Routes

### Student
``` 
--- Get Student ---
path: /student/
method: GET
params: id
Functionality: It return student detail if id is send as a query parameter else it will return array of students details

--- Add Student ---
path: /student/
method: POST
params: {
	name: String,
  required: true
}
Functionality: It saves new student into database

```

### Student Class
``` 
--- Get Student Class ---
path: /student/class
method: GET
params: id
Functionality: It return student class if id is send as a query parameter else it will return array of students class

--- Add Student Class ---
path: /student/class
method: POST
params: {
	studentClass: String
  required: true
  
  student_id: String
  required: true
}
Functionality: It saves student class into database

```

### Student Report
``` 
--- Get Student Report ---
path: /student/report
method: GET
params: id
Functionality: It return student report if id is send as a query parameter else it will return array of students reports

--- Add Student ---
path: /student/report
method: POST
params: {
	student_id: String,
}
Functionality: If student_id is sent in the body then it create new entry with class and name of that corresponding student_id. If no student_id is sent it create new entry for every studen with class and name.

```
