import React from 'react'

export default function List() {

    const list = [
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
          author: 'Dan Abramov',
          num_comments: 2,
          points: 5,
          objectID: 1
        },
      ]


    return (
        <>
            {
            list.map(item => {
          return (
            <div key={item.objectID}>
              <span>Title: {item.title}</span>
              <br></br>
              <span>Link:<a href={item.url}> {item.url}</a></span>
              <br></br>
              <span>Author: {item.author}</span>
              <br></br>
              <span>Comments: {item.num_comments}</span>
              <br></br>
              <span>Points :{item.points}</span>
              <hr></hr>
            </div>
            )
        })
      }
        </>
    )
}
