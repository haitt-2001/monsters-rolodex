import React from 'react'
import './SearchBox.style.css'

export const SearchBox = ({placeHolder, OnChangeHandler}) => {
    return (

        <input className="search"
          type="search"
          placeholder={placeHolder}
          onChange={OnChangeHandler}
        />
    )
}
