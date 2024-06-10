import React, { useState, useEffect } from 'react';

const phrase: string = "Tout juste diplômé du titre RNCP concepteur développeur d'application (Bac + 3) via une alternance React / React-native d'un an, j’ai aussi eu la chance de me développer sur plusieurs technologies durant mon parcours. J’aime le travail en équipe et le partage de connaissances mais je suis également capable de travailler seul. Si mon profil vous plait, je vous invite à me mettre à l'épreuve.";

const Resume: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < phrase.length) {
        setDisplayedText(prevText => prevText + phrase[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="typewriter">
      <h1 className='text-xl'>{displayedText}</h1>
    </div>
  );
};

export default Resume;
