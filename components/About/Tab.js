import React from 'react'

import styles from './Tab.module.css'

const Tab = ({ name, selected, type, clickHandler }) => {
  const selectedStyle = {
    backgroundColor: '#56FFC6',
    color: 'white',
  }

  const defaultStyle = {
    backgroundColor: '#2C304D',
    color: '#9DA0AC',
  }

  return (
    <div
      id={type}
      className={styles.container}
      style={selected ? selectedStyle : defaultStyle}
      onClick={clickHandler}
    >
      {name}
    </div>
  )
}

export default Tab;
