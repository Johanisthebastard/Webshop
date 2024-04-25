import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from './fire.js'


const collectionName = 'Toys'
const collectionRef = collection(db, collectionName)


export async function getToys() {
	// Skapa en referens till collection "employees" i databasen
	

	// Hämta alla dokument i collection "employees"
	const toysSnapshot = await getDocs(collectionRef)
	// console.log('getEmployees: snapshot is', employeeSnapshot)


	const toysList = toysSnapshot.docs.map((doc) => withKey(doc))
	return toysList
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

// async function addToys(toys) {
// 	// referens till collection 'employees'
// 	await addDoc(collectionRef, toys)
// }

// async function deleteToys(key) {
// 	const docRef = doc(collectionRef, key)
// 	// console.log('deleteEmployee: ', docRef);
// 	deleteDoc(docRef)
// }

// async function editToys(key, updatedToys) {
// 	// vi behöver en "collection reference"
// 	// vi skapar en referens till dokumentet vi ska ändra på
// 	// leta upp en funktion som kan uppdatera ett dokument
// 	const docRef = doc(collectionRef, key)

// 	// Två alternativ för att ändra:
// 	// updateDoc - uppdaterar ett befintligt objekt
// 	// setDoc - uppdaterar eller skapar ett objekt
// 	await updateDoc(docRef, updatedToys)
// }




