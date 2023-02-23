import { React } from 'react'
import styles from './AddPhoto.module.css'
import orange from '../../img/AddRecipe/orange.png'

export const AddPhoto = ({ setImage, image }) => {
  const handleFile = (e) => {
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function () {
      setImage(reader.result)
    }
    reader.onerror = function (error) {
      alert('Error: ', error)
    }
  }
  return (
    <div className={styles.add_photo}>
      <img src={image || orange} className={styles.img} />
      <label htmlFor='file' className={styles.label}>
        Choose a Photo
      </label>
      <input
        className={styles.input_file}
        type='file'
        id='file'
        accept='image/*'
        onChange={handleFile}
      />
    </div>
  )
}
