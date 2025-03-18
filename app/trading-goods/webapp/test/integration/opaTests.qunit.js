sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tradinggoods/test/integration/FirstJourney',
		'tradinggoods/test/integration/pages/MaterialsList',
		'tradinggoods/test/integration/pages/MaterialsObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaterialsList, MaterialsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tradinggoods') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaterialsList: MaterialsList,
					onTheMaterialsObjectPage: MaterialsObjectPage
                }
            },
            opaJourney.run
        );
    }
);