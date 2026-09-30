function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { greet };

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");

  if (heading) {
    heading.textContent = greet("Uzair");
  }
}
