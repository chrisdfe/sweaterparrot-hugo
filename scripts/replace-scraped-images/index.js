import fs from 'fs/promises';
import path from 'path';

const ART_DIR = './content/work/'

async function renameImagesInArtDir(artDirectory) {
  const imagesPath = path.join(ART_DIR, artDirectory, 'images');

  const imageFiles = await fs.readdir(imagesPath);

  // don't do anything if we've already updated this folder
  if (imageFiles.length <= 1) return;

  console.log(imageFiles);
  console.log("---");
  const mainImageRelFilename = imageFiles.find(imageFile => imageFile.includes('mainimage'));
  const mainImageFilename = path.join(imagesPath, mainImageRelFilename);

  // I'm expecting there to be only 1 other image in here right now
  const newImageRelFilename = imageFiles.find(imageFile => !imageFile.includes('mainimage'));
  const newImageFilename = path.join(imagesPath, newImageRelFilename);

  console.log(`deleting ${mainImageFilename}`);
  await fs.rm(mainImageFilename);

  console.log(`renaming ${newImageFilename} to ${mainImageFilename}`);
  await fs.rename(newImageFilename, mainImageFilename);
}

async function main() {
  const artDirectories = await fs.readdir(ART_DIR);

  let idx = 1;
  for (const artDirectory of artDirectories) {
    await renameImagesInArtDir(artDirectory);
    console.log(`done with ${idx++}`);
  }
}

main();
