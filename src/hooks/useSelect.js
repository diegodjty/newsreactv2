import React, {useState} from 'react'

const useSelect = (initialState, options) => {
    

    const [state,setState] = useState('')
    
    const SelectNews = () =>(
        <select 
            name="" 
            id=""
            className="browser-default"
        >
            <option value="">Select</option>

        </select>
    )

    return [state, SelectNews]

}

export default useSelect
