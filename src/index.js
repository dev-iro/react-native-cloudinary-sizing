import React from 'react'
import { PixelRatio } from "react-native"
  
export default class CloudinaryImage {
  imageSize
  company
  uri

  constructor(id, name, width, height) {
    this.company = {
      id: id,
      name: name
    }
    this.imageSize = {
      width: width === 'auto' ? width : PixelRatio.getPixelSizeForLayoutSize(width),
      height: height === 'auto' ? PixelRatio.getPixelSizeForLayoutSize(width * 4 / 3) : PixelRatio.getPixelSizeForLayoutSize(height)
    }
  }

  getImageUri(id, name) {
    return `https://res.cloudinary.com/${this.company.id}/image/upload/c_crop,h_${this.imageSize.height},w_${this.imageSize.width},c_fill//v${id}/${this.company.name}/${name}`
  }
}