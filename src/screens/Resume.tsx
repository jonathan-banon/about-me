import React, { useState, useEffect } from 'react';

const resume: string = "Jeune diplômé du titre RNCP concepteur développeur d'application \n(Bac +3 via une alternance React / React-native), j’ai aussi eu la chance de me développer sur plusieurs technologies durant mon parcours tel que Symfony, Vue.js et Docker. J’aime le travail en équipe et le partage de connaissances mais je suis également capable de travailler en autonomie.";
const secondResume: string = "Si mon profil vous intéresse, je vous invite a me mettre a l'épreuve.\n \nCordialement";

const Resume: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [finishedFirstResume, setFinishedFirstResume] = useState<boolean>(false);
  const [displaySecondResume, setDisplaySecondResume] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < resume.length) {
        setDisplayedText(prevText => prevText + resume[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        setFinishedFirstResume(true);
      }
    }, 30);
    return () => clearInterval(interval); 
  }, [currentIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (finishedFirstResume) {
      timeout = setTimeout(() => {
        setDisplaySecondResume(true);
      }, 2000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    }; 
  }, [finishedFirstResume]);

  const [displayedText2, setDisplayedText2] = useState<string>('');
  const [currentIndex2, setCurrentIndex2] = useState<number>(0);

  useEffect(() => {
    if (displaySecondResume) {
      const interval2 = setInterval(() => {
        if (currentIndex2 < secondResume.length) {
          setDisplayedText2(prevText => prevText + secondResume[currentIndex2]);
          setCurrentIndex2(prevIndex => prevIndex + 1);
        } else {
          clearInterval(interval2);
        }
      }, 30);
      return () => clearInterval(interval2);
    }
  }, [currentIndex2, displaySecondResume]);

  return (
    <div className="typewriter">
      <h1 className='text-xl'>{displayedText}</h1>
      <h1 className='text-xl'>{displayedText2}</h1>
    </div>
  );
};

export default Resume;
