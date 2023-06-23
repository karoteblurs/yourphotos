'use client'
import { useState } from "react"

export default function Follow() {
  const [follow, setFollow] = useState(false)

  function followHandler() {
    setFollow(follow => !follow)
    console.log(follow)
  }

  return (
    <button
      onClick={followHandler}
      className='follow-btn'>
      {follow ? 'Unfollow' : 'Follow +'}
    </button>
  )
}


        