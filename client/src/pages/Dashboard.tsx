import React from "react"
import axios from "axios"

const api = "http://localhost:5656/box_breaks"

const Dashboard = () => {
  const [listOfBreaks, setListOfBreaks] = React.useState([])

  React.useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        const tempArr: any = []

        response.data.forEach((entry: any) => {
          tempArr.push(entry)
        })

        setListOfBreaks(tempArr)
      })
      .catch((error) => {
        console.log(222, error)
      })
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {listOfBreaks.map((boxBreak: any, idx: number) => {
        return <p key={idx}>{boxBreak.break_name}</p>
      })}
    </div>
  )
}

export default Dashboard
