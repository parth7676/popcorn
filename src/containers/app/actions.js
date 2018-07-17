import { LOAD_API_CONFIG, SAVE_API_CONFIG } from './constants';
import { API_KEY } from '../../constants';

export function loadAPIConfiguration() {
    console.log("Load Config")
    return {
        type: LOAD_API_CONFIG,
        payload: {
            data: API_KEY,
        },
    }
}

export function saveAPIConfiguration(configData) {
    return {
        type: SAVE_API_CONFIG,
        payload: {
            data: configData,
        },
    }
}