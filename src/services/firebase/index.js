import firebase from 'firebase/app';

export default async function getImage(imgUrl) {
  try {
    const imgRef = firebase.storage().refFromURL(imgUrl);
    const url = await imgRef.getDownloadURL();

    return url;
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
}
