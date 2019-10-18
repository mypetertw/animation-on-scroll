var eles = Array.prototype.slice.call(document.querySelectorAll('.animated'));
document.addEventListener('scroll', animatedFadeInUp);
animatedFadeInUp();

function animatedFadeInUp() {
    eles = eles.filter(function(ele) {
        var rect = getRect(ele);
        if (rect.isVisible) {
            ele.classList.add('fadeInUp');
            return false;
        }
        return true;
    });
    if (eles.length <= 0) document.removeEventListener('scroll', animatedFadeInUp);
}

function getRect(ele) {
    var inHeight = window.innerHeight;
    var rect = ele.getBoundingClientRect();
    rect.isVisible = rect.top - inHeight < 0;
    return rect;
}
