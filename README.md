# Google Auth 2 - Example 

This is a basic of Google Auth 2 example that handles ```success``` and ```error``` cases


### Step 1
You need to get your ```client_id``` and ```client_secret``` from Google

Link: [Get credentials](https://console.developers.google.com/apis/credentials)

### Step 2
Activate the Google Calendar API

Link: [Google Calendar Activation](https://console.developers.google.com/apis/library/calendar-json.googleapis.com/?q=Google%20Calendar%20Ap)


### Step 3
Run:
- npm install

### Step 4:
Run the following in your terminal:
- npm run dev

### Step 5
Add your: 
- CLIENT_ID
- SECRET_ID 

into ```.env-example.env``` file


### Step 6
Run:
- npm start


Once complete all the above steps, click below to see your app locally

[View your app]('http://localhost:8080') 


Note: If you're experiencing some issues. Make sure that your ``` redirect_url``` is equal to ``` http://localhost:8080/getcode``` when you're getting your ```client_id``` and ```client_secret```;

