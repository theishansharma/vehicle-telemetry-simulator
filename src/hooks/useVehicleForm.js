import { useState } from 'react'

const INITIAL_VEHICLES = [
  { value: 'V001', label: 'V001' },
  { value: 'V002', label: 'V002' },
  { value: 'V003', label: 'V003' },
]

/**
 * Hook for vehicle form state and all form-related handlers.
 */
export function useVehicleForm() {
  const [vehicleId, setVehicleId] = useState('')
  const [vehicles, setVehicles] = useState(INITIAL_VEHICLES)
  const [batteryPercent, setBatteryPercent] = useState('')
  const [batteryCharging, setBatteryCharging] = useState('not_charging')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  function handleBatteryChange(e) {
    const v = e.target.value
    if (v === '' || /^\d*\.?\d{0,2}$/.test(v)) setBatteryPercent(v)
  }

  function addVehicle() {
    const nextNum = vehicles.length + 1
    const id = 'V' + String(nextNum).padStart(3, '0')
    setVehicles((prev) => [...prev, { value: id, label: id }])
    setVehicleId(id)
  }

  function deleteVehicle() {
    if (!vehicleId) return
    setVehicles((prev) => prev.filter((v) => v.value !== vehicleId))
    setVehicleId('')
  }

  function randomLatLng() {
    const lat = (Math.random() * 180 - 90).toFixed(6)
    const lng = (Math.random() * 360 - 180).toFixed(6)
    setLatitude(lat)
    setLongitude(lng)
  }

  function randomBattery() {
    setBatteryPercent((Math.random() * 100).toFixed(2))
  }

  return {
    vehicleId,
    setVehicleId,
    vehicles,
    batteryPercent,
    handleBatteryChange,
    batteryCharging,
    setBatteryCharging,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    addVehicle,
    deleteVehicle,
    randomLatLng,
    randomBattery,
  }
}
