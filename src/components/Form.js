import React from 'react'
import useSelect from '../hooks/useSelect';

import styles from './Form.module.css'


const Form = ({setCategory}) => {

    

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]
    
    const [category, SelectNews] = useSelect('general', OPTIONS);

    const search = e =>{
        e.preventDefault();
        setCategory(category)
    }

    

    return (
        <div className={`row ${styles.finder}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={search}
                    value={category}
                >
                    <h2 className={styles.heading}>Get news by category</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
