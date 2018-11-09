/**
 * Created by Juan Infante on 5/11/2018
 */

var Nav = function () {

    var domHolder = $('#navBarMain');
    var navArray = [
        {
            "slug" : "home",
            "label" : "Home",
            "targetDomId" : "body",
        },
        {
            "slug" : "about",
            "label" : "About",
            "targetDomId" : ".story_advantage",
        },
        {
            "slug" : "services",
            "label" : "Services",
            "targetDomId" : ".services",
        },
        {
            "slug" : "contact",
            "label" : "Contact",
            "targetDomId" : ".contact",
        },
        {
            "slug" : "ourplatform",
            "label" : "Our Platform",
            "targetDomId" : false,
            "url" : "http://www.buzzradar.com"
        }
    ];


    /**
     * Render the Nav in the page
     */
    var renderNav = function(){
        
        var ul = $('<ul class="navbar-nav"></ul>');
        domHolder.append(ul);
        $.each(navArray, function( index, value ) {
          //console.log( index + ": " + value.label );
          ul.append('<li class="nav-item"><a class="nav-link" href="#" data-slug="'+value.slug+'" data-targetdomid="'+value.targetDomId+'" data-url="'+value.url+'">'+value.label+'</a></li>');
        });

        $('.nav-item > a').click(function(e){
            $('#navBarMain').collapse('hide');
            e.preventDefault();
            var slug = $(this).data('slug');
            var targetdomid = $(this).data('targetdomid');
            var url = $(this).data('url');
            console.log(slug,targetdomid);
            if (targetdomid){
                $('html, body').animate({
                    scrollTop: $(targetdomid).offset().top - 50
                }, 1000);
            }else{
                console.log("loading external URL ->", url);
                window.open(url);
            }
        });

    };


    

    return {
        init: function () {
        	renderNav();
        }
    };
}();

Nav.init();