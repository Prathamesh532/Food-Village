const useFilter = (restarunts, text) => {
  const filterRes = restarunts.filter((res) =>
    res.info.name.toLowerCase().includes(text.toLowerCase())
  );

  return filterRes;
};

export default useFilter;