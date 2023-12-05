import "./therichdad.css";
import React, { useState, useEffect } from "react";
import words from "./words.js";

const TheRichDad = () => {
    const [point, setPoint] = useState(0);
    const [word, setWord] = useState("");
    const [answers, setAnswers] = useState({answer0: "", answer1: "", answer2: "", answer3: ""});

    const getRandomWords = () => {
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

    const checkAnswer = (answer) => {
        if (answer === words[word]) {
            setPoint(point + 1);
        }

        console.log(point)
    }

    return (
        <div className="container">
            <div className="word">{word}</div>
            <div className="answers">
                <div className="answer" onClick={() => checkAnswer(answers.answer0)}>
                    {answers.answer0}
                </div>
                <div className="answer" onClick={() => checkAnswer(answers.answer1)}>
                    {answers.answer1}
                </div>
                <div className="answer" onClick={() => checkAnswer(answers.answer2)}>
                    {answers.answer2}
                </div>
                <div className="answer" onClick={() => checkAnswer(answers.answer3)}>
                    {answers.answer3}
                </div>
            </div>
        </div>
    )
}

export default TheRichDad;