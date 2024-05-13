## Getting Started

To begin, you need to install all the dependencies for the site. To do this you need to have `Yarn` and `Node v20.9.0` installed and in the root level run the command `yarn`. 

Once this is complete, run `yarn dev` to start the server and head to http://localhost:3000/.


## THE TEST

In this test we will be assessing you skills with React, Typescript, Redux, NextJS, Unit Testing and Styled Components. 
There is one main task that needs to be complete to the best of your ability. The task shouldn't take more than 4 hours

There are also some additional tasks if time permits but they are not required.

Please read carefully and follow the instructions below. There are also some rules that need to be followed. 


### The Brief
We need to create a new component for our app. The component is a basic signup newsletter form. We will ask the user for some basic details and hit submit. When they hit submit we need to a message to appear that shows that they have successfully submitted the form. This should go on a new page with the url 'newsletter-signup' (http://localhost:3000/newsletter-signup).

### Rules
1. You should not use any packages for the form or validating the form. It needs to be written by hand.
2. You must use styled components to achieve any design required but you are free to use any CSS approach you wish (ie grid, flex, css vars and so on)
3. You must use Redux to exchange data between the form and alert component.
4. Code should be written in TypeScript and typed correctly. You are not allowed to use types such as 'any' or 'unknown'

### The Details
The form needs to live on a new page with a url that does not currently exist. You need to make the new page and add the form there. It should have the header and footer on there.

The form will consist of 3 fields.
1. An input field for an email address
2. A option list to select the category they are interested in (Shoes, Heels, Sandles and Handbags)
3. A checkbox that acknowledges that they agree to our terms and conditions

The form must have validation
The email address and the checkbox are mandatory, the interest list is not.
The email must follow the standard email pattern. The form is validated when they hit submit.

If the form passes validation, we need to update the Alert Component saying that the form is successful. This message should appear for 5 seconds then disappear again. We also need to provide a message to the Alert Component. Redux is not installed so you'll need to add Redux ToolKit
[Redux ToolKit](https://redux-toolkit.js.org/introduction/getting-started)

The data however is typed already and can be found here
./types/custom-types.ts
under Alert.

You need to add unit tests to test the form validation. It is not required that you add tests to the Alert Component but you can if you have time.

The form should be styled nicely but there is no design to code against. The form must be responsive.

### Summary
1. Make new page http://localhost:3000/newsletter-signup
2. Create new component using TypeScript for the newsletter signup form
3. Add test for form validation
4. Add validation for form on submit
5. Style Form
6. On successful form submission, update the existing Alert Component using Redux

## Additional Tasks
These are not required and if you do not complete it will not affect your progression in the interview process

Using the query found here
queries/index.ts
Update the list of interests to the data returned from the query. The form needs to show a loading screen whilst we wait for the data to return. If you're able to fetch the data server side please do so.