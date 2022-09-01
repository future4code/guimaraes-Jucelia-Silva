import { validateCharacter } from "../src";

describe.skip("empty name", ()=>{
    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false)
      })
})