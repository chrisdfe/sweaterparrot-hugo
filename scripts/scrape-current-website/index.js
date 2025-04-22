import https from 'https';
import { Stream } from 'stream';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import fetch from "node-fetch";
import { JSDOM } from 'jsdom';
import path from 'path';

const ART_DIR = './content/art/'
const PROJECTS_DIR = './content/projects/'
const CACHE_FILE_BASE_PATH = './scripts/scrape-current-website/cache/';

const SITE_URL = "https://sweaterparrot.com"

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function makeRequest(url) {
  console.log(`Making request to ${url}`)
  // very crude rate limiting
  await sleep(500);
  const response = await fetch(url);
  return response.text()
}

const getCacheFilenameForUrl = (url) =>
  CACHE_FILE_BASE_PATH +
  url
    .replace('https://', '')
    // trailing slash
    .replace(/\/$/, '')
    // other slashes
    .replace('/', '-')
    .replace('.com', '')
  ;

const getArtDirnameFromUrl = (url) =>
  url
    .replace(SITE_URL, '')

async function readFromCacheOrMakeRequest(url) {
  var cacheFilename = getCacheFilenameForUrl(url);

  // make base cache folder if it doesnt exist already
  mkdir(CACHE_FILE_BASE_PATH, { recursive: true });

  let content;
  try {
    const contentBuffer = await readFile(cacheFilename);
    console.log(`Reading file "${cacheFilename}" from cache`);
    content = contentBuffer.toString();
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log(`No cache file "${cacheFilename}" found`);
      content = await makeRequest(url);
      await writeFile(cacheFilename, content)
    } else {
      throw e;
    }
  }

  return content
}

async function downloadImageFromUrlAndSaveToFile(url, filename) {
  console.log(`Downloading image from ${url}`)
  console.log(`and saving it to ${filename}`)
  await sleep(1000)
  return new Promise((resolve, reject) => {
    https.request(url, function (response) {
      // const data = new Stream();
      let data = Buffer.from([]);

      response.on('data', function (chunk) {
        data = Buffer.concat([data, chunk])
      });

      response.on('end', async function () {
        await writeFile(filename, data)
        resolve();
      });
    }).end();
  });
}

// const parseSrcset = (srcsetString) =>
//   srcsetString
//     .split(', ')
//     .map((chunk) => {
//       const [url, size] = chunk.split(' ');
//       return { url, size }
//     });

async function getCurrentArtCount() {
  const files = await readdir(PROJECTS_DIR);
  return files.length;
}

// async function getArtImageUrlsFromDetailsPage(relativeHref) {
//   const url = SITE_URL + relativeHref;
//   const content = await readFromCacheOrMakeRequest(url);
//   const dom = new JSDOM(content)
//   const imageNodeList = dom.window.document
//     .querySelectorAll('.e2e-site-project-module-image')

//   const imageSrcs = Array.from(imageNodeList)
//     .map(node => node.getAttribute('data-src'));

//   console.log("imageNodeList: " + imageNodeList.length);
//   console.log("imageSrcs: " + imageSrcs);

//   return imageSrcs;
// }
function getLargestSizeFromSrcset(srcset) {
  console.log("srcset: ")
  console.log(srcset)
  const chunks = srcset.split(', ');
  const lastChunk = chunks[chunks.length - 1];

  // these chunks will be strings like "<image url> <size>"
  const [url, _] = lastChunk.split(' ');
  return url;
}

async function createArtFilesFromHTML(node) {
  const relativeHref = node.getAttribute('href')
  const title = node.querySelector('.title').textContent;
  console.log(`creating art file for: ${title}`);
  const date = node.querySelector('.date').textContent;

  const currentArtCount = await getCurrentArtCount();
  const weight = (currentArtCount + 1) * 10;

  // remove leading slash
  const slug = relativeHref.replace(/^\//, '');

  // TODO 
  // - create base directory (if it doesn't ext)
  const currentArtworkBaseDir = path.join(ART_DIR, slug);
  await mkdir(currentArtworkBaseDir, { recursive: true });

  // - create images directory
  const imagesDir = path.join(ART_DIR, slug, 'images');
  await mkdir(imagesDir, { recursive: true });

  // - download cover image, save it as images/thumbnail.png or image/{slug}-thumbnail.png
  const thumbnailSrcset =
    node
      .querySelector('.cover__img')
      .getAttribute('data-srcset');
  const thumbnailSrc = getLargestSizeFromSrcset(thumbnailSrcset);

  const thumbnailFilename = `${relativeHref}-mainimage.png`;

  // relative to cwd
  const fullThumbnailPath = path.join(imagesDir, thumbnailFilename);
  await downloadImageFromUrlAndSaveToFile(thumbnailSrc, fullThumbnailPath);

  // - create index.md with front matter, including: 
  //    - params.thumbnailImage
  const now = new Date(Date.now()).toJSON();
  const indexContent = `+++
date = '${now}'
draft = true
title = "${title}"
[params]
  mainImage = "${path.join('images', thumbnailFilename)}"
+++`;
  const indexPath = path.join(currentArtworkBaseDir, 'index.md');
  await writeFile(indexPath, indexContent);
}

async function createArtFilesFromCurrentSite() {
  const content = await readFromCacheOrMakeRequest(SITE_URL);
  const dom = new JSDOM(content)

  const projectCovers = dom.window.document.querySelectorAll('.project-cover');

  console.log(`creating ${projectCovers.length} art directories`);
  await createArtFilesFromHTML(projectCovers[0]);
  let idx = 0;
  for (const projectCover of projectCovers) {
    console.log(`art ${idx++}/${projectCovers.length}`);
    await createArtFilesFromHTML(projectCover)
  }
}

async function main() {
  await createArtFilesFromCurrentSite();
  console.log("done.")
}

main();