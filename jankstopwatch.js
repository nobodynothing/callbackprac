
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].forEach(function(i) {
  setTimeout(function(){
    console.log(i);
    }, (11-i)*1000);
}
)
