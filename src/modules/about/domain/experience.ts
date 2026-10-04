export const PROGRAMMING_CAREER_START_DATE = new Date(
  Date.UTC(2021, 8, 23)
);

export function getYearsOfExperience(asOf = new Date()): number {
  let years =
    asOf.getUTCFullYear() - PROGRAMMING_CAREER_START_DATE.getUTCFullYear();

  const isBeforeAnniversary =
    asOf.getUTCMonth() < PROGRAMMING_CAREER_START_DATE.getUTCMonth() ||
    (asOf.getUTCMonth() === PROGRAMMING_CAREER_START_DATE.getUTCMonth() &&
      asOf.getUTCDate() < PROGRAMMING_CAREER_START_DATE.getUTCDate());

  if (isBeforeAnniversary) {
    years -= 1;
  }

  return Math.max(0, years);
}
