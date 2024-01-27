import { assertNotStrictEquals, assertStrictEquals } from "./deps.ts";
import { ObjectEx } from "../mod.ts";

Deno.test("ObjectEx.isNonNullObject()", () => {
  assertStrictEquals(ObjectEx.isNonNullObject({}), true);
  assertStrictEquals(ObjectEx.isNonNullObject(null), false);
  assertStrictEquals(ObjectEx.isNonNullObject(undefined), false);
  assertStrictEquals(ObjectEx.isNonNullObject([]), true);
  assertStrictEquals(ObjectEx.isNonNullObject(new Error()), true);
  assertStrictEquals(ObjectEx.isNonNullObject(""), false);
  assertStrictEquals(ObjectEx.isNonNullObject(1), false);
  assertStrictEquals(ObjectEx.isNonNullObject(true), false);
  assertStrictEquals(ObjectEx.isNonNullObject(false), false);
});

Deno.test("ObjectEx.isIterableObject()", () => {
  assertStrictEquals(ObjectEx.isIterableObject({}), false);
  assertStrictEquals(ObjectEx.isIterableObject(null), false);
  assertStrictEquals(ObjectEx.isIterableObject(undefined), false);
  assertStrictEquals(ObjectEx.isIterableObject([]), true);
  assertStrictEquals(ObjectEx.isIterableObject(new Error()), false);
  assertStrictEquals(ObjectEx.isIterableObject(""), false);
  assertStrictEquals(ObjectEx.isIterableObject(1), false);
  assertStrictEquals(ObjectEx.isIterableObject(true), false);
  assertStrictEquals(ObjectEx.isIterableObject(false), false);

  assertStrictEquals(ObjectEx.isIterableObject(new Uint8Array()), true);
  assertStrictEquals(ObjectEx.isIterableObject(new String()), true);
  assertStrictEquals(ObjectEx.isIterableObject((function* () {})()), true);
  assertStrictEquals(
    ObjectEx.isIterableObject((async function* () {})()),
    false,
  );
});

Deno.test("ObjectEx.isAsyncIterableObject()", () => {
  assertStrictEquals(ObjectEx.isAsyncIterableObject({}), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(null), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(undefined), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject([]), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(new Error()), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(""), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(1), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(true), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(false), false);

  assertStrictEquals(ObjectEx.isAsyncIterableObject(new Uint8Array()), false);
  assertStrictEquals(ObjectEx.isAsyncIterableObject(new String()), false);
  assertStrictEquals(
    ObjectEx.isAsyncIterableObject((function* () {})()),
    false,
  );
  assertStrictEquals(
    ObjectEx.isAsyncIterableObject((async function* () {})()),
    true,
  );
});
