// Import necessary modules and types
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { RootState } from '@/store/configureStore';

// Define the useAppSelector function, a typed selector hook for accessing the Redux store state
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
