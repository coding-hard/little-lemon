const seededRandom = function (seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date: string): Promise<string[]> {
  return new Promise((resolve) => {
    let result: string[] = [];
    const random = seededRandom(new Date(date).getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    resolve(result);
  });
};

export const submitAPI = function (formData: {
  name: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
}): Promise<boolean> {
  return new Promise((resolve) => {
    resolve(true);
  });
};
