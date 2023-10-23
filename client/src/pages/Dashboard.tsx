import React from "react"
import axios from "axios"
import Card from "../components/card/Card"

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
    <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
      <h1>Dashboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: '20px'
        }}
      >
        {listOfBreaks.map((boxBreak: any, idx: number) => {
          console.log(boxBreak)
          return (
            <Card
              key={idx}
              style={{
                gridColumn: "span 3",
              }}
            >
              <h3>{boxBreak.break_name}</h3>
              <p>{boxBreak.break_date}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
