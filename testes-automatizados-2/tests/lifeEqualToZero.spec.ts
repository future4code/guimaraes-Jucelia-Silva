import { validateCharacter } from "../src";

describe.skip("life equal to 0", ()=>{
    test("Should return false for life 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });
})