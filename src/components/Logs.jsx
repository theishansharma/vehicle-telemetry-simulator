import { useRef, useEffect } from 'react'
import './Logs.css'

/**
 * Logs display: shows an array of log lines with auto-scroll to bottom.
 * @param {{ logs: string[], onClear: () => void }} props
 */
function Logs({ logs, onClear }) {
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>
      <pre ref={logOutputRef} className="log-output">
        {logs.length ? logs.join('\n') : '(no logs yet)'}
      </pre>
    </div>
  )
}

export default Logs
