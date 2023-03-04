import React from 'react';

const style = {
    background: 'black',
    color: '#33e6ff',
    border: '2px solid #33e6ff',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={ onClick }>
        { value }
    </button>
        
)



export default Square 

