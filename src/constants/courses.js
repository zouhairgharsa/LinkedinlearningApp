import { profileEve, profileAuchen, profileHenri } from './images';
export const teachers = [
  {
    id: 0,
    name: 'Eve Parcello',
    image: profileEve,
    job: 'Software Developer and Instructor',
    description:
      "Eve Porcello is the cofounder of Moon Highway, a curriculum development and training company.For almost a decade, Eve has taught JavaScript, GraphQL, and React training workshops to tech professionals around the world. She is also the coauthor of Learning React and Learning GraphQL from O'Reilly Media. You can follow her on Twitter @eveporcello or find her articles about programming at www.moonhighway.com/articles.",
    courses: [
      {
        id: 0,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
      {
        id: 1,
        name: 'React hooks',
        learners: 23168,
        niveau: 'Beginner',
        duration: '2h30min',
        release: 'December 8, 2020',
      },
      {
        id: 2,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
    ],
  },
  {
    id: 1,
    name: 'Shaun Wassell',
    image: profileAuchen,
    job: 'Full-Stack Software Developer',
    description:
      "Eve Porcello is the cofounder of Moon Highway, a curriculum development and training company.For almost a decade, Eve has taught JavaScript, GraphQL, and React training workshops to tech professionals around the world. She is also the coauthor of Learning React and Learning GraphQL from O'Reilly Media. You can follow her on Twitter @eveporcello or find her articles about programming at www.moonhighway.com/articles.",
    courses: [
      {
        id: 0,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
      {
        id: 1,
        name: 'React hooks',
        learners: 23168,
        niveau: 'Beginner',
        duration: '2h30min',
        release: 'December 8, 2020',
      },
      {
        id: 2,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
    ],
  },
  {
    id: 2,
    name: 'Rudolf Olah',
    image: profileHenri,
    job: 'Software Developer and Instructor',
    description:
      "Eve Porcello is the cofounder of Moon Highway, a curriculum development and training company.For almost a decade, Eve has taught JavaScript, GraphQL, and React training workshops to tech professionals around the world. She is also the coauthor of Learning React and Learning GraphQL from O'Reilly Media. You can follow her on Twitter @eveporcello or find her articles about programming at www.moonhighway.com/articles.",
    courses: [
      {
        id: 0,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
      {
        id: 0,
        name: 'React hooks',
        learners: 23168,
        niveau: 'Beginner',
        duration: '2h30min',
        release: 'December 8, 2020',
      },
      {
        id: 0,
        name: 'React.js Essential Training',
        learners: 78000,
        niveau: 'Intermediate',
        duration: '2h30min',
        release: 'May 11, 2022',
      },
    ],
  },
];

export const recommandedCourse = [
  {
    id: 0,
    title: 'React.js : Building an interface',
    duration: '2h 30m',
    thumbnail: require('../assets/thumbnail1.png'),
  },
  {
    id: 1,
    title: 'React for Web designers',
    duration: '1h 30m',
    thumbnail: require('../assets/thumbnail1.png'),
  },
];

export const courses = [
  {
    id: 0,
    name: "React",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 4,
    niveau: 'Beginner',
    is_favourite: true,
  },
  {
    id: 1,
    name: "Javascript",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 2,
    niveau: 'Intermediate',
    is_favourite: false,
  },
  {
    id: 2,
    name: "Typescript",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 3,
    niveau: 'Beginner',
    is_favourite: true,
  },
  {
    id: 3,
    name: "AWS AMPLIFY",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 5,
    niveau: 'Advanced',
    is_favourite: false,
  },
  {
    id: 4,
    name: "FIREBASE",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 3,
    niveau: 'Beginner',
    is_favourite: false,
  },
  {
    id: 5,
    name: "REACT QUERY",
    duration: "2h 30m",
    instructor: "James Morris",
    star: 1,
    niveau: 'Beginner',
    is_favourite: false,
  }
]