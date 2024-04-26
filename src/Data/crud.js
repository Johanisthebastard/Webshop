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



export async function addToy(toy) {
	
	await addDoc(collectionRef, toy)
}





