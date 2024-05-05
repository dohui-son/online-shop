export const parseStringToDate = (YYYYMMDDHHMMSS: string): null | Date => {
  if (YYYYMMDDHHMMSS == null) {
    return null;
  }
  const match = YYYYMMDDHHMMSS.match(
    /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/
  )?.map(Number);
  if (!match || match.length < 7) {
    return null;
  }

  return new Date(
    match[1],
    match[2] - 1,
    match[3],
    match[4],
    match[5],
    match[6]
  );
};
