import React, { useEffect, useState } from 'react';
import AnimationControls from '../AnimationControls/index';
import Loader from '../Loader';
import logo from '../../logo.svg';
import { ImageCard } from '../ImageCard/ImageCard';
import { getItems } from '../Utils';

const MainPage = () => {
  const [selectedElement, setSelectedElement] = useState({
    opacity: 1,
    speed: 1,
    blur: 0,
    x: 0,
    y: 0,
    scale: 1,
    delay: 0,
    easing: 'ease-in',
    isReplay: false,
  });
  const [selectedItemId, setSelectedItemId] = useState(null)
  const [spin, setSpin] = useState(false)
  const [items, setItems] = useState([])
  const handleElementUpdate = (property, value) => {
    setSelectedElement({ ...selectedElement, [property]: value });
  };
  const handlePreviewClick = () => {
    const url = `/new-page/?id=${selectedItemId}`;
    window.open(url, '_blank');
  };
  const handleItemClick = (item) => {
    setSelectedItemId(item?.id);
    const element = document.getElementById(`container-${item?.id}`);
    if (element) {
      element.classList.toggle('selected-item');
    }
  };


  useEffect(() => {
    getItems(2, 9, setSpin, setItems)
  }, [])

  return (
    <div className="main-page">
      <div className='main-page__sidebar'>
        <img src={logo} alt='Logo' />
        <button className='main-page__preview-btn' onClick={handlePreviewClick}>Preview</button>
      </div>
      <div className='main-page__centered'>{spin ? (
        <Loader />
      ) : (<div className='main-page__side-by-side'>
        <div className='main-page__content'>
          <div className='main-page__content-left-side'>
            {items?.map((v, i) => (
              <div key={`${new Date()}_${i}`} id={`container-${v?.id}`}  className={`card-container ${selectedItemId === v?.id ? 'selected-item' : ''}`}>
                <ImageCard src={v?.download_url} id={v?.id} onClick={()=>handleItemClick(v)}/>
              </div>
            ))}
          </div>
        </div>
        <div className='animation-control'>
        <AnimationControls
          selectedElement={selectedElement}
          onUpdate={handleElementUpdate}
          selectedItemId={selectedItemId}
        />
      </div></div>
      )}
      </div>
    </div>
  );
};

export default MainPage;
