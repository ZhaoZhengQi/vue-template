import { expect, test } from "vitest"
import { add } from "@/utils/index"
test("utils add", () => {
	expect(add(1, 2)).toBe(3)
})
