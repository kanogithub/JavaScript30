;(function(){
  const inputs = document.querySelectorAll("input");
  
  const changeHandler = function(e){
    const unit = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
  }

  inputs.forEach(input => {
    input.addEventListener('input', changeHandler);
  });
})();