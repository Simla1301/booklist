import { useEffect, useState, useRef } from 'react'

const UseRef2 = () => {
    const [value, setValue] = useState(0);
    const refContainer = useRef(null);
    const isMOunted = useRef(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current);
        const name = refContainer.current.value;
        console.log(name);
    };

    useEffect(() => {
        refContainer.current.focus();
    });

    useEffect(() => {
        if ( !isMOunted.current) {
            isMOunted.current = true;
            return;
        }
        console.log('re-render');
    }, [value]);


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input type='test' id='name' ref={refContainer} className='form-input' />
                </div>
                <button type='submit' className='btn btn-block'> submit</button>
            </form>
            <h1>value : {value}</h1>
            <button onClick={() => setValue(value + 1)} className='btn'>increase</button>
        </div>
    )
}

export default UseRef2
