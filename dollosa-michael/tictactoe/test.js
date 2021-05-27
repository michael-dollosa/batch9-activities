let col = 3

for(let x = 0; x < col; x++){
  for(let y = 0; y < col; y++){
    if((x+y) == (col-1)){
      console.log([x],[y])
    }
  }
}