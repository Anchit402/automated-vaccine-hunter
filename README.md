# automated-vaccine-hunter
Gives you a mail every 10 minutes about the vaccine updates in your provided picode. Now you don't need to check again and again about the vaccine vacancies.

Steps to run this app.

0. Node JS and npm should be installed to get this running.
1. Clone this repo to your local machine.
2. Write your gmail address and password in the lines 15, 16, 38.
3. Write the gmail address you want to send to in the line 39.
4. Write the pincode of where you want to hunt the vaccine. Line 21 replace '411028' with your picode.
5. Type "npm i" in the terminal of project's root directory.
6. go to this link "https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Oa-1D_Nunv4J1OanZ5zjNwAjsXGD5KRsjshZ6QSNXm780j25qF0UamxqpC71hwfGOeOGObAIDhOJUdOxloowwuam6Few" and allow it to send mails through 3rd party e mails generators.
7. Type "pm2 start app.js" in the project's root directory to make the server run locally like how the server runs online.
8. To stop the server type "pm2 stop app.js" to stop the server.
9. If the pm2 command is giving error type "npm i pm2 --g" in the terminal of the project's root directory.
