"use client"
import { useEffect, useState } from "react"

export default function Timer({ date }: { date: Date }) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTime(calcSeconds(date, new Date())), 1000)

    return () => clearInterval(id)
  }, [date])

  return <>{time}</>
}

function calcSeconds(start: Date, end: Date) {
  return Math.round((end.getTime() - start.getTime()) / 1000)
}
