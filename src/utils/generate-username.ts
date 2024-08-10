function generateUsername(): string {
  const animals = [
    "Lion",
    "Tiger",
    "Bear",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Kangaroo",
    "Panda",
    "Wolf",
    "Fox",
    "Eagle",
    "Shark",
    "Dolphin",
    "Penguin",
    "Seal",
    "Whale",
    "Owl",
    "Falcon",
    "Hawk",
    "Parrot",
  ];

  function getRandomAnimalName(): string {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  }

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
  }

  const animalName = getRandomAnimalName();
  const randomNumber = generateRandomNumber();
  return `${animalName}${randomNumber}`;
}

export default generateUsername;
