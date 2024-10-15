import { assertStrictEquals } from "./deps.ts";
import { IterableObject } from "../mod.ts";

Deno.test("IterableObject.isNonNullObject()", () => {
  assertStrictEquals(IterableObject.isNonNullObject({}), true);
  assertStrictEquals(IterableObject.isNonNullObject(null), false);
  assertStrictEquals(IterableObject.isNonNullObject(undefined), false);
  assertStrictEquals(IterableObject.isNonNullObject([]), true);
  assertStrictEquals(IterableObject.isNonNullObject(new Error()), true);
  assertStrictEquals(IterableObject.isNonNullObject(""), false);
  assertStrictEquals(IterableObject.isNonNullObject(1), false);
  assertStrictEquals(IterableObject.isNonNullObject(true), false);
  assertStrictEquals(IterableObject.isNonNullObject(false), false);
});

Deno.test("IterableObject.isIterableObject()", () => {
  assertStrictEquals(IterableObject.isIterableObject({}), false);
  assertStrictEquals(IterableObject.isIterableObject(null), false);
  assertStrictEquals(IterableObject.isIterableObject(undefined), false);
  assertStrictEquals(IterableObject.isIterableObject([]), true);
  assertStrictEquals(IterableObject.isIterableObject(new Error()), false);
  assertStrictEquals(IterableObject.isIterableObject(""), false);
  assertStrictEquals(IterableObject.isIterableObject(1), false);
  assertStrictEquals(IterableObject.isIterableObject(true), false);
  assertStrictEquals(IterableObject.isIterableObject(false), false);

  assertStrictEquals(IterableObject.isIterableObject(new Uint8Array()), true);
  assertStrictEquals(IterableObject.isIterableObject(new String()), true);
  assertStrictEquals(
    IterableObject.isIterableObject((function* () {})()),
    true,
  );
  assertStrictEquals(
    IterableObject.isIterableObject((async function* () {})()),
    false,
  );
});

Deno.test("IterableObject.isAsyncIterableObject()", () => {
  assertStrictEquals(IterableObject.isAsyncIterableObject({}), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(null), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(undefined), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject([]), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(new Error()), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(""), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(1), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(true), false);
  assertStrictEquals(IterableObject.isAsyncIterableObject(false), false);

  assertStrictEquals(
    IterableObject.isAsyncIterableObject(new Uint8Array()),
    false,
  );
  assertStrictEquals(IterableObject.isAsyncIterableObject(new String()), false);
  assertStrictEquals(
    IterableObject.isAsyncIterableObject((function* () {})()),
    false,
  );
  assertStrictEquals(
    IterableObject.isAsyncIterableObject((async function* () {})()),
    true,
  );
});
