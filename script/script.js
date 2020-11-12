let tab = function () {
    let $tabNav = document.querySelectorAll('.tabs-nav__item')
    let $tabContent = document.querySelectorAll('.tabs__content')
    let tabName;

    for(let $element of $tabNav) {

        $element.addEventListener('click', selectTabNav)
    }
    function selectTabNav() {
        for(let $element of $tabNav) {

            $element.classList.remove('is-active');
        }
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        console.log(tabName)
        selectTabContent(tabName)
    }

    function selectTabContent(className) {
        for(let element of $tabContent) {
          if(element.classList.contains(className)) {
              element.classList.add('is-active')
              console.log('добавили is-active')
          }
          else {
            element.classList.remove('is-active')
          }
        }
    }
}

tab()