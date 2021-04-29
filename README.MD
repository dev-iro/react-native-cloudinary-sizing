# Get Cloudinary Sizing URI
This package will simplify interaction with cloudinary.

## Installation
`npm i react-native-cloudinary-sizing --save`

## Sample
```js
const cloudinaryImage = new CloudinaryImage('CompanyId', 'CompanyName', width, height);
const imageUri = cloudinaryImage.getImageUri('imageId', 'imageName');
```

