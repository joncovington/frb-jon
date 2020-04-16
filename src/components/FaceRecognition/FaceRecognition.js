import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({box, imgUrl}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
              <img id='inputimage' width='500px' height='auto' alt='facerecog' src={imgUrl} />
              <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}
export default FaceRecognition;