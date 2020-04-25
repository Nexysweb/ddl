export const isJson = (j:string):any => {
  try {
    JSON.parse(j)
    return true;
  } catch (err) {
    return false;
  }
}