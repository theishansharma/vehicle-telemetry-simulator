import { useState } from 'react'

export function formatCommandEntry(data) {
  const dateTime = new Date().toLocaleString(undefined, {
    dateStyle: 'short',
    timeStyle: 'medium',
  })
  const vehicleId = data.vehicleId ?? '-'
  const batteryPercent = data.batteryPercent ?? '-'
  const batteryCharging = data.batteryCharging ?? '-'
  const latitude = data.latitude ?? '-'
  const longitude = data.longitude ?? '-'
  return `[${dateTime}] vehicleId=${vehicleId} battery=${batteryPercent}% ${batteryCharging} lat=${latitude} lng=${longitude}`
}

export function useLogs() {
  const [logs, setLogs] = useState([])

  function addLog(text) {
    setLogs((prev) => [...prev, text])
  }

  function clearLogs() {
    setLogs([])
  }

  return { logs, addLog, clearLogs, formatCommandEntry }
}
