export default async function* aiSequence(data) {
  for (const item of data) {
    yield item;
  }
}
