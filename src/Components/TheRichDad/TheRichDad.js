import "./therichdad.css";
import React, { useState, useEffect } from "react";
import words from "./words.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const TheRichDad = () => {
    const [point, setPoint] = useState(0);
    const [wordPoint, setWordPoint] = useState(0);
    const [word, setWord] = useState("");
    const [answers, setAnswers] = useState({answer0: "", answer1: "", answer2: "", answer3: ""});
    const [selectedAnswers, setSelectedAnswers] = useState([null, null, null, null]);

    const getRandomWords = () => {
        // Reset all selectedAnswer states
        setSelectedAnswers([null, null, null, null]);

        const allWords = Object.keys(words);
        
        // Select a random word
        const selectedWord = allWords[Math.floor(Math.random() * allWords.length)];
        const selectedAnswer = words[selectedWord];
        setWord(selectedWord);
    
        // Select three random answers (including the correct one)
        const randomAnswers = [selectedAnswer];
        while (randomAnswers.length < 4) {
            const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
            const randomAnswer = words[randomWord];

            if (!randomAnswers.includes(randomAnswer) && randomWord !== selectedWord) {
                randomAnswers.push(randomAnswer);
            }
        }

        // Shuffle the answers array
        shuffle(randomAnswers);

        // Set the answers in the state
        setAnswers({
            answer0: randomAnswers[0],
            answer1: randomAnswers[1],
            answer2: randomAnswers[2],
            answer3: randomAnswers[3],
        });
    };

    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    // Run the initialization logic when the component mounts
    useEffect(() => {
        getRandomWords();
    }, [point]); // Empty dependency array ensures this runs only once on mount

    const checkAnswer = (answer, index) => {
        const isCorrect = answer === words[word];

        // Update the selectedAnswer for styling based on the index
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = isCorrect ? "correct" : "wrong";
        setSelectedAnswers(newSelectedAnswers);

        // Add shadow class based on correctness
        setTimeout(() => {
            // Remove shadow class after 500ms
            const resetSelectedAnswers = [...selectedAnswers];
            resetSelectedAnswers[index] = null;
            setSelectedAnswers(resetSelectedAnswers);

            // If the answer is correct, proceed to the next word
            if (isCorrect) {
                setWordPoint(0);
                setPoint(point + 1);
                getRandomWords();
            } else {
                setWordPoint(prevWordPoint => prevWordPoint - 1);
                
                if(wordPoint === -2) {
                    toast.error("Looks like the word is pulling a magic trick on you! Time to learn its secrets. 🎩✨");
                }
            }
        }, 500);
    };
    

    return (
        <div className="outerContainer">
            <div className="container">
                <div className={'word'}>
                    {word}
                </div>
                <div className="answers">
                    {Object.keys(answers).map((key, index) => (
                        <div
                            key={index}
                            className={`answer ${selectedAnswers[index]}`}
                            onClick={() => checkAnswer(answers[key], index)}
                        >
                            {answers[key]}
                        </div>
                    ))}
                </div>
            </div>
            <div className="point">
                Total Points: {point}
            </div>
            <ToastContainer position="bottom-left" />
        </div>
    );
}

export default TheRichDad;