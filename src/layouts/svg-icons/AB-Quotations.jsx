import React from 'react'
const ABQuoations = (side) => {
  const direction = side === 'right' ? 'rotateZ(180deg)' :'rotateZ(0deg)'
    return (
        <div className='ab-quoations mil-up' style={{width:'20px',transform:direction}}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 791.29 791.3">
            <defs>
              <style>{`.cls-1 { fill: #f5d74c; stroke-width: 0px; }`}</style>
            </defs>
            <polygon className="cls-1" points="791.29 0 791.29 206.13 524.21 206.13 524.21 791.3 0 791.3 0 0 791.29 0" />
          </svg>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 791.29 791.3">
            <defs>
              <style>{`.cls-1 { fill: #f5d74c; stroke-width: 0px; }`}</style>
            </defs>
            <polygon className="cls-1" points="791.29 0 791.29 206.13 524.21 206.13 524.21 791.3 0 791.3 0 0 791.29 0" />
          </svg>
        </div>
      );
}

export default ABQuoations