export default function iterateThroughObject(reportWithIterator) {
  let result = "";
  let iterator = reportWithIterator;

  let next = iterator.next();
  while (!next.done) {
    result += next.value + "\n";
    next = iterator.next();
  }

  return result;
