function generateUnique(
  generateFunc: () => string,
  existingValues: string[]
): string {
  let newValue: string;

  do {
    newValue = generateFunc();
  } while (existingValues.includes(newValue));

  return newValue;
}

export default generateUnique;
