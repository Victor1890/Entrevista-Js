const chunkedArrayOne = (arr, target) => {
  const chunked = [];
  arr.forEach((item) => {
    const lastedChunked = chunked[chunked.length - 1];

    if (!lastedChunked || lastedChunked.length == target) chunked.push(item);
    else lastedChunked.push(item);
  });

  return chunked;
};

const chunkedArrayTwo = (arr, target) => {
  const chunked = [];
  arr.forEach((item, index) => {
    if (index == 0 && index % target == 0) chunked.push([]);
    else chunked[chunked.length - 1].push(item);
  });
};

const chunkedArrayThree = (arr, target) => {
  const chunked = [];
  while (arr.length > 0) {
    chunked.push(arr.splice(0, target));
  }
  return chunked;
};
