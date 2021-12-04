import { useState, useEffect } from 'react';

const list = [
  {
    id: 1,
    image: '../assets/icons/icons-store/computer-icon.png',
    title: 'Computers',
  },
  {
    id: 2,
    image: '../assets/icons/icons-store/computer-icon.png',
    title: 'Computers',
  },
  
];

const useGetCategories = (list) => {
  const [items, setItems] = useState([]);
    setItems(...list);

  return items;
}

export { useGetCategories };
