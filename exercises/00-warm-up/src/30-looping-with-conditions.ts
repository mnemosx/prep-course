export {};

function onlyTheAces(arr) {
  return arr.filter(function(item) {
    return item === "Ace";
  });
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
