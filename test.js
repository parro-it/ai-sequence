import test from "tape-async";
import aiSequence from ".";
import delay from "delay";
import concat from "ai-concat";

function buildIterable(arr) {
  return arr.map(v => delay(v * 10).then(() => v));
}

test("merge iterables in parallel", async t => {
  const iterable = aiSequence(
    buildIterable([3, 2, 1]),
    buildIterable([6, 4, 5]),
    buildIterable([10, 9, 8, 7])
  );

  const result = await concat.obj(iterable);
  t.deepEqual([3, 2, 1, 6, 4, 5, 10, 9, 8, 7], result);
});

test("exports a function", async t => {
  t.is(typeof aiSequence, "function");
});
