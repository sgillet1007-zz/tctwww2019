import React from 'react'
import photos from '../images/photos'

const photo_gallery_items = () => (
    photos.map((p, i) => (
        <span key={i}><img src={p} alt="phtos" className="photos-image" /></span>
    ))
)

export default () => (
    <div id="photos-grid">
        {photo_gallery_items()}
    </div>
)
