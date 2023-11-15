

import db from './firebaseConfig';

const getDataFromFirestore = async (collectionName) => {
  try {
    const collectionRef = db.collection(collectionName);
    const snapshot = await collectionRef.get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Ошибка при получении данных из Firestore: ", error);
    throw error;
  }
};

export { getDataFromFirestore };
