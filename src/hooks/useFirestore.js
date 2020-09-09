import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // projectFirestore.collection(....) will give us a specific collection from DB
    // onSnapshot will fire a callback FN whenever a change is made in the collection and also when it's initialize everything
    // onSnapshot will subscribe to a listener in the DB, this listener will update our component whenever he change
    // orderBy will from Firebase will do the ordering from the new added item to the old
    // projectFirestore.collection() will return for us a FN, that FN will unsubscribe from the document listener if we executed
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        // forEach here is a Firebase FN not the Array Method
        // .data() is a Firebase FN to convert the SnapShot object
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
