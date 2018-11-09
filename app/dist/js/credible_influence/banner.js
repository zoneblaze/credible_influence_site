/**
 * Created by Juan Infante on 5/11/2018
 */

var Banner = function () {

	var sentenceIndex = 0;
	var charIndex = 0;
	var bannerCopyArray = [		
		"Understand your current audience ensuring your content and media budgets deliver the right results with less wastage.",
		"Help you build influencer and partnership strategies that deliver real results.",
		"Help you create powerful strategies that cut through the noise.",
		"Understand your social performance today and how to get it to where you want to go.",
		"Predict the game changing trends that give you the advantage ahead of the competition.",
		"Create great performing content that hits the right person, with the right message at the right time.",
		"Help you see how you stack up against your competitors.",
		"Spot opportunities and potential weaknesses in your approach to ensure you stay one step ahead.",
		"Inspire your creative teams to provide content that your audience will love.",
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