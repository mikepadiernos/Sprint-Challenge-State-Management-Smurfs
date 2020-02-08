1. What problem does the context API help solve?<br>
    It is a way for child components to access values from the parent component
    
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?<br>
    actions - is the data source of information used by the store<br>
    reducers - place where code that dictates what changes occur in response to actions<br>
    store - a single place where the data is accessed throughout the application
    
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?<br>
    The application state refers to the state that is global through out the application whereas the component state is state only viable within a component.
    
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?<br>
    Redux Thunk allows action-creators to be more dynamic; allowing it to be functions and not just objects.
    
1. What is your favorite state management system you've learned and this sprint? Please explain why!<br>
    Context API, it has streamlined syntax with less redundant code making for easier and cleaner syntax.
