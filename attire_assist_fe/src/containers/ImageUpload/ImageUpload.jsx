import React, { useState, useEffect } from 'react';
import background from '../../assets/background-1.jpg'
import styles from './ImageUpload.module.scss';
import uploadLogo from '../../assets/uploadLogo.png'
import man from '../../assets/manWoBg.png'
import woman from '../../assets/womanWoBg.png';
import {useDropzone} from 'react-dropzone';
import { getImageFitService } from '../../service/getImageFitService';

const ImageUpload = (props) => {

    const {setType, setBodyType , setPage} = props;
    const [imageFile, setImageFile] = useState("");
    const [file, setFile] = useState();
    const [baseURL, setBaseURL] = useState("");
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        var data = acceptedFiles.map(file => {
          setFile(file);
          return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })})
        setImageFile(data[0].preview);
        imageUploaded();
      }
    });
    const handleLinkClick = (type) => {
        setType(type)
        
    }
    const handleFileUpload = (e) => {
      setImageFile(URL.createObjectURL(e.target.files[0]));
      imageUploaded();
    }
    function imageUploaded() {
      let reader = new FileReader();
      var base64String;

      reader.onload = function () {
          base64String = reader.result.replace("data:", "")
              .replace(/^.+,/, "");
            console.log(base64String)
          setBaseURL(base64String);
      }
      reader.readAsDataURL(file);
  }
  async function calculate() {
    const data = await getImageFitService(baseURL);
    setBodyType(data.name)
    setPage(3);
  }
  useEffect(()=>{
    file && imageUploaded();
  }, [file])
  return (
    <>
    <h1 className={styles.imageUploadTitle}>YOUR IMAGE CAN UNLEASH YOUR BEST ATTIRE</h1>
    <div className={styles.container}>

        <img src={background} alt='background' />
        
        <div className={styles.positionContainer}>
            <div className={styles.poseContainer}>
                <img src={man} alt='man pose' />
                <img src={woman} alt='woman pose' />
            </div>
            <div className={`${styles.detailsContainer} ${imageFile.length && styles.paddingZero}`}>
              {!imageFile.length?
              <div {...getRootProps({className: 'dropzone'})} className={styles.wrapper}>

                <img className={styles.uploadImage} src={uploadLogo} alt='upload' />
                <p>Drag and drop your image here</p>
                <p>or</p>
                <input className={styles.button} type='file' onChange={handleFileUpload} />
                {/* <button onClick={uploadImageHandler}>Upload Image</button> */}
              </div>:
                <img className={styles.file} src={imageFile} alt='upload' />}
                <h6 onClick={() => handleLinkClick('size')}>Use my Body Size instead</h6>
                <h6 onClick={() => handleLinkClick('type')}>Use my Body Type instead</h6>
            </div>
        </div>
        <p className={styles.poseDescription}>Strike this pose</p>
        <button className={styles.nextButton} onClick={calculate}>Next</button>
      </div>
      <div className={styles.rulesWrapper}>
        <p>Distance: Position the camera 6 to 7 feet (approximately 2 to 3 meters) away from the subject.</p>
        <p>Format: The image can be in any file format.</p>
        <p>File Size: Ensure the file size is less than 5 MB</p>

      </div>
    </>
  )
}

export default ImageUpload