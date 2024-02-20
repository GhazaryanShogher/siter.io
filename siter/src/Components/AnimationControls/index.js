import React from 'react';
import './AnimationControls.scss'

const AnimationControls = ({ selectedElement, onUpdate, selectedItemId }) => {
  const handleChange = (property, value) => {
    onUpdate(property, value);
    const element = document.getElementById(selectedItemId);

    if (!element) return;
    switch (property) {
      case 'x':
        element.style.transform = `translateX(${value}px)`;
        break;
      case 'y':
        element.style.transform = `translateY(${value}px)`;
        break;
      case 'opacity':
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = value;
        break;
      case 'speed':
        element.style.transition = `transform ${value}s linear`;
        element.style.transform = `translateX(${value * 100}px)`;
        break;
      case 'blur':
        element.style.filter = `blur(${value}px)`;
        break;
      case 'scale':
        element.style.transform = `scale(${value})`;
        break;
      case 'delay':
        element.style.transitionDelay = `${value}s`;
        break;
      case 'easing':
        element.style.transitionTimingFunction = value;
        break;
      case 'isReplay':
        if (value) {
          console.log("val",value);
          // Add the replay class
          element.classList.add('replay-animation');
        } else {
          // Remove the replay class
          element.classList.remove('replay-animation');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="animation-controls">
      <div className='range-item'><label>X</label>
      <input
        type="range"
        value={selectedElement.x}
        min="-100"
        max="100"
        step="1"
        onChange={(e) => handleChange('x', e.target.value)}
      />
      <label>{selectedElement.x}</label>
      </div>
      <div className='range-item'><label>Y</label>
      <input
        type="range"
        className='range-input'
        value={selectedElement.y}
        min="-100"
        max="100"
        step="1"
        onChange={(e) => handleChange('y', e.target.value)}
      />
      <label>{selectedElement.y}</label>
      </div>
      <div className='range-item'><label>Opacity</label>
      <input
        type="range"
        value={selectedElement.opacity}
        min="0"
        max="1"
        step="0.1"
        onChange={(e) => handleChange('opacity', e.target.value)}
      />
      <label>{`${selectedElement.opacity *100}%`}</label>
      </div>
      <div className='range-item'><label>Scale</label>
      <input
        type="range"
        value={selectedElement.scale}
        min="0.1"
        max="2"
        step="0.1"
        onChange={(e) => handleChange('scale', e.target.value)}
      />
      <label>{selectedElement.scale}</label>
      </div>
      <div className='range-item'><label>Blur</label>
      <div><input
        type="range"
        value={selectedElement.blur}
        min="0"
        max="10"
        step="0.5"
        onChange={(e) => handleChange('blur', e.target.value)}
      />
      <label>{selectedElement.blur}</label>
      </div>
      </div>
      <div className='range-item'><label>Speed</label>
      <div><input
        type="range"
        value={selectedElement.speed}
        min="0"
        max="2"
        step="0.1"
        onChange={(e) => handleChange('speed', e.target.value)}
      />
      {`${selectedElement.speed}s`}
      </div>
      </div>  
      <div className='range-item'><label>Delay</label>
      <div><input
        type="range"
        value={selectedElement.delay}
        min="0"
        max="5"
        step="0.1"
        onChange={(e) => handleChange('delay', e.target.value)}
      />
      <label>{`${selectedElement.delay}s`}</label>
      </div>
      </div>
      <div className='item-height'><div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="easing" style={{ marginRight: '1rem' }}>Easing</label>
  <select
    id="easing"
    value={selectedElement.easing}
    onChange={(e) => handleChange('easing', e.target.value)}
    style={{
      border: 'none',
      outline: 'none',
    }}
  >
    <option value="linear">Linear</option>
    <option value="ease">Ease</option>
    <option value="ease-in">Ease In</option>
    <option value="ease-out">Ease Out</option>
    <option value="ease-in-out">Ease In Out</option>
  </select>
</div>
</div>
<div className='item-height'><label className="switch-label">
  Replay
  <div className="switch-wrapper">
    <input
      type="checkbox"
      value={selectedElement.isReplay}
      checked={selectedElement.isReplay}
      onChange={(e) =>  handleChange('isReplay', e.target.value)}
    />
    <span className="slider"></span>
  </div>
</label></div>
    </div>
  );
};

export default AnimationControls;
