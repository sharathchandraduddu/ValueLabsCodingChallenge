import { useEffect} from 'react';
import List from 'ui/components/List';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList,setLoading, setError } from './store/pokemonSlice';


const PokemonList = () => {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state: any) => state.pokemon);


    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                dispatch(setLoading(true));
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151'); 
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                dispatch(setPokemonList(data.results.map((poke: { name: string }) => poke.name)));
            } catch (err:any) {
                setError(err.message);
            }
            finally {
                dispatch(setLoading(false));
              }
        };

        fetchPokemon();
    }, [dispatch]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return <List items={pokemonList} />;
};

export default PokemonList;

//Task one questions and answers

// Question 1: How Did You Fetch the List, and What Tool Did You Use?
// •	I used the fetch API in a React functional component to send a GET request to the Pokémon API.
// •	The fetch API is built into the browser and supports asynchronous calls, making it suitable for this task.
// •	I used React’s useEffect hook to trigger the fetch operation when the component mounts.
// •	The API response was processed using response.json() to parse the JSON data, and the Pokémon list was stored in the pokemon state.
// •	which I have Rendered in the Task1 Component

// Question 2: What Steps Would You Take to Further Improve This?
// Answer:
// To improve this implementation, I would:
// •	Add more better error handling to manage different HTTP  codes.
// •	Display user-friendly error messages.
// •	Implement pagination or infinite scrolling for large datasets to improve performance.
// •	Abstract the API fetching logic into a custom hook like useFetch to reuse across components
// •	Implement a loading skeleton to enhance user experience during data fetching.
// •	Write unit tests using Jest  or Cypress and React Testing Library to ensure the component behaves correctly.
// •	Enhance the UI/UX by adding images, types, or other details from the Pokémon API.
// •	Ensure the Auth code is securely stored in environment variables.


// Question 4: What Makes the createSlice in Redux Toolkit Different from a Reducer in Redux?
// ·	In traditional Redux, reducers are functions that take the current state and an action and return a new state.but createSlice reduces boilerplate code by automatically generating action creators and action types.
// ·	In regular Redux, you have to manually define action types, create action creators, and write reducers. In Redux Toolkit, createSlice does all of that for you.


// Question 5: Describe the Benefits of Immutable Code.
// •	Immutable code is that the  data that cannot be changed after it is created, we cannot directly modify the state due to this the state remains unchanged unless an action is dispatched. This makes the state transitions predictable
// •	It makes you can maintain a history of state changes, which is useful for  debugging
// •	Also the component re-rendering logic can be optimized because the shallow comparison between previous and new states is enough to detect changes.
// •	immutability helps ensure that data flows predictably through the application, reducing bugs and improving performance 

// Question 6: How can you verify the action has been dispatched?
// •	We can Use the Redux DevTools browser extension to monitor the dispatched actions and the updated state.
// •	Add console.log statements in your reducers to see when the action is triggered.
// •	We can Use testing libraries like Jest and React Testing Library to write unit tests that ensure the action is dispatched correctly.


// Question 7: Explain the use of useEffect hook in React
// •	The useEffect hook in React is used to perform side effects in functional components. It allows you to run code after the component renders, such as fetching data, manually modifying the DOM.
// •	The hook accepts two arguments first is Effect function The function to execute after the component renders. It can return a cleanup function if needed and the next is Dependency array which is an optional array of dependencies that determines when the effect should run. If any value in this array changes, the effect will rerun. If the array is empty ([]), the effect runs only once after the first render.

// Question 8: What is a Higher-Order Component (HOC)?
// A Higher-Order Component (HOC) is a function in React that takes a component and returns a new component with additional functionality. It's a pattern used to reuse component logic.
// HOCs do not modify the original component; instead, they create a new component with enhanced behavior.

// Question 9: What use cases would a HOC be useful?
// A Higher-Order Component  is useful in the following scenarios:
// Code Reusability: If you need to share logic (such as authentication checks, data fetching, or event listeners) between multiple components without repeating the same code.
// Component Modification: HOCs can modify a component’s props, add new props, or wrap a component with additional behavior like logging, error boundaries, or layout changes.
// Conditional Rendering: HOCs can be used to conditionally render components based on certain conditions, such as displaying a loading spinner or redirecting users if they're not logged in.

// Question 10: What does it indicate when a component is prefixed with use?
// When a React component is prefixed with use, it typically indicates that the component is a custom hook. Custom hooks are JavaScript functions that use React’s built-in hooks (like useState, useEffect, etc.) and encapsulate reusable logic. The prefix use helps differentiate custom hooks from other types of components and indicates that the function follows the rules of hooks.

// Question 11: What is a Generic type in TypeScript?
// A Generic type in TypeScript is a way to define a function, class, or interface that works with any data type while maintaining type safety. Generics allow you to create reusable components or functions that can work with multiple data types.

// Question 12: Controlled vs Uncontrolled inputs in React
// •	Controlled: Input value is managed by React state.
// •	Uncontrolled: Input value is managed by the DOM, using refs to access the value.
// Overall Controlled inputs sync the value with React state, while uncontrolled inputs do not.
