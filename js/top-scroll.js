$((function(){$(window).scroll((function(){var t=$(this).scrollTop(),n=$(".back-top-btn");t>150?n.fadeIn(1e3):n.fadeOut(1e3)})),$(".back-top-btn").click((function(t){t.preventDefault(),$("html,body").animate({scrollTop:0},1500)}))}));