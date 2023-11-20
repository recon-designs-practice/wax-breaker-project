import { useState, useEffect } from "react"
import axios from "axios"
import styled from "@emotion/styled"
import moment from "moment"
import useBreaksStore from "../stores/store"
import { Button, Input } from "be-ubiquitous"
import Card from "../components/card/Card"
import Header from "../components/header/Header"
import Modal from "../components/modal/Modal"

// const api = "http://localhost:5656/box_breaks"
const api = "https://wax-breaker-db-service.onrender.com/box_breaks"

const StyledButton = styled(Button)`
  // width: 100%;
`

const StyledH3 = styled("h3")(({ theme }) => ({
  color: theme.color.onPrimary,
}))

const StyledP = styled("p")(({ theme }) => ({
  color: theme.color.onPrimary,
}))

const Dashboard = () => {
  const [newBreakName, setNewBreakName] = useState("")
  const breaks = useBreaksStore((state) => state.breaks)
  const setBreaks = useBreaksStore((state) => state.setAllStoreBreaks)
  const isNewBreakModalShowing = useBreaksStore((state) => state.isNewBreakModalShowing)
  const setIsNewBreakModalShowing = useBreaksStore((state) => state.setIsNewBreakModalShowing)

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        const tempArr: any = []

        response.data.forEach((entry: any) => {
          tempArr.push(entry)
        })

        setBreaks(tempArr)
      })
      .catch((error) => {
        console.log(222, error)
      })
  }, [setBreaks])

  useEffect(() => {
    const closeModal = (e: any) => {
      if (e.keyCode === 27) {
        if (!isNewBreakModalShowing) return

        if (isNewBreakModalShowing) {
          setIsNewBreakModalShowing()
          setNewBreakName("")
        }
      }
    }

    window.addEventListener("keydown", closeModal)

    return () => window.removeEventListener("keydown", closeModal)
  })

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
            setBreaks(tempArr)
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
    axios
      .post(`${api}`, {
        break_name: newBreakName,
      })
      .then((response) => {
        axios
          .get(api)
          .then((response) => {
            const tempArr: any = []

            response.data.forEach((entry: any) => {
              tempArr.push(entry)
            })
            setBreaks(tempArr)
          })
          .catch((error) => {
            console.log(error)
          })

        setNewBreakName("")
        setIsNewBreakModalShowing()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      {isNewBreakModalShowing && (
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
          {`${breaks.length}`}
        </h4>
        <div style={{ gridColumn: "13 / 15", display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          label="New break"
          // style={{ justifySelf: 'end' }}
          onClick={setIsNewBreakModalShowing}
        />
        </div>
        
      </Header>
      <div
        style={{
          paddingTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "20px",
        }}
      >
        {breaks.map((boxBreak: any, idx: number) => {
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
              <StyledH3>{boxBreak.break_name}</StyledH3>
              <StyledP>{breakDate}</StyledP>
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
