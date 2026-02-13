import { useState } from 'react'

export const formatCommandEntry = (data) => {
  const dateTime = new Date().toLocaleString(undefined, {
    dateStyle: 'short',
    timeStyle: 'medium',
  })
  const vehicleId = data.vehicleId ?? '-'
  const batteryPercent = data.batteryPercent ?? '-'
  const batteryCharging = data.batteryCharging ?? '-'
  const speed = data.speed ?? '-'
  const latitude = data.latitude ?? '-'
  const longitude = data.longitude ?? '-'
  return `[${dateTime}] vehicleId=${vehicleId} battery=${batteryPercent}% batteryCharging=${batteryCharging === 'charging' ? true : false} speed=${speed} lat=${latitude} lng=${longitude}`
}

export const useLogs = () => {
  const [logs, setLogs] = useState([])

  const addLog = (text) => {
    setLogs((prev) => [...prev, text])
  }

  const clearLogs = () => {
    setLogs([])
  }

  return { logs, addLog, clearLogs, formatCommandEntry }
}
