import randomInt from "./randomInt";

const words = [
  "ad",
  "adipisicing",
  "aliqua",
  "aliquip",
  "amet",
  "anim",
  "aute",
  "cillum",
  "commodo",
  "consectetur",
  "consequat",
  "culpa",
  "cupidatat",
  "deserunt",
  "do",
  "dolor",
  "dolore",
  "duis",
  "ea",
  "eiusmod",
  "elit",
  "enim",
  "esse",
  "est",
  "et",
  "eu",
  "ex",
  "excepteur",
  "exercitation",
  "fugiat",
  "id",
  "in",
  "incididunt",
  "ipsum",
  "irure",
  "labore",
  "laboris",
  "laborum",
  "Lorem",
  "magna",
  "minim",
  "mollit",
  "nisi",
  "non",
  "nostrud",
  "nulla",
  "occaecat",
  "officia",
  "pariatur",
  "proident",
  "qui",
  "quis",
  "reprehenderit",
  "sint",
  "sit",
  "sunt",
  "tempor",
  "ullamco",
  "ut",
  "velit",
  "veniam",
  "voluptate",
];

export function generateLoremString(max = 100) {
  let sentence = "";
  let count = max;
  while (count > 0) {
    const i = randomInt(0, words.length);
    const word = words[i];
    sentence = count == max ? word : sentence + " " + word;
    count = count - 1;
  }
  if (sentence.length) {
    sentence = sentence.slice(1);
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  return sentence;
}

export function generateLoremCollection(paragraphs = 100, words = 100) {
  return new Array(paragraphs).fill(undefined).map((_, index) => ({
    id: ++index,
    content: generateLoremString(words),
  }));
}
