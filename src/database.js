import previewTipCalculator from "./previewImages/previewTipCalculator.png";
import previewCardComponent from "./previewImages/previewCardComponent.png";
import previewTimeTrackingDashboard from "./previewImages/previewTimeTrackingDashboard.png";
import previewResume from "./previewImages/previewResume.png";
import previewInteractiveRatingComponent from "./previewImages/previewInteractiveRatingComponent.png";
import previewInteractiveCardForm from "./previewImages/previewInteractiveCardForm.png";

export const data = [
  {
    name: "Tip Calculator App",
    link: "https://a-zajonc.github.io/tip-calculator-app/",
    code: "https://github.com/a-zajonc/tip-calculator-app",
    description:
      "Tip Calculator App is an a frontend challenge from FrontendMentor.io, which I completed in React using Chakra UI.",
    information:
      "Main objective was to allow user to calculate the correct tip and total cost of the bill per person and get the look of the app as close to the design with the ability to see optimal layout of the app depending on the device's screen size.",
    preview: previewTipCalculator,
  },
  {
    name: "Interactive Card Details Form",
    link: "https://a-zajonc.github.io/interactive-card-details-form/",
    code: "https://github.com/a-zajonc/interactive-card-details-form",
    description:
      "This is a frontend challenge from FrontendMentor.io. Using Chakra UI I created a interative card form, where user can see the details of the card update in real-time.",
    information:
      "It also validates user's input and renders error messages, when user attempts to send invalid form",
    preview: previewInteractiveCardForm,
  },
  {
    name: "Time tracking dashboard",
    link: "https://a-zajonc.github.io/time-tracking-dashboard/",
    code: "https://github.com/a-zajonc/time-tracking-dashboard",
    description:
      "It is a frontend challenge from FrontendMentor.io completed in React using Chakra UI. It was a nice practice of Grid use.",
    information:
      "The task was to build out dashboard according to design and get it looking as close to the design as possible, allowing to change the data according to daily, weekly or monthly preferences.",
    preview: previewTimeTrackingDashboard,
  },
  {
    name: "Interactive Rating Component",
    link: "https://a-zajonc.github.io/interactive-rating-component/",
    code: "https://github.com/a-zajonc/interactive-rating-component",
    description:
      "This is a rating component challenge from FrontendMentor.io, which I completed using React and Chakra UI.",
    information:
      "It's main objective was to set state of user's rating and display a thank you component after a successfull rating.",
    preview: previewInteractiveRatingComponent,
  },
  {
    name: "Product Preview Card Component",
    link: "https://a-zajonc.github.io/product-preview-card-component/",
    code: "https://github.com/a-zajonc/product-preview-card-component",
    description:
      "This is a frontend challenge from FrontendMentor.io, which only objective was to build out product preview card component and get it looking as close to the design as possible.",
    information: "I used React and Chakra UI in this project.",
    preview: previewCardComponent,
  },
  {
    name: "My Resume",
    link: "https://my-cv-sigma.vercel.app/",
    code: "https://github.com/a-zajonc/my-cv",
    description:
      "This is my resume website, which was created in React using Chakra UI. I also used i18next library, which allowed me to create bilingual website.",
    information:
      "Main agenda was to create a website, which is as close to my actual resume as possible and at the same time give it more responsive touch.",
    preview: previewResume,
  },
];
