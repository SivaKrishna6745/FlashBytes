import React, { useState } from 'react';
import { quizData } from '../data/quiz';
import FlashCard from './FlashCard';
import { GoMute, GoUnmute } from 'react-icons/go';

const BytesBoard = () => {
    const [isMuted, setIsMuted] = useState<boolean>(false);

    return (
        <>
            <button
                className={`absolute top-10 right-10 z-10 mute-button self-start flex items-center hover:scale-105 ${
                    isMuted ? 'text-red-500 hover:text-red-400' : 'text-green-500 hover:text-green-400'
                }`}
                title={isMuted ? 'click to unmute' : 'click to mute'}
                onClick={() => setIsMuted(!isMuted)}
            >
                {isMuted ? <GoUnmute /> : <GoMute />}
                <span className="ml-2 text-sm">{isMuted ? 'Muted' : 'Sound On'}</span>
            </button>
            <ul className="bg-slate-200/5 backdrop-blur-sm p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
                {quizData.map((quizItem) => (
                    <FlashCard
                        key={quizItem.id}
                        question={quizItem.question}
                        answer={quizItem.answer}
                        isMuted={isMuted}
                    />
                ))}
            </ul>
        </>
    );
};

export default BytesBoard;
