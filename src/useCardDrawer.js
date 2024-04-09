import {useState} from "react";
import axios from 'axios';

const useCardDrawer = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [value, setValue] = useState('');
    const [suit, setSuit] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(''); 
    
    const drawCard = async () => {
        
        setLoading(true); 
        setError('');

        try {

            const response = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
            const {cards} = response.data;
            if (cards && cards.length > 0) {
                const {image, value, suit} = cards[0];
                setImageUrl(image);
                setValue(value);
                setSuit(suit);

                console.log(value, suit)
            }
        } catch (err) {
            setError('Failed to draw a card. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    
    return {drawCard, imageUrl, value, suit}; 
}

export default useCardDrawer; 