import './App.css'
import { useVehicleForm } from './hooks/useVehicleForm'
import { useLogs } from './hooks/useLogs'
import VehicleForm from './components/VehicleForm'
import Logs from './components/Logs'

const App = () => {
  const form = useVehicleForm()
  const { logs, addLog, clearLogs, formatCommandEntry } = useLogs()

  const sendCommand = () => {
    const entry = formatCommandEntry({
      vehicleId: form.vehicleId,
      batteryPercent: form.batteryPercent,
      batteryCharging: form.batteryCharging,
      speed: form.speed,
      latitude: form.latitude,
      longitude: form.longitude,
    })
    addLog(entry)
  }

  return (
    <div className="app">
      <h1>Vehicle Telemetry Simulator</h1>
      <VehicleForm form={form} onSendCommand={sendCommand} />
      <Logs logs={logs} onClear={clearLogs} />
    </div>
  )
}

export default App
