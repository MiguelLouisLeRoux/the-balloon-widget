export default function FactoryLogic() {
    let colourList = [];
    let trendingLimit = {};

    function requestColour(colVal) {
        let trim = colVal.trim();

        //Handling the colour name to be displayed to viewer
        let upperCaseColour = trim[0].toUpperCase() + trim.substring(1)
        if(/\s/g.test(upperCaseColour)) {
            let uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
            upperCaseColour = uppercaseWords(upperCaseColour);
        };

        //Handling the css colour value to check if input is a valid css colour
        let removeWhiteSpaceBetween = trim.replace(/\s+/g, '');
        let lowerCase = removeWhiteSpaceBetween.toLowerCase(); 
        let validCSSColour = new Option().style;
        validCSSColour.color = lowerCase;
          
         
        if (validCSSColour.color === lowerCase) {
            let checkIfColourExists = colourList.some(elem => elem.colour === upperCaseColour);

            if(checkIfColourExists) {
                for(let i = 0; i < colourList.length; i++) {
                    let itt = colourList[i];
                    if (itt.colour === upperCaseColour) {
                        itt.requests++;

                        if (itt.requests > 11){
                            
                            trendingLimit[itt.colour] = colourList.indexOf(itt);

                            if (Object.keys(trendingLimit).length > 3) {
                            
                                let index = trendingLimit[Object.keys(trendingLimit)[0]]
                                colourList[index].requests = 9;
                                delete trendingLimit[colourList[index].colour];
                                console.log(trendingLimit);
                                trendingLimit[itt.colour] = colourList.indexOf(itt);
                            }

                            setTimeout(function(){
                                itt.requests = 9; 
                            }, 50000);
                        }
                    }
                }
                
            } else {
                let newColour = {
                    colour : upperCaseColour,
                    cssStyleColourValue : lowerCase,
                    requests : 1,
                }
                colourList.push(newColour);
            }
        }
    }

    function filtering(rank) {
        
        if (rank === "trending") {
            var filt = colourList.filter(function(itt){
                return itt.requests > 11;
            })
            
            return filt;

        } else if (rank === "popular") {
            var filt2 = colourList.filter(function(itt){
                return itt.requests > 5 && itt.requests <= 11;
            })
            
            return filt2;

        } else if (rank === "up and coming") {
            var filt3 = colourList.filter(function(itt){
                return itt.requests >= 1 && itt.requests <=5;
            })
            
            return filt3;
        } 
    }

    return { requestColour,
             filtering,
    }
    
}