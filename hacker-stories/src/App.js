import React, {useState} from 'react';


import './App.css';
import List from './components/List';
import Search from './components/Search';


const App = () => {

    const stories = [
    {
      title: 'React',
      url: 'https://react.org/',
      author: 'Elena Poos',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Batman',
      num_comments: 2,
      points: 5,
      objectID: 1
    },
  ]


  const [searchTerm, setSearchTerm] = useState('')


  const handleSearch = (event) => {
    
    setSearchTerm(event.target.value);
    
  }


  //if new filtered array includes searchTerm, it returns new array, otherwise old array persists.
  const searchedStories = stories.filter(story => 
      story.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
      <hr/>

      <List list={searchedStories}/>  
    </div>
  );
}

export default App;
