
endTour = function() {
    hopscotch.endTour();
}

// Define the tour!
var maptourp = {
    id: "welcome_tour",
      steps: [
        {
          title: "Welcome to the Houston Data Connections Dashboard - Community Profile!",
          content: "First time here? Let's take a short tutorial!<br>",
		  target: "profiletitle",
          placement: "bottom",
		  xOffset: "center",
          arrowOffset: "center",        
          width: "400",
          padding: "20",
		  zindex:500,
          showCTAButton: "true",
          ctaLabel: "Skip Tutorial",
          onCTA: endTour
        },
		{
          title: "Select A Community from Map",
          content: 'You can select a community from the map',
          target: "map",
          placement: "bottom",
		  xOffset:"center",
		  arrowOffset:"center",
		  yOffset:"center",
		  zindex:500
        } ,
        {
          title: "Select A Community from the community list",
          content: "You can also select a community from this dropdown list. Try it! It's searchable!",
          target: "ctaselect",
          placement: "bottom",
		  arrowOffset: "center",
		  xOffset:"center",
		  zindex:500
        } ,
		{
		  title: "Go to another page",
          content: "You can click the buttons on the left to jump into other pages, for example, the Map page",
          target: "mapbtn",
          placement: "right",
		  zindex:500
        } ,
        {
          title: "Need more guidence?",
          content: 'Check FAQ "How to use the tool"',
          target: "FAQ",
          placement: "right",
		  zindex:500
        } ,		
        {
          title: "Show tutorial again",
          content: "Click this button to show tutorial again",
          target: "tutorial",
          placement: "right",
		  zindex:500
        } 				
      ],
		  showPrevButton: true
    };

    // Start the tour!
    hopscotch.startTour(maptourp);
        