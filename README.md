# Message Generator

## Usage Instructions

1. Open up your editor of choice and run an `npm install`
2. Run `npm start` in your terminal
3. Once the application is pulled up, you will see three select inputs and a message output section
4. Make a selection for each of the three sections and click submit
5. Unfortunately, to see the correct greeting attached to your message, you will have to click the select button again
6. You should then see your message with all of the corresponding data filled in

## Description

I started by finding a way to display and select all of the company, guest and message options. I then worked on grabbing the data of the selected options. I struggled with holding the JSON data in a variable so I decided to grab the ID instead of the entire object. I then had to loop through the arrays, find the matching ID, and then grab the data. This worked but created a bit of a timing issue with the greeting. I also struggled to dynamically enter information into the messages that were stored in my JSON file. I ended up needing to hard code the messages in, and conditionally render them based on the ID of the message that was selected. 

I chose to work with JavaScript and React, simply because those are the languages I am most comfortable with. 

I use a lot of console logs throughout the course of my prgramming to verify the correctness. I try to test every little thing as I go. It's much easier to find the bugs right as they're created, then to go back and try to find where they originated. 

I wasn't able to create a way for a user to create new messages. If I had more time, I would try to learn more about working with JSON data and how to better manipulate it. Ideally, in a work environment, I would have someone that I could ask as well. In the end, it became clear that I was not going to create a solution in a reasonable timeframe, so I decided to create a work around. I also would have liked to spend more time fixing the timing issue I'm having with the greeting. I just need to run the function that determines the greeting after all of the data for the guest has been collected. I could have accomplished this with additonal buttons or something of that nature. I also would like to add input validation if time allowed.

Thank you so much for the opportunity to work on this! It was a fun challenge and certainly made me think. I'm excited to do some additonal research and see how I can expand upon this idea in another project!

