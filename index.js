const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const createDirectory = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

const resizeAndSaveImage = (inputImagePath, outputDirectory, imageName, width, height, extension) => {
  const outputImagePath = path.join(outputDirectory, `${imageName}.${extension}`);

  sharp(inputImagePath)
    .resize(width, height)
    .toFile(outputImagePath, (err, info) => {
      if (err) {
        console.error(`Erro ao redimensionar a imagem ${imageName}:`, err);
      } else {
        console.log(`Imagem ${imageName} redimensionada com sucesso:`, info);
      }
    });
};

const images = [
  {
    name: "android-chrome-192x192",
    size: {
      height: 192,
      width: 192
    },
    extension: "png"
  },
  {
    name: "android-chrome-512x512",
    size: {
      height: 512,
      width: 512
    },
    extension: "png"
  },
  {
    name: "apple-touch-icon",
    size: {
      height: 180,
      width: 180
    },
    extension: "png"
  },
  {
    name: "favicon-16x16",
    size: {
      height: 16,
      width: 16
    },
    extension: "png"
  },
  {
    name: "favicon-32x32",
    size: {
      height: 32,
      width: 32
    },
    extension: "png"
  },
  {
    name: "favicon",
    size: {
      height: 32,
      width: 32
    },
    extension: "ico"
  },
  {
    name: "maskable_icon",
    size: {
      height: 225,
      width: 225
    },
    extension: "png"
  }
];

const inputImagePath = 'input/input.png';

const outputDirectory = 'output';

createDirectory(outputDirectory);

images.forEach(image => {
  resizeAndSaveImage(inputImagePath, outputDirectory, image.name, image.size.width, image.size.height, image.extension);
});
