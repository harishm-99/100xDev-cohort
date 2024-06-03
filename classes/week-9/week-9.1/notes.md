## Custom Hooks

Hooks were intro in react 16.8. These were introduced to provide two main things :-

1. State
2. Life Cycle Events

Lifecycle events was a part of class based react components and done using componentDidMount, componentWillUnmount, componentWillUpdate, etc. until the functional based component react library were introduced and done using useEffect.

WHat are custom hooks?

- Hooks that are user created, so that other people can use them.
- It is effectively a fn, but with the following props:-
  1. Uses another hook internally.(useState, useEffect, another custom hook)
  2. Starts with 'use'.
