/**
 * Created by Juan Infante on 5/11/2018
 */

var Main = function () {


    var storyAdvantageCollapse = false;
    var storyAdvantageSelected = null;
    

    var addStoryAdvantage = function(){
    
        var copy;
        $('.story_advantage').find('button').click(function() {
            
            var btn = $(this);
            var type = btn.data('type');
            
            switch (type){
                case 'story':
                    copy = '<h2 class="mb-4 title text-center">OUR STORY</h2> <p>Data without context and empathy is meaningless.</p> <p>We’ve spent the last 6 years designing and developing Buzz Radar a real-time insight platform for some of the biggest brands in the world. As well as providing cutting edge insight technology our clients have often asked us to help translate that insight, provide context and data driven advice to inform their strategy. So we’ve created Credible Influence to do just that.</p> <p>Whether it’s helping guide engaging creative content or helping predict trends that provides brand with game changing insight. Everything we do is based on state of the art data science.</p>';
                break;
                case 'advantage':
                    copy = '<h2 class="mb-4 title text-center">OUR ADVANTAGES</h2> <p>Dashboards, algorithms and machine learning can only push data, correlations and insight to a certain point. In a world where technology has adapted faster than human behaviour, you need experts to provide a human touch to ensure you’re working with powerful insight that will help you to win</p> <p>The engine that powers and supports our team of strategists, tacticians and analysts is our proprietary Buzz Radar platform. 6 years in the making and built using IBM Watson AI it allows us to capture, analyse and visualise vast amounts of data quickly and extract deep meaningful insight.</p> <p>Combined with our industry leading team we can quickly and easily uncover insights, spot trends and make predictions for our clients. Turning all that, unwieldy unconnected data into powerful actionable intelligence that drives ROI.</p>';
                break;
            }

            if (type != storyAdvantageSelected){
                if (storyAdvantageCollapse){
                    $('.story_advantage_copy').collapse('hide');                
                    storyAdvantageCollapse = false; 
                    setTimeout(function(){
                        applyCopyAnimate(copy)
                    },1000);
                }else{
                    applyCopyAnimate(copy)
                }
            }else{
                $('.story_advantage_copy').collapse('hide');                
                storyAdvantageCollapse = false;
            }

            storyAdvantageSelected = type;
            
        });

        function applyCopyAnimate(copy){
            $('.story_advantage_copy').find('.dynamic-copy').html(copy);
            $('.story_advantage_copy').collapse('show');
            storyAdvantageCollapse = true;

            $('html, body').animate({
                scrollTop: $('.story_advantage_copy').offset().top - 50
            }, 1000);
        }

    };



    var setScrollTop = function() {

        $('#backtop,.navbar-brand').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);

        });

    };



    

    return {
        init: function () {
        	addStoryAdvantage();
            setScrollTop();
        }
    };
}();

Main.init();