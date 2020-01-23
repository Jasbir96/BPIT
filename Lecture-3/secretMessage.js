const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog"
];

function getFirstChar(animal) {
  return animal.charAt(0);
}

const message=animals.map(getFirstChar);
console.log(message.join(""));