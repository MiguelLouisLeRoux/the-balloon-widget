export default function FactoryLogic() {
    let colourList = [{colour:"Red", requests: 5}, {colour:"Red", requests: 5}, {colour:"Red", requests: 11}];

    function requestColour(colVal) {
         
        let checkIfColourExists = colourList.some(elem => elem.colour === colVal);

        if(checkIfColourExists) {
            for(let i = 0; i < colourList.length; i++) {
                let itt = colourList[i];
                if (itt.colour === colVal) {
                    itt.requests++;
                }
            }
        } else if (!checkIfColourExists) {
            let newColour = {
                colour : colVal,
                requests : 1,

            }
            colourList.push(newColour);
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