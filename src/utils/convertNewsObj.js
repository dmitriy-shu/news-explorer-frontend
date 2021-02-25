export default function convertNewsObj(newsObj, keyWord) {
  // console.log(newsObj, keyWord);
  let month = newsObj.publishedAt.slice(5, 7);
  switch (month) {
    case "01": month = "января,";
      break;
    case "02": month = "февраля,";
      break;
    case "03": month = "марта,";
      break;
    case "04": month = "апреля,";
      break;
    case "05": month = "мая,";
      break;
    case "06": month = "июня,";
      break;
    case "07": month = "июля,";
      break;
    case "08": month = "августа,";
      break;
    case "09": month = "сентября,";
      break;
    case "10": month = "октября,";
      break;
    case "11": month = "ноября,";
      break;
    default: month = "декабря,";
  }
  let date = ((newsObj.publishedAt.slice(8, 9) === '0') ?
    newsObj.publishedAt.slice(9, 10)
    : newsObj.publishedAt.slice(8, 10)
  );

  const dateFormatted = date + ' ' + month + ' ' + newsObj.publishedAt.slice(0, 4)
  const modifiedNewsObj = {
    '_id': newsObj.description.slice(0, 10) + Math.floor(Math.random() * 10000),
    'isMarked': false,
    'keyword': keyWord,
    'title': newsObj.title,
    'text': newsObj.description,
    'date': dateFormatted,
    'source': newsObj.source.name,
    'link': newsObj.url,
    'image': newsObj.urlToImage

  };
  return modifiedNewsObj;

} 