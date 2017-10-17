(function () {
    var nav = document.querySelector('.js-nav'),
        sections = document.getElementsByClassName('section'),
        navItems = document.querySelectorAll('.nav-item')
   
    nav.addEventListener('click', function (e) {
        var target,
            index
        if (e.target.classList.contains('nav-item')) {
            target = e.target
        } else if (e.target.parentNode.classList.contains('nav-item')) {
            target = e.target.parentNode
        }
        
        if(!target) return

        index = Array.prototype.indexOf.call(nav.children, target)

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
})()