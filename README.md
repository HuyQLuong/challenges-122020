# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

`yarn start` to start the project

Every commit to branch `master` will automatically deploy to heroku apps

## Stack

 - React + Typescript
 - Redux-thunk
 - Material-ui
 
## Technical decision 

  ### 1. How did you implement styling? What are the pros and cons? Why did you chose this approach?
  I am using Material-ui styling. The reason is it provide many ready-to-use component and speed up development time.
  **Pros**: 
  - Easy and ready to use components
  - Well-structured with CSS-API
  **Cons** 
  - Override issue
  - Problem with style nested components
  ### 2. How did you share state between components? What are the pros and cons? Why did you chose this approach?
  - Any to any: I share by store
  - Parent to Child: I share by props
  **Pros**:
  - Sharing by store make everything concentrate to store and make data inconsistent
  - Sharing by props could well-controlled state of child component
  **Cons**:
  - Sharing by store could cause some unexpected side effect
  - A lot of action need to be provided
  - Can not avoid some redundant render
  ### 3. Did you use React hooks? Why or why not?
  I used React Hooks because it was easy to use and make the code cleanner, easier to understand, advoiding "wrapper hells"
  ### 4. What would you improve?
  In this project, I would like to minimize number of api call. All data will be recorded at store and reuse whenever it coudl
  For the next phase of this project, data schemas should be applied to confirm the correction of api. I will continuously the eliminate redundant renders
  ### 5. How did you prevent wasted renders?
  - Sepearate and isolate small component
  - Design a good redux store
  - Reduce unessesary variable and data used in each component
  - Using react.memo (did not apply at this moment)
  ### 6. How did you handle side-effects (e.g. data fetching)? What are the pros and cons? Why did you chose this approach?
  - Design a good redux store
  - Seperate into small component
  - Use react-hook useSelect to subcribe to the correct field in store
  - Use react-hook useEffect to handle side effect (at this project, currently I do not need much due to above solution)
  **Pros**:
  - Handle side effect succesfully
  - Side effect could be tracking well
  **Cons**:
  - The relation between components can make some anti patterns
  - Adjusting structure redux store can affect to all the project
  
