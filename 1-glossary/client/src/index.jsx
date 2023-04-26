import axios from 'axios';
import React from "react";
import { render } from "react-dom";
const {useState, useEffect, useRef} = React;
import AddWordForm from './components/AddWordForm.jsx';
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';

const App = (props) => {

  const [words, setWords] = useState([]);
  const [search, setSearch] = useState('');
  let isMounted = useRef(false);
  let searchTimeout = null;
  useEffect(() => { // GET list of words on mount
    axios.get('/words')
    .then(response => {
      console.log('MOUNT', response.data);
      setWords(response.data);
    })
  }, []);

  // Since useEffect always runs once on mount,
  // I'm using useRef to check if the component is mounted yet
  // before a search GET request is done.
  useEffect(() => {
    if (isMounted.current) {
      searchTimeout = setTimeout(() => {
        axios.get('/words', {
          params: {
            search: search
          }
        })
        .then(response => {
          console.log('SEARCH', response.data)
          setWords(response.data);
        })
      }, 500);

      return () => {clearTimeout(searchTimeout);}
    } else {
      isMounted.current = true;
    }
  }, [search])

  const handleSubmission = (e) => {
    e.preventDefault();

    const word = {
      word: e.target[0].value,
      definition: e.target[1].value
    };

    document.getElementById('word-text-bar').value = '';
    document.getElementById('description-text-bar').value = '';

    axios.post(e.target.action, word)
      .then(response => {
        setWords(response.data);
      })
  }

  return (
    <div>
      <div className='forms'>
      <Search setSearch={setSearch} />
      <AddWordForm handleSubmission={handleSubmission}/>
      </div>
      <WordList words={words} />
    </div>
  )
}

render(<App />, document.getElementById("root"));
