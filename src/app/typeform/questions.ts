export type Question = {
  question: string
  answer: string[] | string | number | null
  defaultAnswer:string[] | string | number
  type: "slider" | "select" | "checkbox"
  options: string[] | number[]
  roomate: string
  roomateAnswer: string[] | string | number | null
}

export const questions: Question[] = [
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
      "Very Messy",
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
      "Never",
      "Rarely",
      "Daily"
    ],
    roomate: "How often would you like your roomate to shower?",
    roomateAnswer: null
  },
  {
    question: "What time do you go to bed?",
    answer: null,
    defaultAnswer: "Before 10pm",
    type: "select",
    options: [
      "Before 10pm",
      "Before 12pm",
      "Before 2am"
    ],
    roomate: "What time would you like your roomate to go to bed?",
    roomateAnswer: null
  },
  {
    question: "What's your sexualitiy?",
    answer: null,
    defaultAnswer: "Straight",
    type: "select",
    options: [
      "Straight",
    ],
    roomate: "What sexualitiy would you like your roomate to be?",
    roomateAnswer: null
  },
  {
    question: "How often will you have overnight guests?",
    answer: null,
    defaultAnswer: "Never",
    type: "slider",
    options: [
      "Never",
      "Rarely",
      "Often"
    ],
    roomate: "How often would you like your roomate to have overnight guests?",
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
