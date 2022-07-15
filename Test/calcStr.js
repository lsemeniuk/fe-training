const pages = 84;
const letterNotebookPages = 12;
const pagesNotebook = letterNotebookPages * 4;

const finalArr = [];

let notebooks = Math.ceil(pages / pagesNotebook);

for (let i = 1; i <= notebooks; i++) {
  let firstPage = (i - 1) * pagesNotebook + 1;
  let lastPage;
  i === notebooks ? (lastPage = pages) : (lastPage = i * pagesNotebook);

  const strFront = [];
  const strBack = [];

  if (i !== notebooks) {
    for (let p = 0; p < letterNotebookPages; p++) {
      strFront.push(lastPage - p * 2, firstPage + p * 2);
      strBack.push(firstPage + 1 + p * 2, lastPage - 1 - p * 2);
    }
  } else {
    let lastLatterNotebook = (lastPage - firstPage + 1) / 4;

    for (let p = 0; p < lastLatterNotebook; p++) {
      strFront.push(lastPage - p * 2, firstPage + p * 2);
      strBack.push(firstPage + 1 + p * 2, lastPage - 1 - p * 2);
    }
  }
  finalArr.push({ strFront, strBack });
}

console.log(finalArr, 'notebooks', notebooks);
