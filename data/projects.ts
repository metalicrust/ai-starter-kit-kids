export type KitProject = {
  id: string;
  title: string;
  shortTitle: string;
  theme: string;
  description: string;
  output: string;
  tools: string;
  time: string;
  childMakes: string;
  parentHelps: string;
  steps: string[];
  prompt: string;
  accent: string;
};

export const projects: KitProject[] = [
  {
    id: "superhero",
    title: "Create Your Own Superhero",
    shortTitle: "Superhero",
    theme: "Adventure + imagination",
    description:
      "Kids invent an original hero with a brave mission, colorful costume, special powers, and a short origin story.",
    output:
      "A superhero profile with a name, powers, short origin story, and a colorful original costume image prompt.",
    tools:
      "ChatGPT or another free AI chatbot, plus an optional image generator if available.",
    time: "20-30 minutes",
    childMakes:
      "A hero identity, powers, mission, costume ideas, and an image prompt for the hero's look.",
    parentHelps:
      "Ask guiding questions, review the AI response, and help keep the hero kind and age-appropriate.",
    steps: [
      "Ask your child to choose a hero name, special power, and one positive value the hero stands for.",
      "Paste the starter prompt into an AI chatbot and answer its questions together.",
      "Pick the best ideas from the AI response and rewrite any parts in the child's own words.",
      "Create a final hero profile and a colorful costume image prompt for drawing or image generation.",
    ],
    prompt:
      "You are helping a parent and child create an original superhero together. First, ask the child 5 simple creative questions about the hero's name, powers, costume colors, values, and mission. Do not ask for personal information. After we answer, create a kid-friendly superhero profile with a name, powers, short origin story, strengths, one gentle weakness, and a detailed image prompt for a colorful, original superhero costume that would be exciting for a child to see or draw. Keep it positive, safe, and age-appropriate for ages 7 to 13.",
    accent: "bg-[#ffcc4d]",
  },
  {
    id: "bedtime-story",
    title: "Make a Bedtime Story with AI",
    shortTitle: "Story",
    theme: "Warm + creative",
    description:
      "Parent and child build a calm custom story with a lovable character, magical setting, gentle lesson, and cozy ending.",
    output: "A short bedtime story the family can read together.",
    tools: "ChatGPT or another free AI chatbot.",
    time: "20-30 minutes",
    childMakes: "A main character, magical setting, story problem, and lesson.",
    parentHelps:
      "Shape the tone, keep the ending gentle, and read the finished story together.",
    steps: [
      "Ask your child to choose the main character, where the story happens, and the feeling the ending should have.",
      "Use the starter prompt to ask AI for a short bedtime story draft.",
      "Read the draft together and ask the AI to make it calmer, funnier, shorter, or more personal.",
      "Save the final version as a family story to reread later.",
    ],
    prompt:
      "You are helping a parent and child write a gentle bedtime story together. First, ask the child 4 simple creative questions about the main character, setting, small problem, and lesson. Do not ask for personal information. After we answer, write a warm, age-appropriate bedtime story with a calm ending that a family can read aloud. Keep it cozy, hopeful, and safe. Avoid scary details or anything too intense for ages 7 to 13.",
    accent: "bg-[#8fd0ff]",
  },
  {
    id: "comic-character",
    title: "Design a Comic Book Character",
    shortTitle: "Comic",
    theme: "Playful + visual",
    description:
      "Kids design a bold comic-style character with a personality, visual details, catchphrase, sidekick, and first adventure.",
    output: "A character sheet with visual details, catchphrase, sidekick, first adventure idea, and optional image prompt.",
    tools:
      "ChatGPT or another free AI chatbot, plus optional Canva or free drawing tools.",
    time: "20-30 minutes",
    childMakes: "A character sheet, catchphrase, sidekick, and first adventure idea.",
    parentHelps:
      "Encourage original ideas, check the AI output, and help turn the sheet into a drawing or Canva page.",
    steps: [
      "Ask your child to choose the character's personality, outfit, favorite tool, and comic style.",
      "Paste the starter prompt into an AI chatbot and fill in the blanks together.",
      "Ask for three catchphrase options and pick the one that sounds most like the character.",
      "Create a final character sheet and use the image prompt as a drawing guide.",
    ],
    prompt:
      "You are helping a parent and child design an original comic book character together. First, ask the child 5 simple creative questions about personality, look, outfit, sidekick, and first adventure. Do not ask for personal information. After we answer, create a kid-friendly character sheet with a name, personality, visual details, catchphrase, sidekick, first adventure idea, and optional image prompt for drawing. Keep it original, positive, playful, and safe for ages 7 to 13.",
    accent: "bg-[#ff8f70]",
  },
];
