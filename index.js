import AsyncIterable from "asynciterable";

const iterateTo = async (write, iterable) => {
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);
  let item = await iterator.next();
  while (!item.done) {
    write(await item.value);
    item = await iterator.next();
  }
};

export default function aiMerge(...sources) {
  return new AsyncIterable(async (write, end) => {
    for (const source of sources) {
      await iterateTo(write, source);
    }
    end();
  });
}
