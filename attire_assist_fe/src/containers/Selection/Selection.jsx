import React from 'react'
import ImageUpload from '../ImageUpload/ImageUpload';
import Bodysize from '../Bodysize/Bodysize';
import Bodytype from '../BodyType/Bodytype';

const Selection = (props) => {
    const {type, setType, gender, handleNextClick,setBodyType, setPage} = props;
  return (
    <>
        {type === 'image' ? <ImageUpload setType={setType} setBodyType={setBodyType} setPage={setPage}/> : null}
        {type === 'size' ? <Bodysize setPage={setPage} setBodyType={setBodyType} gender={gender} setType={setType} /> : null}
        {type === 'type' ? <Bodytype gender={gender} setType={setType} handleNextClick={handleNextClick} setBodyType={setBodyType}/> : null}
    </>
  )
}

export default Selection