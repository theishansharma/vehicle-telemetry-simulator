import './VehicleForm.css'

function VehicleForm({ form, onSendCommand }) {
  return (
    <>
      <div className="vehicle-row">
        <div className="button-group">
          <button type="button" className="add-vehicle-btn" onClick={form.addVehicle}>
            Add vehicle
          </button>
          <button
            type="button"
            className="delete-vehicle-btn"
            onClick={form.deleteVehicle}
            disabled={!form.vehicleId}
          >
            Delete vehicle
          </button>
        </div>
        <div className="field">
          <label htmlFor="vehicle-id">Vehicle ID</label>
          <select
            id="vehicle-id"
            value={form.vehicleId}
            onChange={(e) => form.setVehicleId(e.target.value)}
          >
            <option value="">Select vehicle...</option>
            {form.vehicles.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field-with-action">
          <div className="field">
            <label htmlFor="battery-percent">Battery %</label>
            <input
              id="battery-percent"
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              value={form.batteryPercent}
              onChange={form.handleBatteryChange}
            />
          </div>
          <button
            type="button"
            className="random-battery-btn"
            onClick={form.randomBattery}
          >
            Random battery
          </button>
          <div className="field">
            <label htmlFor="battery-state">Battery state</label>
            <select
              id="battery-state"
              value={form.batteryCharging}
              onChange={(e) => form.setBatteryCharging(e.target.value)}
            >
              <option value="charging">Charging</option>
              <option value="not_charging">Not charging</option>
            </select>
          </div>
        </div>
      </div>
      <div className="vehicle-row">
        <div className="field">
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            type="text"
            inputMode="decimal"
            placeholder="-90 to 90"
            value={form.latitude}
            onChange={(e) => form.setLatitude(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            type="text"
            inputMode="decimal"
            placeholder="-180 to 180"
            value={form.longitude}
            onChange={(e) => form.setLongitude(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="random-latlng-btn"
          onClick={form.randomLatLng}
        >
          Random lat-lng
        </button>
      </div>
      <div className="send-row">
        <button type="button" className="send-command-btn" onClick={onSendCommand}>
          Send Command
        </button>
      </div>
    </>
  )
}

export default VehicleForm
