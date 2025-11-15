import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isDancing, setIsDancing] = useState(false)

  const toggleDance = () => {
    setIsDancing(!isDancing)
  }

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Space or Enter key to toggle
      if (event.code === 'Space' || event.code === 'Enter') {
        // Check if the target is not already a button to avoid double triggering
        if (event.target.tagName !== 'BUTTON') {
          event.preventDefault()
          toggleDance()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isDancing])

  return (
    <div className="dancing-cat-container" role="main">
      <div
        className={`cat-wrapper ${isDancing ? 'dancing' : ''}`}
        aria-live="polite"
        aria-label={isDancing ? '고양이가 춤추고 있습니다' : '고양이가 멈춰있습니다'}
      >
        <img
          src={catImage}
          alt="귀여운 주황색 고양이"
          className="cat-image"
          role="img"
        />
      </div>
      <button
        className="dance-button"
        onClick={toggleDance}
        aria-pressed={isDancing}
        aria-label={isDancing ? '춤 멈추기' : '춤 시작하기'}
      >
        {isDancing ? '멈추기' : '춤추기'}
      </button>
      <p className="instructions">
        클릭하거나 Space/Enter 키를 눌러 춤을 시작/멈추기
      </p>
    </div>
  )
}

export default DancingCat
