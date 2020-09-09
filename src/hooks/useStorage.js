import { useEffect, useState } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "./../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create a reference for a new file in the storage to store my file , it's like allocating a place in the storageDB
    const storageRef = projectStorage.ref(file.name);

    // this collection if it doesn't exists firebase will created for us
    const collectionRef = projectFirestore.collection("images");

    // upload file to the reference it uses callback functions not promises
    // .on('state_changed) is a listener created by firebase
    // (snap)  this snap parameter is a snapshot in time of the upload at that moment
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // this is async code to get the url of the uploaded image in the storage
        const url = await storageRef.getDownloadURL();
        // the time of creating this record
        const createdAt = timestamp();
        // we use setUrl here to upload the link of the uploaded image to a database
        collectionRef.add({ url: url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
