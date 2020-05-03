1. What problem does the context API help solve?
   Context API solves the problem of state management for projects that are too big for only props but would be overkill to use redux for.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux.
   What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Store: Where all of the applications state is contained.
   Actions: Sends data from application to store.
   Reducers: Specify state change bnased on actions.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Component State: Stored locally within component.
   Application State: Global and kept within store.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Allows for async actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why! Redux with hooks was okay. Without hooks I'd say context. Reason being is I felt like my code was much less bloated with Context.
