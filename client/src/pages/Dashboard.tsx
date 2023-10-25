import { useState, useContext } from "react"
import axios from "axios"
import styled from "@emotion/styled"
import Card from "../components/card/Card"
import { Button, Input } from "be-ubiquitous"
import moment from "moment"
import { BreaksContext } from "../contexts/BreaksContext"
import Header from "../components/header/Header"
import Modal from "../components/modal/Modal"

const api = "http://localhost:5656/box_breaks"

const StyledButton = styled(Button)`
  width: 100%;
`

const Dashboard = () => {
  const [allBreaks, setAllBreaks] = useContext(BreaksContext)
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [newBreakName, setNewBreakName] = useState('')

  const deleteBreak = (breakId: string, api: string) => {
    axios
      .delete(`${api}/${breakId}`)
      .then(() => {
        axios
          .get(api)
          .then((response) => {
            const tempArr: any = []

            response.data.forEach((entry: any) => {
              tempArr.push(entry)
            })
            // @ts-expect-error
            setAllBreaks(tempArr)
          })
          .catch((error) => {
            console.log(222, error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const submitForm = (api: string) => {
    axios.post(`${api}`, {
      break_name: newBreakName
    })
    .then((response) => {
      axios
      .get(api)
      .then((response) => {
        const tempArr: any = []

        response.data.forEach((entry: any) => {
          tempArr.push(entry)
        })
        // @ts-expect-error
        setAllBreaks(tempArr)
      })
      .catch((error) => {
        console.log(error)
      })

      setNewBreakName('')
      setIsModalShowing(prevState => !prevState)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      {isModalShowing && (
        <Modal>
          <form style={{ padding: "12px" }}>
            <h4 style={{ margin: "0px" }}>Form title</h4>
            <Input
              label="Label goes here"
              // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
              onchange={(e: any) => setNewBreakName(e.target.value)}
              placeholder="Placeholder thing"
              value={newBreakName}
            />
            <Button label="Add break" onClick={() => submitForm(api)} />
          </form>
        </Modal>
      )}
      <Header>
        <h1 style={{ margin: "0px", gridColumn: "span 6" }}>Title here</h1>
        <h4
          style={{
            margin: "0px",
            paddingTop: "8px",
            gridColumn: "7 / 9",
            textAlign: "center",
          }}
        >
          16 breaks
        </h4>
        <Button
          label="New break"
          style={{ gridColumn: "12 / 15" }}
          onClick={() => setIsModalShowing(prevState => !prevState)}
        />
      </Header>
      <div
        style={{
          paddingTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "20px",
        }}
      >
        {/** @ts-expect-error */}
        {allBreaks.map((boxBreak: any, idx: number) => {
          const breakDate = moment(boxBreak.break_date).format(
            "MMMM Do YYYY, h:mm:ss"
          )

          return (
            <Card
              key={idx}
              style={{
                gridColumn: "span 3",
              }}
            >
              <h3>{boxBreak.break_name}</h3>
              <p>{breakDate}</p>
              <StyledButton
                label="Button"
                onClick={() => deleteBreak(boxBreak.box_break_id, api)}
              />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
