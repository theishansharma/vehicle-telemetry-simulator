import { useRef, useEffect } from 'react'
import './Logs.css'
import TrashIcon from '../icons/DeleteIcon'

/**
 * Logs display: shows an array of log lines with auto-scroll to bottom.
 * @param {{ logs: string[], onClear: () => void }} props
 */
const Logs = ({ logs, onClear }) => {
  const logOutputRef = useRef(null)

  useEffect(() => {
    if (logOutputRef.current) {
      logOutputRef.current.scrollTop = logOutputRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div className="log-section">
      <div className="log-header">
        <span>Logs</span>
        <button
          type="button"
          className="log-clear-btn"
          onClick={onClear}
          title="Clear logs"
          aria-label="Clear logs"
        >
          <TrashIcon />
        </button>
      </div>
      <pre ref={logOutputRef} className="log-output">
        {logs.length ? logs.join('\n') : '(no logs yet)'}
      </pre>
    </div>
  )
}

export default Logs
