import './reviews.styl'
    
//require("jquery-ui-bundle");   easeInOutBack

$(function(){
  
  $('.slider-reviews').each(function(){
      
      var slider = $(this);
      var complete = true;
      var curren_element = 0;
      
        slider.children('.slider-reviews__arrow-right').click(function(){
            if(complete )
                {
                     var slider_width = slider.find('.slider-reviews__content').width();
                    var inner = slider.find('.slider-reviews__content-inner').first();
                    var newMargin =parseFloat( inner.css('margin-left') ) - slider_width;
                    
            if( newMargin > -inner.width() )
                
                {
                    complete = false;
                    
                    slider.children('.slider-reviews__arrow-left').removeClass('arrow-button_disabled');
                    
                    if( newMargin - slider_width <= -inner.width())
                        $(this).addClass('arrow-button_disabled');
                    
                   curren_element++
                    inner.animate({marginLeft :newMargin }, 1500, function(){
                        
                        complete = true;
                    });
                }
                  
            }
   
        })   
        
        
        slider.children('.slider-reviews__arrow-left').click(function(){
            if(complete)
                {
                     var slider_width = slider.find('.slider-reviews__content').width();
                    var inner = slider.find('.slider-reviews__content-inner').first();
                    var newMargin =parseFloat( inner.css('margin-left') ) + slider_width;
                   
                if(newMargin <=0){
                    
                    complete = false;
                    
                    slider.children('.slider-reviews__arrow-right').removeClass('arrow-button_disabled');
                    
                    if(newMargin == 0)
                        $(this).addClass('arrow-button_disabled');
                  
                    curren_element--
                    inner.animate({marginLeft : newMargin}, 1500,  function(){
                        
                        complete = true;
                    }); 
                }
               
                   
                }
   
        })
        
        
        $(window).resize(function(){
            
            var slider_width = slider.find('.slider-reviews__content').width();
            var inner = slider.find('.slider-reviews__content-inner').first();
            var newMargin = -curren_element * slider_width;
            inner.css('margin-left', newMargin);
        })
    });
    
  })