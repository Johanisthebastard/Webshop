import { create } from 'zustand';

const useStore = create((set) => ({
  toys: [], 
  cart: [],
  
  setToys: newToys => set(state => ({
    toys: newToys
  })),
  
  addToCart: (toy) => 
    set((state) => ({ cart: [...state.cart, toy] })),
  
  removeFromCart: (toyId) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== toyId)
    })),
    
  increaseQuantity: (toyId) =>
    set((state) => ({
      cart: state.cart.map(item => 
        item.id === toyId ? { ...item, quantity: item.quantity + 1 } : item
      )
    }))
}));

export default useStore;