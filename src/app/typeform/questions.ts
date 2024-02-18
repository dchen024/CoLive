export type Question = {
  question: string;
  answer: string[] | string | number | null;
  defaultAnswer: string[] | string | number;
  type: "slider" | "select" | "checkbox" | "input";
  options: string[] | number[];
  roommate: string;
  roommateAnswer: string[] | string | number | null;
};

export const questions: Question[] = [
  {
    question: "What's your gender?",
    answer: null,
    defaultAnswer: "Male",
    type: "select",
    options: ["Male", "Female"],
    roommate: "What gender would you like your roommate to be?",
    roommateAnswer: null,
  },
  {
    question: "Do you smoke?",
    answer: null,
    defaultAnswer: "No",
    type: "select",
    options: ["Yes", "No"],
    roommate: "Do you want your roommate to smoke?",
    roommateAnswer: null,
  },
  {
    question: "How clean is your room?",
    answer: null,
    defaultAnswer: "Average",
    type: "slider",
    options: ["Messy", "Average", "Very Clean"],
    roommate: "How clean would you like your roommate to be?",
    roommateAnswer: null,
  },
  {
    question: "How often do you shower?",
    answer: null,
    defaultAnswer: "Daily",
    type: "slider",
    options: ["Rarely", "Often", "Daily"],
    roommate: "How often would you like your roommate to shower?",
    roommateAnswer: null,
  },
  {
    question: "How often do you plan to stay in your room?",
    answer: null,
    defaultAnswer: "Often",
    type: "slider",
    options: ["Rarely", "Often", "Always"],
    roommate: "How often would you like your roommate to stay in their room?",
    roommateAnswer: null,
  },
  {
    question: "How likely are you to have overnight guests?",
    answer: null,
    defaultAnswer: "Never",
    type: "slider",
    options: ["Never", "Rarely", "Often"],
    roommate:
      "How likely would you like your roommate to have overnight guests?",
    roommateAnswer: null,
  },
  {
    question: "What temperature do you prefer your room to be? (Fahrenheit)",
    answer: null,
    defaultAnswer: 70,
    type: "input",
    options: [],
    roommate:
      "What temperature would you like your roommate to prefer their room to be?",
    roommateAnswer: null,
  },
  {
    question: "What's your sexuality?",
    answer: null,
    defaultAnswer: "Straight",
    type: "slider",
    options: ["Straight", "Gay", "Bi"],
    roommate: "What sexuality would you like your roommate to be?",
    roommateAnswer: null,
  },
  {
    question: "What time do you go to bed? (Format: HH:MM:SS AM/PM)",
    answer: null,
    defaultAnswer: new Date().toLocaleTimeString(),
    type: "input",
    options: [],
    roommate: "What time would you like your roommate to go to bed?",
    roommateAnswer: null,
  },
  {
    question: "How likely are you to have friends over?",
    answer: null,
    defaultAnswer: "Never",
    type: "slider",
    options: ["Never", "Rarely", "Often"],
    roommate: "How likely would you like your roommate to have friends over?",
    roommateAnswer: null,
  },
  {
    question: "Which borough(s) would you live in?",
    answer: null,
    defaultAnswer: "Manhattan",
    type: "checkbox",
    options: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    roommate: "Which borough(s) would you live in?",
    roommateAnswer: null,
  },
];
