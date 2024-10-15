export function isNonNullObject(test: unknown): test is NonNullable<object> {
  return ((typeof test === "object") && (test !== null));
}

// deno-lint-ignore no-explicit-any
export function isIterableObject<T = any>(test: unknown): test is Iterable<T> {
  return isNonNullObject(test) && (Symbol.iterator in test);
}

// deno-lint-ignore no-explicit-any
export function isAsyncIterableObject<T = any>(
  test: unknown,
): test is AsyncIterable<T> {
  return isNonNullObject(test) && (Symbol.asyncIterator in test);
}

// // deno-lint-ignore no-explicit-any
// export function equalsEntries(a: any, b: any): boolean {
//   const aType = (typeof a);
//   if (aType !== (typeof b)) {
//     return false;
//   }
//   if (aType !== "object") {
//     return false;
//   }

//   const aEntries = Object.entries(a);
//   const bEntries = Object.entries(b);

//   if (aEntries.length !== bEntries.length) {
//     return false;
//   }

//   //TODO 循環参照検出
// }
