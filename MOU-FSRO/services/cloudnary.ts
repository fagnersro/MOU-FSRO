import { ImageSourcePropType } from "react-native";

export type VideoItem = {
  id: number;
  title: string;
  description?: string;
  url: string;
  thumbnail?: ImageSourcePropType | undefined;
};

export const cloudinaryVideos: VideoItem[] =[
  {
    id: 1,
    title: 'Atenção',
    description: 'Ao toque de "Atênção", o militar que estava à vontade em formatura retorna à posição de descansar.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747186987/iwoyb4pbxgghxezlvllx.mp4',
    thumbnail: require('assets/images/png/IMG_0086.png')
  },
  {
    id: 2,
    title: 'Sentido',
    description: 'Ao toque de “sentido”, o militar junta as mãos às pernas em postura reta.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279701/IMG_0087_q0s9vx.mp4',
    thumbnail: require('assets/images/png/IMG_0086.png')
  },
  {
    id: 3,
    title: 'Descansar',
    description: 'Ao toque de “descansar”, o militar afasta as pernas e coloca as mãos uma sobre a outra na parte de trás das costas.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279702/IMG_0088_khtxxo.mp4',
    thumbnail: require('assets/images/png/IMG_0087.png')
  },
  {
    id: 4,
    title: 'Direita volver',
    description: 'Ao toque de “direita volver”, o militar gira o pé direito em 90°, junta a perna esquerda à direita e por fim fica em posição de “sentido',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279700/IMG_0089_toukxi.mp4',
    thumbnail: require('assets/images/png/IMG_0088.png')
  },
  {
    id: 5,
    title: 'Esquerda volver',
    description: 'Ao toque de “esquerda volver”, o militar gira o pé esquerdo em 90°, junta a perna direita à esquerda e por fim fica em posição de “sentido”.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279706/IMG_0090_mnrvnk.mp4',
    thumbnail: require('assets/images/png/IMG_0089.png')
  },
  {
    id: 6,
    title: '1/8 à esquerda',
    description: 'Neste exemplo, foi realizado o comando de “1/8 à esquerda”, apenas a fim de exemplificar. O militar gira o pé esquerdo em 45° e junta a perna direita, terminando o movimento em “sentido”.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279699/IMG_0091_rpwntc.mp4',
    thumbnail: require('assets/images/png/IMG_0090.png')
  },
  {
    id: 7,
    title: 'Meia-volta volver',
    description: 'Ao toque de “meia-volta volver”, o militar gira o pé esquerdo em 180°, junta a perna direita à esquerda e por fim fica em posição de “sentido”. Bizu: uma leve flexão das pernas pode ajudar a melhorar o movimento.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279699/IMG_0092_zhwjvp.mp4',
    thumbnail: require('assets/images/png/IMG_0091.png')
  },
  {
    id: 8,
    title: 'Apresentar armas',
    description: 'Ao toque de “apresentar armas”, o militar desarmado presta continência em posição de sentido, e assim permanece até novo comando.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279696/IMG_0093_b7ncct.mp4',
    thumbnail: require('assets/images/png/IMG_0092.png')
  },
  {
    id: 9,
    title: 'Descansar armas',
    description: 'Ao toque de “descansar armas”, o militar desarmado desfaz a continência e permanece em posição de “sentido” até novo comando.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279693/IMG_0094_cl0ly4.mp4',
    thumbnail: require('assets/images/png/IMG_0093.png')
  },
  {
    id: 10,
    title: 'À vontade',
    description: 'Ao toque de “à vontade”, o militar que está em posição de “descansar” passa a uma posição menos restrita. Normalmente esta posição corresponde a colocar as mãos entrelaçadas em frente ao seu corpo, com as pernas ainda afastadas.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279694/IMG_0095_tw4jtn.mp4',
    thumbnail: require('assets/images/png/IMG_0094.png')
  },
  {
    id: 11,
    title: 'Ordinário, marche',
    description: 'Ao toque de “ordinário, marche”, o militar que está em posição de sentido começa a marchar com o passo inicial dado pela perna esquerda.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279694/IMG_0096_c1gmck.mp4',
    thumbnail: require('assets/images/png/IMG_0095.png')
  },
  {
    id: 12,
    title: 'Cobrir',
    description: 'Ao toque de “cobrir”, o militar que está em posição de sentido estica o braço direito tomando a distância correta entre ele e o militar da sua frente.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279688/IMG_0097_gyttni.mp4',
    thumbnail: require('assets/images/png/IMG_0096.png')
  },
  {
    id: 13,
    title: 'Olhar à direita',
    description: 'Ao toque de “olhar à direita”, o militar que está marchando presta continência em uma passada e vira todo o seu tronco para a direita na próxima passada. Ou seja, o movimento é realizado em duas etapas.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279691/IMG_0103_nnfmwl.mp4',
    thumbnail: require('assets/images/png/IMG_0103.png')
  },
  {
    id: 14,
    title: 'Olhar em frente',
    description: 'Ao toque de “olhar em frente”, o militar que está marchando desfaz a continência em uma passada e vira todo o seu tronco para a sua frente na próxima passada. Ou seja, o movimento é realizado em duas etapas.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279688/IMG_0106_dv8zkx.mp4',
    thumbnail: require('assets/images/png/IMG_0106.png')
  },
  {
    id: 15,
    title: 'Última forma',
    description: 'O objetivo aqui é demonstrar o toque de “última forma”. Este toque pode ser realizado após qualquer erro de comando. Foi utilizado o toque de “apresentar armas” somente como exemplo.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279689/IMG_0107_qxi21d.mp4',
    thumbnail: require('assets/images/png/IMG_0107.png')
  },
  {
    id: 16,
    title: 'Acelerado',
    description: 'Ao toque de “acelerado”, o militar, que estava em “sentido”, fecha os punhos, dobra os braços em formato de “L” e começa a trotar. Quando ele já estiver em “acelerado”, após o comando de “marche”, o militar começa a se deslocar.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279693/IMG_0109_gmuppb.mp4',
    thumbnail: require('assets/images/png/IMG_0107.png')
  },
  {
    id: 17,
    title: 'Firme',
    description: 'Ao toque de “firme”, o militar que estava em “cobrir” abaixa o braço e fica em “sentido”.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279683/IMG_0110_uwxcqt.mp4',
    thumbnail: require('assets/images/png/IMG_0109.png')
  },
  {
    id: 18,
    title: 'Marcar passo',
    description: 'Ao toque de “marcar passo”, o militar marcha no próprio local, sem se deslocar.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279686/IMG_0111_twp7q0.mp4',
    thumbnail: require('assets/images/png/IMG_0110.png')
  },
  {
    id: 19,
    title: 'Fora de forma',
    description: 'Ao toque de “fora de forma”, o militar que estava em posição de “sentido” rompe marcha com a perna esquerda e fica à vontade, saindo de formatura.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279682/IMG_0114_em8b9w.mp4',
    thumbnail: require('assets/images/png/IMG_0111.png')
  },
  {
    id: 20,
    title: 'Sentido',
    description: 'Ao toque de “sentido”, o militar mantém o armamento apoiado no chão e junta a outra perna e o outro braço ao seu corpo.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279679/IMG_5364_talqca.mp4',
    thumbnail: require('assets/images/png/IMG_0114.png')
  },
  {
    id: 21,
    title: 'Apresentar armas',
    description: 'Ao toque de “apresentar armas”, o militar faz o movimento como se fosse em 4 tempos: 1) tira o armamento do ombro; 2) cruza o armamento em frente ao peito; 3) puxa o armamento para baixo (ao lado do corpo); 4) segura o armamento na vertical com o braço esquerdo acima e a mão direita apenas apoiando, abaixo.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279677/IMG_5371_aerec2.mp4',
    thumbnail: require('assets/images/png/IMG_5365.png')
  },
  {
    id: 22,
    title: 'Ombro armas',
    description: 'Ao toque de “ombro armas”, o militar faz o movimento como se fosse em 4 tempos: 1) puxa o armamento para cima (ao lado do corpo); 2) cruza o armamento em frente ao peito; 3) coloca o armamento no ombro; 4) fica em “sentido”.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279674/IMG_5372_xpasmr.mp4',
    thumbnail: require('assets/images/png/IMG_5364.png')
  },
  {
    id: 23,
    title: 'Descansar armas',
    description: 'Ao toque de “descansar armas”, o militar faz o movimento como se fosse em 4 tempos: 1) tira o armamento do ombro; 2) cruza o armamento em frente ao peito; 3) puxa o armamento para baixo (ao lado do corpo); 4)apoia o armamento no chão, ficando em “sentido”.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279672/IMG_5373_alhuxj.mp4',
    thumbnail: require('assets/images/png/IMG_5372.png')
  },
  {
    id: 24,
    title: 'Cruzar armas',
    description: 'Ao toque de “cruzar armas”, o militar faz o movimento como se fosse em 2 tempos: 1) puxa o armamento para cima (ao lado do corpo); 2) cruza o armamento em frente ao peito.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279677/IMG_5375_xylee3.mp4',
    thumbnail: require('assets/images/png/IMG_5373.png')
  },
  {
    id: 25,
    title: 'Armar baioneta',
    description: 'Ao toque de "armar baioneta", o militar faz o movimento como se fosse em 3 tempos: 1) puxa a baioneta com a mão esquerda; 2) posiciona a baioneta no fuzil; 3) volta a segurar o armamento na posição inicial.',
    url: 'https://res.cloudinary.com/dchoxpm0n/video/upload/v1747279675/IMG_5376_j6wwvc.mp4',
    thumbnail: require('assets/images/png/IMG_5376.png')
  },
]