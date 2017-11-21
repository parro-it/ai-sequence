import test from "tape-async";
import aiSequence from ".";

test("exports a function", async t => {
  t.is(typeof aiSequence, "function");
});
