export function isNonNullObject(test: unknown): test is NonNullable<object> {
  return ((typeof test === "object") && (test !== null));
}
