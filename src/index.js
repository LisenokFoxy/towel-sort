
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let new_array=[];
  if (matrix == null) return new_array;
  for (let i=0; i<matrix.length; i++) {
    if (i%2 == 0){
        new_array=new_array.concat(matrix[i]);
    } else {
      new_array=new_array.concat(matrix[i].reverse());
    }
  }
  return new_array;
}