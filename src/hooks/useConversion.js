const useConverstion = (value, factor) => {
  function convertData(value) {
    if (factor === "toStore") {
      return JSON.stringify(value);
    }
    return JSON.parse(value);
  }
  return convertData(value);
};
export { useConverstion };
