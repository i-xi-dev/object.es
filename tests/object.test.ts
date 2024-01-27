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
