export const is10DaysOrMoreAgo = (isoDate: string) => {
  const givenDate = new Date(isoDate);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays >= 10;
};
