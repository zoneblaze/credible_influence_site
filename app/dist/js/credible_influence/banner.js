/**
 * Created by Juan Infante on 5/11/2018
 */

var Banner = function () {

	var sentenceIndex = 0;
	var charIndex = 0;
	var bannerCopyArray = [		
		"Understand your current audience and the one you want to target.",
		"Guide you to creating great performing content.",
		"Guide you to creating great performing content.",
		"Help you create powerful social strategies.",
		"Predict the game changing trends.",
		"Understand your social performance today and how to get it to where you want to go.",
		"Help you see how you stack up against your competitors and then beat them.",
		"Help you understand and manage threats to your reputation.",
		"Help you pick the right partners and influencers for your strategy.",
	];
	var delayBetweenSentences = 3000;


    
    /**
     * Starts the copy animation in the banner
     */
    var startAnimation = function(){
        
        $('.banner_text_animation').find('.copy').empty();
    	animateSentence(charIndex);

    };



    var animateSentence = function(charIndex) {

    	var sentence = bannerCopyArray[sentenceIndex];
    	if (charIndex < sentence.length){
	    	setTimeout(function() {
				$('.banner_text_animation').find('.copy').append(sentence.charAt(charIndex))
				charIndex++;
				animateSentence(charIndex);
			},50);
    	}else{
    		console.log("Sentence is over!!!");
    		//wait for a delay and then show the next one
    		sentenceIndex++;
    		if (sentenceIndex >= bannerCopyArray.length){
    			sentenceIndex = 0;
    			charIndex = 0;
    		}
    		setTimeout(function() {
	    		startAnimation();			
    		},delayBetweenSentences);
    	}
    	
    };

    

    return {
        init: function () {
        	startAnimation();
        }
    };
}();

Banner.init();