import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api = "http://localhost:5656/box_breaks"

export const BreaksContext = React.createContext([])

export const BreaksProvider = ({ children }: any) => {
  const [allBreaks, setAllBreaks] = useState([])

  useEffect(() => {
    axios
    .get(api)
    .then((response) => {
      const tempArr: any = []

      response.data.forEach((entry: any) => {
        tempArr.push(entry)
      })

      setAllBreaks(tempArr)
    })
    .catch((error) => {
      console.log(222, error)
    })
  }, [])

  return (
    // @ts-expect-error
    <BreaksContext.Provider value={[allBreaks, setAllBreaks]}>
      {children}
    </BreaksContext.Provider>
  )
}