$(window).on('load',function(){	

    var grid = new Muuri('.grid', {
    
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    $('.sort-btn li').on('click',function(){
        $(".sort-btn .active").removeClass("active");
        var className = $(this).attr("class");
        className = className.split(' ');
        $("."+className[0]).addClass("active");
        if(className[0] == "sort00"){
             grid.show('');
        }else{										
            grid.filter("."+className[0]); 	
        }
    });

    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, 
      },	
    });
        
    });