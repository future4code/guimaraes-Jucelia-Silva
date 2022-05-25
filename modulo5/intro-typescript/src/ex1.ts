function checaTriangulo(a: string, b: string, c: string): string {
    if (a != b && b != c) {
      return "Escaleno";
    } else if (a == b && b == c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(checaTriangulo("12", "7", "9")); 
  console.log(checaTriangulo("12", "12", "12")); 
  console.log(checaTriangulo("12", "12", "9")); 