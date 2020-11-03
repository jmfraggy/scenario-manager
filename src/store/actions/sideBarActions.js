// import axios from 'axios';

// Import action types
import {
    CURRENT_PAGE
} from './types';

export const setCurrentPage = (page) => {
    return {
        type: CURRENT_PAGE,
        payload: page
    };
};
