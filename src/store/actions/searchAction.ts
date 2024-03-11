export const fetchJokes = (text: string) => ({
  type: 'FETCH_JOKES',
  payload: text
});