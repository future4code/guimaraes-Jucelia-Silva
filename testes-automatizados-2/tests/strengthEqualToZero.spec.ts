import { validateCharacter } from "../src";

describe.skip("Strength = 0", ()=>{
    test("Should return false for strength = 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 0,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });
})