export default function ResumeMobile() {
  const resume = "Jeune diplômé du titre RNCP concepteur développeur d'application \n(Bac +3 via une alternance React / React-native), j’ai aussi eu la chance de me développer sur plusieurs technologies durant mon parcours tel que Symfony, Vue.js et Docker. J’aime le travail en équipe et le partage de connaissances mais je suis également capable de travailler en autonomie.";
  const secondResume = "Si mon profil vous intéresse, je vous invite à me mettre à l'épreuve.\n \nCordialement";
  return (
    <div className="text-white h-fit flex flex-col items-center p-2.5">
      <div className="mob-title">
        <h1>MON RÉSUMÉ</h1>
      </div>
      <h1 className='text-lg text-center mb-2.5'>{resume}</h1>
      <h1 className='text-lg text-center mb-2.5'>{secondResume}</h1>
    </div>
  );
};

