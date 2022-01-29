
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix!=undefined){
    return(
      matrix.reduce(function(temp, cur, i) {
        cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => temp.push(e));
        return temp;
      }, [])
    );
  }
  else
    return [];
}
