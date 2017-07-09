import "./index.styl";
import "./Elements/Button/button.js";
import "./Elements/Arrow-button/Arrow-button.js";
import "./Elements/pie-chart/pie-chart.js";
import "./Elements/donut-chart/donut-chart.js";


import "./Elements/message-form/message-form.js"
import "./Elements/hint/hint.js"
import "./Elements/toggle/toggle.js"
import "./Elements/tick-box/tick-box.js"

import "./Elements/Profil/profil.js"
import "./Elements/news/news.js"
import "./Elements/event/event.js"
import "./Elements/location/location.js"


import './Elements/video/video.js'
import './Elements/list-icons/list-icons.js'
import './Elements/reviews/reviews.js'

$(function(){
    
    $('#scroll_down').click(function(){
        
        $('html, body').animate({
        scrollTop: $(".preview").height()
    }, 800); 
    });
})