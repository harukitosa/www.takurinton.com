import { Recognition} from '../../function/speech/recognition'
import React, { 
    useRef,
    useState,
  } from 'react'

const Search = () => {
    const recognition = useRef<Recognition>();
    const [input, setInput] = useState<string>('')
    const [initial, setInitial] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState([])
    

    const state = {
        content: ''
    }

    const onStart = () => {
        setLoading(true)
        setInitial(false)
        const r = (recognition.current = new Recognition());
        r.onFinal = (c) => {
        r.toggle()
        state.content = c
        console.log(c)
    } }

    const onStop = () => {
        const r = (recognition.current = new Recognition());
        r.stop()
    }

    return ( 
        <button onClick={onStart} >start</button>

    )
}

export default Search