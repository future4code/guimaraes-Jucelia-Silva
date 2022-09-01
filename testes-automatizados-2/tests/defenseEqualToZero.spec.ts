import { validateCharacter } from "../src";

describe.skip("Defense = 0", ()=>{
    test("Should return false for defense = 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 50,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });
})