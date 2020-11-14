import { Recognition} from '../../function/speech/recognition'
import React, { 
    useRef,
    useState,
  } from 'react'

const k = require('kuromoji')

const Search = () => {
    const recognition = useRef<Recognition>();
    // const [input, setInput] = useState<string>('')
    // const [initial, setInitial] = useState<boolean>(true)
    // const [loading, setLoading] = useState<boolean>(false)
    // const [post, setPost] = useState([])

    const state = {
        content: ''
    }

    const onStart = () => {
        const r = (recognition.current = new Recognition());
        r.onFinal = (c) => {
        r.toggle()
        state.content = c

        k.builder({ dicPath: "/dict" }).build((err, tokenizer) => {
            if(err){
              console.log(err)
            } else {
              const tokens = tokenizer.tokenize(state.content)
              console.log(tokens)
            }
          })
    }}

    const onStop = () => {
        const r = (recognition.current = new Recognition());
        r.stop()
    }

    return ( 
        <button onClick={onStart} >start</button>

    )
}

export default Search