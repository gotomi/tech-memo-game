export const shuffleArray = <T>(arr: T[]) => {
  return arr.sort((a, b) => Math.random() - Math.random());
};
