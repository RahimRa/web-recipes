import React from 'react'
import cookingVideo from '../../video/production.mp4'
import styles from './VideoComponent.module.css'

export const VideoComponent = () => {
  return (
    <video className={styles.videoTag} autoPlay loop muted  >
      <source src={cookingVideo} type='video/mp4' />
    </video>
  )
}
