import React from 'react'

type Props = {
  message: string
}

const Dashboard = (props: Props) => {
  return (
    <div>{props.message}</div>
  )
}

export default Dashboard