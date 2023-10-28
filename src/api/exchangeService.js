import axios from 'axios';

class ExchangeService {
    constructor() {
        this.baseURL = 'https://openexchangerates.org/api/';
        this.apiKey = 'e8b7ae40c08c47ecb04685413c3f1ecb';
    }

    async getLatestRates() {
        try {
            const response = await axios.get(`${this.baseURL}latest.json?app_id=${this.apiKey}`);
            if (response.status === 200) {
                return response.data;
            }
            return new Error('Не удалось получить данные о курсе валют');
        } catch (error) {
            console.error("Ошибка при получении данных о курсе валют: ", error);
            throw error;
        }
    }
}

export default new ExchangeService();
