function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var moreKittens1 = [...kittens, name]
  return moreKittens1
}



function prependKitten(name){
  var moreKittens2 = [name, ...kittens]
  return moreKittens2
}
   
   
function removeLastKitten(){
}

function removeFirstKitten(){
}