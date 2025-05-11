type questionsType ={
  question: string;
  options: Array<string>
  correctAnswerIndex: number
  alertModalCorrect: string;
  alertModalIncorrect: string
}[]

export const questions: questionsType = [
  {
    question: "Qual é o objetivo principal da Ordem Unida ?",
    options: ["Melhorar a força física", "Aumentar a competitividade", "Aprender coreografias complexas", "Promover disciplina e coordenação", "Treinar para corridas de longa distância"],
    correctAnswerIndex: 3,
    alertModalCorrect: "Promover disciplica e coordenação",
    alertModalIncorrect: "Promover disciplica e coordenação"
  },
  {
    question: "Qual comando é utilizado para alinhar uma fileira de soldados ?",
    options: ["Sentido!", "Descansar!", "Cobrir!", "Atênção!", "Romper!"],
    correctAnswerIndex: 2,
    alertModalCorrect: "Cobrir!",
    alertModalIncorrect: "Cobrir!",
  },
  {
    question: "O comando 'Descansar!' permite ao soldado:",
    options: ["Afastar as pernas, de forma a ficar mais confortável", "Roper a formação", "Sentar-se imediatamente", "Apoiar-se em outro soldado", "Deixar a arma no chão"],
    correctAnswerIndex: 0,
    alertModalCorrect: "Afastar as pernas, de forma a ficar mais confortável",
    alertModalIncorrect: "Afastar as pernas, de forma a ficar mais confortável"
  },
  {
    question: "Qual é a posição básica do soldado em Ordem Unida ?",
    options: ["Em guarda", "Atacar", "Preparar", "Pronto para ação", "Sentido"],
    correctAnswerIndex: 4,
    alertModalCorrect: "Sentido",
    alertModalIncorrect: "Sentido"
  },
  {
    question: "O movimento 'Marcar passo' significa: ",
    options: ["Marchar no mesmo lugar sem avançar", "Sair correndo", "Dar um passo para frente", "Mover-se lateralmente", "Ficar em posição de sentido"],
    correctAnswerIndex: 0,
    alertModalCorrect: "Marchar no mesmo lugar sem avançar",
    alertModalIncorrect: "Marchar no mesmo lugar sem avançar"
  },
  {
    question: "O instrumento utilizado para comandar a tropa na Ordem Unida chama-se:",
    options: ["Baioneta", "Trompete", "Violino", "Corneta", "FAL"],
    correctAnswerIndex: 3,
    alertModalCorrect: "Corneta",
    alertModalIncorrect: "Corneta"
  },
  {
    question: "O que significa o comando 'Frente pra direita!' ?",
    options: ["Correr em direção à direita", "Avançar 3 passos e virar", "Mover apenas o braço direito", "Dar meia-volta completa", "Girar 90॰ para a direita"],
    correctAnswerIndex: 4,
    alertModalCorrect: "Girar 90॰ para a direita",
    alertModalIncorrect: "Girar 90॰ para a direita"
  },
  {
    question: "A Ordem Unida é usada para: ",
    options: ["Correr em formações irregulares", "Treinar movimentos coordenados de grupo", "Planejar estratégias de combate", "Enfrentar competições esportivas", "Recarregar armas"],
    correctAnswerIndex: 1,
    alertModalCorrect: "Treinar movimentos coordenados de grupo",
    alertModalIncorrect: "Treinar movimentos coordenados de grupo"
  },
  {
    question: "O que caracteriza o movimento 'Meia-volta' ?",
    options: ["Dar dois passos para trás", "Avançar para a retaguarda", "Mover-se lateralmente", "Virar 180॰ no mesmo lugar", "Ficar parado em posição de sentido"],
    correctAnswerIndex: 3,
    alertModalCorrect: "Virar 180॰ no mesmo lugar",
    alertModalIncorrect: "Virar 180॰ no mesmo lugar"
  },
  {
    question: "Qual é a principal função da Ordem Unida ?",
    options: ["Melhorar a eficiência em grupo", "Aumentar a força individual", "Realizar apresentações artísticas", "Testar limites físicos", "Estimular competitividade"],
    correctAnswerIndex: 0,
    alertModalCorrect: "Melhorar a eficiência em grupo",
    alertModalIncorrect: "Melhorar a eficiência em grupo"
  },
];