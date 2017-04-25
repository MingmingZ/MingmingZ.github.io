
endTour = function() {
    hopscotch.endTour();
}

// Define the tour!
var maptour = {
    id: "welcome_tour",
      steps: [
        {
          title: "Welcome to the Houston Data Connections Dashboard - Map!",
          content: "First time here? Let's take a short tutorial!<br>",
		  target: "title",
          placement: "bottom",
		  xOffset: "center",
          arrowOffset: "center",        
          width: "400",
          padding: "20",
          showCTAButton: "true",
          ctaLabel: "Skip Tutorial",
          onCTA: endTour
        },
		{
          title: "Map",
          content: 'This is the map view. You can use the "+/-" to zoom in/out map, search address, and turn on or off houston city boundary.',
          target: "viewDiv",
          placement: "bottom",
		  xOffset:"center",
		  arrowOffset:"center",
		  yOffset:"center"
        } ,
        {
          title: "Indicator Catetory",
          content: "Click to choose a category",
          target: "category",
          placement: "bottom",
		  arrowOffset: "center"
        } ,
		{		
		  title: "Indicator",
          content: "Click to choose a indicator, the map will update automatically",
          target: "indicator",
          placement: "bottom",
		  arrowOffset: "center"
        } , 
		{
		  title: "Go to another page",
          content: "You can click the buttons on the left to jump into other pages, for example, the community profile page",
          target: "profile",
          placement: "right",
		  zindex:6
        } ,	
		{
          title: "Need more guidence?",
          content: 'Check FAQ "How to use the tool"',
          target: "FAQ",
          placement: "right",
		  zindex:6
        }, 
        {
          title: "Show tutorial again",
          content: "Click this button to show tutorial again",
          target: "tutorial",
          placement: "right",
		  zindex:6
        } 				
      ],
		  showPrevButton: true
    };

    // Start the tour!
    hopscotch.startTour(maptour);
        