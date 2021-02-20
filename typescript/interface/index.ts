interface Dimention {
  width: string;
  height: string;
}
function getDimention():Dimention {
  let width = "200px";
  let height = "300px";
  return {
    width: width,
    height: height,
  };
}
console.log(getDimention());

