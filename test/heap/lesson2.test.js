import Ugly from "../../code/heap/lesson2";

test("ugly:1", () => {
  expect(Ugly.getPrimes(6)).toEqual([2, 3]);
  expect(Ugly.getPrimes(4)).toEqual([2]);
});
