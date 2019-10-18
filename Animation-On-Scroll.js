var eles = Array.prototype.slice.call(document.querySelectorAll('.animated'));
document.addEventListener('scroll', animationOnScroll);
animationOnScroll();

function animationOnScroll() {
    eles = eles.filter(function(ele) {
        var block = getBlock(ele);
        if (block.isVisible) {
            ele.classList.add('fadeInUp');
            return false;
        }
        return true;
    });
    
    if (eles.length <= 0) document.removeEventListener('scroll', animationOnScroll);
}

function getBlock(ele) {
    var inHeight = window.innerHeight;
    var block = ele.getBoundingClientRect();
    block.isVisible = block.top - inHeight < 0;
    return block;
}
