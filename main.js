class Tabs{
  constructor(obj){
      this.link = document.querySelectorAll(obj.el1)
      this.tab = document.querySelectorAll(obj.el2)
      this.link.forEach((el,index)=>{
          el.addEventListener('click',(e)=>{
              e.preventDefault()
              this.link.forEach((element,i)=>{
                 element.classList.remove('active')
                 this.tab[i].classList.remove('active')  
              })
             el.classList.add('active')
             this.tab[index].classList.add('active')
          })
      })
  }
}
let tabs = new Tabs({
    el1:'.box__link',
    el2:'.box__tab'
})
console.log(tabs);