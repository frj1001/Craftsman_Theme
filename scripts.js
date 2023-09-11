// The Javascript related to website is in this file

// The function to place navbar on top of the document when scrolling
function topDiv(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("inner-nav").className = "scrollfix";
    }
    else {
        document.getElementById("inner-nav").className = "";
    }
}

// The function that identifies when element #status comes in scrollview and performs event accordingly rather than on default page refresh
const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add('progress-bar-animated');
      }
    });
  });
  
  observer.observe(document.querySelector('#status'));
