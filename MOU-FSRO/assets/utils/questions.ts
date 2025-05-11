type questionsType ={
  question: string;
  options: Array<string>
  correctAnswerIndex: number
}[]

export const questions: questionsType = [
  {
    question: "Qual é o objetivo principal da Ordem Unida ?",
    options: ["Melhorar a força física", "Aumentar a competitividade", "Aprender coreografias complexas", "Promover disciplina e coordenação"],
    correctAnswerIndex: 3,
  },
  {
    question: "Qual comando é utilizado para alinhar uma fileira de soldados ?",
    options: ["Sentido!", "Descansar!", "Cobrir!", "Atênção!", "Romper!"],
    correctAnswerIndex: 2,
  },
  {
    question: "O comando 'Descansar!' permite ao soldado:",
    options: ["Afastar as pernas, de forma a ficar mais confortável", "Roper a formação", "Sentar-se imediatamente", "Apoiar-se em outro soldado", "Deixar a arma no chão"],
    correctAnswerIndex: 0,
  },
  {
    question: "Qual é a posição básica do soldado em Ordem Unida ?",
    options: ["Em guarda", "Atacar", "Preparar", "Pronto para ação", "Sentido"],
    correctAnswerIndex: 4,
  },
  {
    question: "O movimento 'Marcar passo' significa: ",
    options: ["Marchar no mesmo lugar sem avançar", "Sair correndo", "Dar um passo para frente", "Mover-se lateralmente", "Ficar em posição de sentido"],
    correctAnswerIndex: 0,
  },
  {
    question: "O instrumento utilizado para comandar a tropa na Ordem Unida chama-se:",
    options: ["Baioneta", "Trompete", "Violino", "Corneta", "FAL"],
    correctAnswerIndex: 3,
  },
  {
    question: "O que significa o comando 'Frente pra direita!' ?",
    options: ["Correr em direção à direita", "Avançar 3 passos e virar", "Mover apenas o braço direito", "Dar meia-volta completa", "Girar 90॰ para a direita"],
    correctAnswerIndex: 4,
  },
  {
    question: "A Ordem Unida é usada para: ",
    options: ["Correr em formações irregulares", "Treinar movimentos coordenados de grupo", "Planejar estratégias de combate", "Enfrentar competições esportivas", "Recarregar armas"],
    correctAnswerIndex: 1,
  },
  {
    question: "O que caracteriza o movimento 'Meia-volta' ?",
    options: ["Dar dois passos para trás", "Avançar para a retaguarda", "Mover-se lateralmente", "Virar 180॰ no mesmo lugar", "Ficar parado em posição de sentido"],
    correctAnswerIndex: 3,
  },
  {
    question: "Qual é a principal função da Ordem Unida ?",
    options: ["Melhorar a eficiência em grupo", "Aumentar a força individual", "Realizar apresentações artísticas", "Testar limites físicos", "Estimular competitividade"],
    correctAnswerIndex: 0,
  },
];