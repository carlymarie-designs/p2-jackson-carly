

const btn = document.querySelector('#reveal');
// reveal data on click
btn.addEventListener( "click", tapApi );

function tapApi() {
  // vars
  const xhr = new XMLHttpRequest();
  const url = 'https://restcountries.eu/rest/v2/all';
  const output = document.querySelector('#output .cols');

  xhr.onreadystatechange = function() {
    // console.log(xhr.readyState);

    // check for errors and spit out data
    if( xhr.readyState == 4 && xhr.status == 200 ) {
      
      // convert data to JSON
      const str = xhr.responseText;
      const obj = JSON.parse(str);
      
      // log out results
      // console.log(obj);

      // loop out data here
      for ( i = 0; i < obj.length; i++ ) {

        // loop out location flags
        output.innerHTML +=  "<div class='col-6-md col-3'><div class='item'><div class='item-flag'><img class='img-fluid' src='" + obj[i].flag + "'></div><div class='item-name'>" + obj[i].name + "</div></div></div>";

      }

    }
  }

  xhr.open('GET', url);
  xhr.send();
  // console.log(xhr);

  btn.style.cssText += 'display: none';
}

  
