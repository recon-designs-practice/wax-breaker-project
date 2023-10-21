import React from 'react'

type Props = {
  message: string
}

const Signin = (props: Props) => {
  return (
    <div>{props.message}</div>
  )
}

export default Signin