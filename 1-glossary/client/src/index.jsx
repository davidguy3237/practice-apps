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

  // GET initial list of words on mount
  useEffect(() => {
    axios.get('/words')
    .then(response => {
      console.log('MOUNT', response.data);
      setWords(response.data);
    })
  }, []);

  // Since useEffect always runs once on mount,
  // I'm using useRef to check if the component is mounted
  // before a search GET request is done.
  useEffect(() => {
    if (isMounted.current) {
      searchTimeout = setTimeout(() => {
        axios.get('/words', {
          params: {
            search: search
          }
        })
        .then(response => setWords(response.data))
      }, 500);

      return () => clearTimeout(searchTimeout);
    } else {
      isMounted.current = true;
    }
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault();

    const word = {
      word: e.target[0].value,
      definition: e.target[1].value
    };

    document.getElementById('word-text-bar').value = '';
    document.getElementById('description-text-bar').value = '';

    axios.post('/words', word)
      .then(response => setWords(response.data))
      .catch(err => console.error('ERROR: FAILED TO ADD TO DATABASE, WORD EXISTS ALREADY'))
  };

  const handleDelete = (wordObj) => {
    axios.delete('/words', {data: wordObj})
      .then(response => setWords(response.data))
  };

  const handlePatch = (wordObj) => {
    wordObj.definition = document.getElementById(wordObj.word + '-definition').value;
    wordObj.word = document.getElementById(wordObj.word).value;

    axios.patch('/words', wordObj)
      .then(response => setWords(response.data));
  };

  return (
    <div>
      <header>Glossary</header>
      <div className='forms'>
      <Search setSearch={setSearch} />
      <AddWordForm handleSubmit={handleSubmit} />
      </div>
      <WordList words={words} search={search} handleDelete={handleDelete} handlePatch={handlePatch} />
    </div>
  )
}

render(<App />, document.getElementById("root"));
