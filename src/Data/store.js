import { create } from 'zustand';

const useStore = create((set) => ({
  toys: [], 
  cart: [],
  totalPrice: 0,
  
  setToys: newToys => set(state => ({
    toys: newToys
  })),
  
  addToCart: (toy) => 
    set((state) => ({ cart: [...state.cart, toy], totalPrice: state.totalPrice + toy.Price })),
  
  removeFromCart: (toyId) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== toyId)
    })),
    
 
}));

export default useStore;