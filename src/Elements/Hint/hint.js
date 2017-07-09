import "./hint.styl"


(function($){
    
    $('.hint-form').each(function(){
        
        
        $(this).submit(function(e){
              
        
            $(this).find('.hint-control').each(function(){
                
               Hint.Hide( this );
                
                 switch( $(this).data('hint') )
              {
                    case 'text':
                         
                        if( !/[a-zа-я]{2,}/i.test( $(this).children('input').val() ) )
                            {
                                Hint.Show( this,'right', 'Только буквы!', '#e75735')
                              
                                e.preventDefault();
                            }
                            
                      break;
                      
                    case 'e-mail':
                         
                        if(!/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i.test( $(this).children('input').val() )  )
                            {
                                Hint.Show( this,'right', 'Некорректный адрес!', '#e75735')
                                e.preventDefault();
                            }
                            
                      break;
              }
            })
        })
   
         
       
    });
        
      
    
    
    class Hint{
        
        static Show(element, side, text, color){
            
        element = $(element)
        element.children().remove(".hint");
            
        var hint = $("<div/>").addClass("hint").css("background-color",color);        
        var hint_text = $("<span/>").text( text );
        var hint_arrow = $("<div/>").addClass("hint__arrow");
         
            
            switch (side){
                case 'left':
                   
                    hint.addClass("hint_left")
                    hint_arrow.css("border-color", "transparent transparent transparent " + color)
                break;
                    
                case 'right':
                
                    hint.addClass("hint_right")
                    hint_arrow.css("border-color", "transparent " + color + " transparent transparent") 
                break;
        }
                
        hint.append(hint_text).append(hint_arrow);
            
        element.append(hint);
        }
        
        static Hide(element){
            
            element = $(element);
            element.children().remove(".hint");
        }
    }
    
})(jQuery)