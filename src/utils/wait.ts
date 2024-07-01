const wait = (ms: number) => {
  return new Promise<void>((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve();
      clearTimeout(timeoutId);
    }, ms);
  });
};

export default wait;
