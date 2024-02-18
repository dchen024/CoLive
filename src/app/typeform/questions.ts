export type Question = {
  question: string
  answer: string[] | string | number | null
  defaultAnswer:string[] | string | number
  type: "slider" | "select" | "checkbox" | "input"
  options: string[] | number[]
  roomate: string
  roomateAnswer: string[] | string | number | null
}

export const questions: Question[] = [
  {
    question: "What's your gender?",
    answer: null,
    defaultAnswer: "male",
    type: "select",
    options: [
      "Male",
      "Female"
    ],
    roomate: "What gender would you like your roomate to be?",
    roomateAnswer: null,
  },
  {
    question: "Do you smoke?",
    answer: null,
    defaultAnswer: "No",
    type: "select",
    options: [
      "Yes",
      "No",
    ],
    roomate: "Do you want your roomate to smoke?",
    roomateAnswer: null
  },
  {
    question: "How clean are you?",
    answer: null,
    defaultAnswer: "Average",
    type: "slider",
    options: [
      "Not Clean",
      "Average",
      "Very Clean"
    ],
    roomate: "How clean would you like your roomate to be?",
    roomateAnswer: null
  },
  {
    question: "How often do you shower?",
    answer: null,
    defaultAnswer: "Daily",
    type: "slider",
    options: [
      "Rarely",
      "Daily",
      "Weekly"
    ],
    roomate: "How often would you like your roomate to shower?",
    roomateAnswer: null
  },
  {
    question: "How often do you plan to stay in your room?",
    answer: null,
    defaultAnswer: "Rarely",
    type: "slider",
    options: [
      "Rarely",
      "Often",
      "Always"
    ],
    roomate: "How often would you like your roomate to stay in their room?",
    roomateAnswer: null
  },
  {
    question: "How likely are you to have overnight guests?",
    answer: null,
    defaultAnswer: "Never",
    type: "slider",
    options: [
      "Never",
      "Rarely",
      "Often"
    ],
    roomate: "How likely would you like your roomate to have overnight guests?",
    roomateAnswer: null
  },
  {
    question: "What temperature do you prefer your room to be? (Fahrenheit)",
    answer: null,
    defaultAnswer: 70,
    type: "input",
    options: [],
    roomate: "What temperature would you like your roomate to prefer their room to be?",
    roomateAnswer: null
  },
  {
    question: "What's your sexualitiy?",
    answer: null,
    defaultAnswer: "Straight",
    type: "slider",
    options: [
      "Straight",
      "Gay",
      "Bi",
    ],
    roomate: "What sexualitiy would you like your roomate to be?",
    roomateAnswer: null
  },
  {
    question: "What time do you go to bed? (Format: HH:MM:SS)",
    answer: null,
    defaultAnswer: new Date().toLocaleTimeString(),
    type: "input",
    options: [],
    roomate: "What time would you like your roomate to go to bed?",
    roomateAnswer: null
  },
  {
    question: "How likely are you to have friends over?",
    answer: null,
    defaultAnswer: "Never",
    type: "slider",
    options: [
      "Never",
      "Rarely",
      "Often"
    ],
    roomate: "How likely would you like your roomate to have friends over?",
    roomateAnswer: null
  },
  {
    question: "Which bouroughs would you like to live in?",
    answer: null,
    defaultAnswer: "Manhattan",
    type: "checkbox",
    options: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island"
    ],
    roomate: "Which bouroughs would you like your roomate to live in?",
    roomateAnswer: null
  },

]
