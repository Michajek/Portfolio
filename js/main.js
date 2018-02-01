  var backButtons = $(".back");
  var portfolio = document.getElementsByClassName('portfolio');
  var aboutMe = document.getElementsByClassName('aboutme');
  var upleft = document.getElementsByClassName("triangle--upleft");
  var skills = document.getElementsByClassName('skills');
  var contact = document.getElementsByClassName('contact');

  document.getElementById('aboutme').addEventListener( 'click', function(){
      $(aboutMe).toggleClass('clicked');
      console.log(upleft);
      $(upleft).toggleClass('clicked');
      console.log(upleft);
  });

  document.getElementById('skills').addEventListener( 'click', function(){
      $(skills).toggleClass('clicked');
  });

  document.getElementById('portfolio').addEventListener( 'click', function(){
      $(portfolio).toggleClass('clicked');
  });

  document.getElementById('contact').addEventListener( 'click', function(){
      $(contact).toggleClass('display');
      setTimeout( function(){
      $(contact).toggleClass('clicked');
  }  , 10 );
});
  backButtons.each(function() {
      $(this).on("click", function(){
          $(aboutMe).removeClass('clicked')
          $(skills).removeClass('clicked')
          $(portfolio).removeClass('clicked')
          $(contact).removeClass('clicked')
          setTimeout( function(){
              $(contact).removeClass('display');
          }  , 1000 );
        });
    });


// getElementById("aboutme")
// document.getElementById("aboutme").addEventListener("click", function() {
//     console.log("asd");
// });
