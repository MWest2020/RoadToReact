import React from 'react'; 
import { render, screen } from '@testing-library/react';
import App, {
  storiesReducer,
  Item,
  List,
  SearchForm,
  InputWithLabel,
} from './App';

const storyOne = {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jorden walke',
  num_comments: 3,
  points: 4,
  objectID:0,
};

const storyTwo = {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, AndrewClark',
  num_comments: 2,
  points: 5,
  objectID: 1,
};

const stories = [storyOne, storyTwo];

describe('storiesReducer', () => {
  test('removes a story from all stories', ()=>{
    const action = { type: 'REMOVE_STORY', payload: storyOne};
    const state =  {data: stories, isLoading: false, isError: false}

    const newState = storiesReducer(state, action);
    const expectedState = {
      data: [storyTwo],
      isLoading: false,
      isError: false,
    }

    expect(newState).toStrictEqual(expectedState);
  })
})



describe('something truthy and somthing falsy',  () => {
  test('true to be true', () => {
    expect(true).toBe(true);
  })

  test('false to be fasle', () =>{
    expect(false).toBe(false);
  })
})




// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
