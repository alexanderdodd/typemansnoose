import './Container.css'
import Count from './Count'
import Reset from './Reset'
import Results from './Results'
import TypedWords from './TypedWords'
import WordsToType from './WordsToType'

function Container() {
  return (
    <>
    <WordsToType />
    <TypedWords />
    <Count />
    <Results />
    <Reset />
    </>
  )
}

export default Container
