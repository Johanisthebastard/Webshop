// crud.js

import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './fire.js';

const collectionName = 'Toys';
const collectionRef = collection(db, collectionName);

export async function getToys() {
    const toysSnapshot = await getDocs(collectionRef);
    const toysList = toysSnapshot.docs.map((doc) => withKey(doc));
    return toysList;
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

export async function addToy(toy) {
    await addDoc(collectionRef, toy);
}

export async function removeToy(toyId) {
    const toyRef = doc(collectionRef, toyId);
    await deleteDoc(toyRef);
}

export async function updateToy(toyId, updatedToy) {
    const toyRef = doc(collectionRef, toyId);
    await updateDoc(toyRef, updatedToy);
}
