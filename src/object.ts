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
