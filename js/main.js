// Lightbox adjustments

lightbox.option({
    'wrapAround': true,
    'maxHeight': 500,
    'maxWidth': 900,
    'positionFromTop': 40,
    'showImageNumberLabel': false
    })


// Searchbox
mySearch.addEventListener("keyup", function() {
    
    const input = document.getElementById('mySearch');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('myImages');
    const li = ul.getElementsByTagName('a');
  

    for (i = 0; i < li.length; i += 1) {
      photoInfo = li[i].getAttribute("data-title");
      if (photoInfo.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  });