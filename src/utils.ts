export function isParsable(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
}

export function chainElementID(parentID: string, fieldName: string) {
  return [parentID, fieldName].join('.');
}
