import React, {useState, useEffect, useRef} from 'react';
// import './App.css';


// NOTES FOR AFTER EVERYTHING
//
// Refactor all components in separate files
const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


const getAsyncStories = () => {
  new Promise(resolve => 
    setTimeout( 
      () => resolve({ data: {stories: initialStories} }), 2000
    )
  );
}

//CUSTOM HOOK
const useSemiPersistentState = ( key, initialState) => {
    
  const [value, setValue] = useState(
    localStorage.getItem( key )|| initialState
    );
    
  useEffect(() => {
    localStorage.setItem( key , value)
  },[value, key])

  return [value, setValue]
  }

const App = () => {

  
    

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');  
  
  const [stories, setStories] = React.useState([]);

  

  React.useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    })
  }, [])



  // function that handles removal of stories
  // @param item takes a object as argument, instead of id.
  const handleRemoveStory = ( item ) => {
    const newStories = stories.filter(story => item.objectID !== story.objectID);

    setStories(newStories);
  }


  const handleSearch = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value)
  }

  const searchStories = stories.filter(story => 
      story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  

   return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="search"
        value={searchTerm} 
        onInputChange={handleSearch}
        isFocused
      > 
      <strong>Search: </strong> 
      </InputWithLabel>

      <hr/>
      {/* onRemoveItem is the attribute/ prop that calls the handleRemoveStory variable in which the function is stored. */}
      <List 
        list={searchStories} 
        onRemoveItem={handleRemoveStory}/>
      
    </div>
  );
}

const InputWithLabel = ({
  id, 
  value,
  type = 'text', //default value 
  onInputChange,
  isFocused,
  children,
  }) => {
    
    //imperative programming of the autofocus
    const inputRef = useRef();

    useEffect(() =>{
      if(isFocused && inputRef.current){
        inputRef.current.focus();
      }
    }, [isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>  
      <input 
        id={id} 
        type={type}
        value={value} 
        onChange={onInputChange}
        ref={inputRef} 
        />
       <p>Searching for <strong>{value}</strong></p> 
    </>
  )
}


// here we need to pass the handleRemoveStory function and we gain access through props. 
const List = ({ list, onRemoveItem }) => 
  list.map(item => 
  <Item 
    key={ item.objectID } 
    item={item}
    onRemoveItem={onRemoveItem}
     />);


// here we need to pass the handleRemoveStory function and we gain access through props. 
const Item = ({item, onRemoveItem}) => {
  

  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button 
          type="button" 
          //here the handleRemoveStory's function logic is invoked, with the item as argument
          onClick={() => onRemoveItem(item)}>Dismiss
        </button>
      </span>
    </div>
  );
}




export default App;
