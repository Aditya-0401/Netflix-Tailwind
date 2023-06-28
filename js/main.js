const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e){

    // removeBorder();
    removeShow();
    // console.log("Add Border to ")
    // this.classList.add('tab-border');
    
    //we have to add show class in the one in which tab we have clicked
    
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class now
    tabContentItem?.classList.add('show');
}

// function removeBorder(){
//     tabItems.forEach(item =>item.classList.remove('tab-border'))
// }

function removeShow(){
    tabContentItems.forEach(item =>item.classList.remove('show'))
    // tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click',selectItem));