(function () {
    var navList = document.querySelector('.js-navlist'),
        sections = document.getElementsByClassName('section'),
        navItems = document.querySelectorAll('.nav-item')
        menuBtn = document.querySelector('.menu-btn'),
        nav = document.querySelector('.js-nav')
        nextBtn = document.querySelector('.js-next-btn')

    navList.addEventListener('click', function (e) {
        var target,
            index
        
        if (e.target.classList.contains('nav-item')) {
            target = e.target
        } else if (e.target.parentNode.classList.contains('nav-item')) {
            target = e.target.parentNode
        }
        
        if(!target) return

        index = Array.prototype.indexOf.call(navList.children, target)

        Array.prototype.forEach.call(navItems, function(node){
            node.classList.remove('selected')
        })

        Array.prototype.forEach.call(sections, function(node,idx){
            if(idx !== index){
                node.classList.remove('visible')
            }else{
                node.classList.add('visible')
            }
        })
        target.classList.add('selected')
        
    })
    menuBtn.addEventListener('click', function(e){
        nav.classList.toggle('visible')
    })
    nav.addEventListener('click',function(){
        nav.classList.contains('visible') && nav.classList.toggle('visible')
    })
    nextBtn.addEventListener('click',function(){
        console.log('xxx')
        Array.prototype.forEach.call(sections, function(node,index){
            if(index === 1){
                node.classList.add('visible')
            }else{
                node.classList.remove('visible')
            }
        })
        window.scrollTo(0, 0)
    })
})()