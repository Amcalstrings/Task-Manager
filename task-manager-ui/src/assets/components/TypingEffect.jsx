import {useState, useEffect} from 'react'


const TypingEffect = ({ text, typingSpeed=100, className='', }) => {
    const [displayedText, setDisplayedText] = useState('');
    // const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        setDisplayedText('');
        // setCurrentIndex(0)

        if(!text || typeof text !== "string") return;
        
        let index = 0;
        const interval = setInterval(() =>{
            if(index < text.length){
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            }else{
                clearInterval(interval)
            }

        }, typingSpeed);

        return () => clearInterval(interval);
    }, [text, typingSpeed])
    
  return (
    <div className={`${className}`}>{displayedText}</div>
    
  )
}

export default TypingEffect