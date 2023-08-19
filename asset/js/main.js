window.addEventListener('load', function() {
  chucham();
});

function chucham(){
  var headerContent=document.querySelectorAll(".show-onVideo .show");
  var delay=500;
  for(let i=0;i<headerContent.length;i++){
      setTimeout(function(){
          headerContent[i].style.opacity=1;
      }, delay);
      delay += 200;
  }
};

window.onscroll = function() {
  var header = document.querySelector(".header");
  var headerOffset = header.offsetTop;
  
  if (window.pageYOffset > headerOffset) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
  
  // Kiểm tra khi người dùng lướt xuống 30px, hiển thị nút "Go to Top"
  var goTopButton = document.getElementById("gototop");
  if (window.pageYOffset > 300) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
};

// Hàm để cuộn lên đầu trang khi nhấp vào nút "Go to Top"
function goToTop() {
 var timer = setInterval(function(){
  document.documentElement.scrollTop -= 10;
  if (document.documentElement.scrollTop <=0){
    clearInterval(timer);
  }
 },1);
}


$(document).ready(function() {
  $(window).scroll(function() {
    function addAnimationElementInWindow(element) {
      setTimeout(function() {
        let rect = element.getBoundingClientRect();
        let heightScreen = window.innerHeight;
        if (!(rect.bottom < 0 || rect.top > heightScreen)) {
          element.classList.add('start');
        }
      }, 100);
    }
    function handleResponsiveNav() {
      $('.menu-mobile').click(() => {
          $('.menu > ul').toggleClass('show')
        
      })
  } handleResponsiveNav()
    function startAnimationScroll() {
      document.querySelectorAll('.title-field').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__right-to-left').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__bot-to-top').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__left-to-right').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__hide-to-see').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
    }
  
    startAnimationScroll();
  });

  // Gọi hàm startAnimationScroll() một lần nữa tại đây nếu bạn muốn chạy lúc ban đầu
});


let list = document.querySelector('.anhchuyen .list');
let items = document.querySelectorAll('.anhchuyen .list .item');
let dots = document.querySelectorAll('.anhchuyen .dots li')
let prev = document.getElementById('prev');
let next = document.getElementById('next');


if (next == null) {
    console.log('memay');
} else {
    console.log('thanhcong');
}
let active = 0;
let lengthItems = items.length - 1;
prev.onclick = function(){
    if (active <= 0){
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadAnhchuyen();
}

next.onclick = function () {
    if (active >= lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadAnhchuyen();
}
let refreshSlider = setInterval(()=>{next.click()},5000);
function reloadAnhchuyen() {
    let checkLeft = items[active].offsetLeft;
    console.log(checkLeft);
    list.style.left= -checkLeft + 'px';
    let lastActivedot = document.querySelector('.anhchuyen .dots li.active');
    lastActivedot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()},5000);
}

dots.forEach((li, key)=>{
    li.addEventListener('click', function(){
        active=key;
        reloadAnhchuyen();
    })
})
