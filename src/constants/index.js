import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Game Level",
      url: "#features",
    },
    {
      id: "1",
      title: "Trivia",
      url: "#collabration",
    },
    {
      id: "2",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "3",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Playing Simon enhances memory, concentration, and cognitive skills by challenging players to recall and replicate complex sequences.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Record-Breaking Sequences",
      text: "Some players have managed to memorize sequences of over 50 moves! That's a lot of lights and sounds to keep track of.",
    },
    {
      id: "1",
      title: "Simon in Space",
      text: "In 2011, a version of Simon was taken aboard the International Space Station to help astronauts with cognitive training during long missions.",
    },
    {
      id: "2",
      title: "Legacy in Gaming",
      text: "Simon’s core mechanic of pattern recognition and memory has influenced many modern video games, including rhythm games like Guitar Hero and Dance Dance Revolution.",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      price: "0",
      features: [
        "only Easy Level Available",
        "Contains ads",
        "Limited high-score tracking",
      ],
    },
    {
      id: "1",
      title: "Monthly",
      price: "1.99",
      features: [
        "All Level unlocked",
        "No ads",
        "Advanced high-score tracking & leaderboards",
        "Multiplayer mode",
      ],
    },
    {
      id: "2",
      title: "Yearly",
      price: "14.99",
      features: [
        "All Level unlocked",
        "No ads",
        "Advanced high-score tracking & leaderboards",
        "Multiplayer mode",
        "Exclusive special event modes",
        "Early access to meta",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Easy Level",
      text: "This level features four large colored buttons, each producing a unique tone when pressed. The game begins by flashing one color and playing its corresponding sound. The player must press the same button to continue. In each subsequent round, Simon adds one more color to it.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
      level: "https://aashmanbkt.github.io/Simon-Game_4/"
    },
    {
      id: "1",
      title: "Medium Level",
      text: "This level features six large colored buttons, each producing a unique tone when pressed. The game begins by flashing one color and playing its corresponding sound. The player must press the same button to continue. In each subsequent round, Simon adds one more color to it.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
      level: "https://aashmanbkt.github.io/Simon-Game-6/"
    },
    {
      id: "2",
      title: "Hard Level",
      text: "This level features eight large colored buttons, each producing a unique tone when pressed. The game begins by flashing one color and playing its corresponding sound. The player must press the same button to continue. In each subsequent round, Simon adds one more color to it.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      level: "https://aashmanbkt.github.io/Simon-Game-8/"
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://https://dicordapp/users/870110616868765759",
    },
    {
      id: "1",
      title: "X",
      iconUrl: twitter,
      url: "https://x.com/AashmanGupta4?t=LkEUA7rXpAq1S37IIbXzOA&s=08",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/aashman91?igsh=MW9yc2l4ejFjM200bQ==&utm_source=ig_contact_invite",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "https://www.linkedin.com/in/aashman-gupta-938719276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/share/1Km19K7SQX/",
    },
  ];