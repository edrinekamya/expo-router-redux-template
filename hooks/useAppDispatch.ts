// Import necessary modules and types
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

// Define the useAppDispatch function, which returns a type-safe app dispatch function
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
