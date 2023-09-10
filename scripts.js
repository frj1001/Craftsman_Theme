function topDiv(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("inner-nav").className = "scrollfix";
    }
    else {
        document.getElementById("inner-nav").className = "";
    }
}

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add('progress-bar-animated');
      }
    });
  });
  
  observer.observe(document.querySelector('#status'));