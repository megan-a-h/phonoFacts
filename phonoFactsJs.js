
/*Back end code for phonoFacts webpage is below.  This webpage generates a random fact about phonographs with an accompanying picture when the user clicks a button */

/*array of objects called phonoFacts holds a phonograph fact, a picture to accompany, the source of the image and fact and an id number for the fact */
const phonoFacts = [
    {
        "factID": 1,
        "fact": "Pictured is a replica of the phonautograph, the first device to make sound visible,  invented in 1859. This replica was built in 2014 based on historic drawings by the inventor, Edouard-Léon Scott de Martinville, as the original machine does not survive.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/phonautographReplica.jpg"
    },
    {   "factID": 2,
        "fact": "Pictured is Edouard-Léon Scott de Martinville, the inventor of the phonautograph and the first person to capture sound.  His device inscribed the vibrations of sound onto paper.  This was the first time sound was made visible.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/LeonScott.png"
    },
    {   "factID": 3,
        "fact": "Charles Cros, pictured, wrote down a propsal to playback sound stored on the phonautograph, which transcribed sounds on paper.  He conceived of this idea in France, indepedently of Edison just a few weeks before Edison first expressed his idea for a phonograph.  Cros never made a machine but is credited with being the first to postulate sound reproduction.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/CharlesCros.png"
    },
    {   "factID": 4,
        "fact": "Thomas Edison, pictured, is the inventor of the phonograph which is the first machine to both record sounds and play them back.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/ThomasEdison.png"
    },
    {   "factID": 5,
        "fact": "Pictured is Edison's first phonograph, produced in 1877.  Museum plaque reads: The first time anyone ever recorded sound and played it back was when Edison used this machine to record 'Mary Had a Little Lamb.' It recorded sound waves as indentations on a sheet of tinfoil.",
        "source":"Photo taken during my trip to the Edison National Historical Park" ,
        "photoUrl": "PhonographFacts/phonoImages/firstPhonograph.jpg"
    },
    {   "factID": 6,
        "fact": "Pictured is the earliest known wax cylinder phonograph, produced in 1887.  Museum plaque reads: After devoting several years soley to incandescent lighting, Edison returned to the development of phonographs with this model.  Based on new improvements from inventor Alexander Grahm Bell's Volta Laboratory, this desing used a wax cylinder instead of a tinfoil record.",
        "source":"Photo taken during my trip to the Edison National Historical Park" ,
        "photoUrl": "PhonographFacts/phonoImages/waxCylinderPhonograph.jpg"
    },
    {   "factID": 7,
        "fact": "Alexander Graham Bell, his cousin Chichester Bell and Charles Sumner Tainter invented the wax cylinder in the mid-1880s.  This was an improvement over the previous recording medium of aluminium because it was more durable and the stylus could etch a groove as opposed to a simple indentation.",
        "source":"Photo and Fact from the UCSB Cylinder Audio Archive" ,
        "photoUrl": "PhonographFacts/phonoImages/waxCylinder.jpg"
    },
    {   "factID": 8,
        "fact": "Thomas Edison improved on the original wax cylinder invented by Alexander Graham Bell's team by changing the material.  He created a cylinder made of a metallic soap composite.  They were called brown wax cylinders despite no longer being made of wax.",
        "source":"Photo and Fact from the UCSB Cylinder Audio Archive" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonCylinder.jpg"
    },
    {   "factID":9,
        "fact": "Pictured is the Edison Standard Model 'A'.  This was the earliest version of the Edison Standard Phonograph.",
        "source":"Photo and Fact from the Antique Phonograph Society" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonModelA.jpg"
    },
    {   "factID": 10,
        "fact": "The Edison Standard Model B is the most commonly found model of the Standard Phonograph line.  There were around 370,000 produced.",
        "source":"Photo and Fact from the Antique Phonograph Society" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonModelB.jpg"
    },
    {   "factID": 11,
        "fact": "Some models of Edison phonographs came with a horn as pictured here to amplify the sound.",
        "source":"Photo and Fact from the Antique Phonograph Society" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonHorn.jpg"
    },
    {   "factID": 12,
        "fact": "Pictured is the Model F Standard machine which was introduced in 1911.  The #10 Cygnet horn came standard with this model.",
        "source":"Photo and Fact from the Antique Phonograph Society" ,
        "photoUrl": "PhonographFacts/phonoImages/signetHorn.jpg"
    },
    {   "factID": 13,
        "fact": "The Thomas Edison National Historical Park preserves Edison's laboratory an residence.  The laboratory operated for more then 40 years and is located in West Orange, New Jersey. It was designated a National Monumnet on July 14, 1956. ",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonFactory.jpg"
    },
    {   "factID": 14,
        "fact": "Thomas Edison was awarded U.S. Patent No. 200,521 on February 19, 1878 for the phonograph.",
        "source":"Photo and date from Google Patents" ,
        "photoUrl": "PhonographFacts/phonoImages/phonoPatent.png"
    },
    {   "factID": 15,
        "fact": "Emile Berliner invented the Gramophone which was the first device to use a circular disc.",
        "source":"Fact and Picture from the Gramophone Museum" ,
        "photoUrl": "PhonographFacts/phonoImages/emileGramo.jpg"
    },
    {   "factID": 16,
        "fact": "Emile Berliner was awarded patent 372,786 on November 8, 1887 for the Gramophone",
        "source":"Fact and Picture from the Gramophone Museum" ,
        "photoUrl": "PhonographFacts/phonoImages/gramPatent.jpg"
    },
    {   "factID": 17,
        "fact": "Pictured is the Edison Embossing Translating Telegraph.  Part of Edison's inspiration for the phonograph came from his work on the telegraph.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonTelegraph.jpg"
    },
    {   "factID": 18,
        "fact": "Emile Berliner invented the 'master copy' in 1895.  He found a way to record sound waves outwardly using a technique called electroplating.  This allowed the disc to be a used as a master to create other discs from which created more commerical value for discs as opposed to cylinders.",
        "source":"Photo from the Library of Congress - Fact from Victrola " ,
        "photoUrl": "PhonographFacts/phonoImages/emileB.jpg"
    },
    {   "factID": 19,
        "fact": "Emile Berliner invented the shellac disc, pictured here.  This invention paved the way for more innovations in the 20th century which undoubtedly shaped the development of the modern record player.",
        "source":"Photo from the Library of Congress - Fact from Victrola" ,
        "photoUrl": "PhonographFacts/phonoImages/berlinShellac.jpg"
    },
    {   "factID": 20,
        "fact": "The His Master's Voice Painting was created in 1898 by Francis Barraud and was famously used a logo for RCA but it was patented by Emile Berliner after he visited the London offices of the Berliner Gramophone Company and saw the painting hanging on the wall in 1899.",
        "source":"Photo from Wikipedia - Fact from Library of Congress" ,
        "photoUrl": "PhonographFacts/phonoImages/hisMastersVoice.jpg"
    },
    {   "factID": 21,
        "fact": "The Edison Home Model A phonograph is one of only two phonograph models to have the decal on the lid instead of the base o the case.  It was produced in 1897.",
        "source":"Photo and Fact from Nipperhead" ,
        "photoUrl": "PhonographFacts/phonoImages/homemodelA.jpg"
    },
    {   "factID": 22,
        "fact": "The last Edison phonographs and cylinders were manufactured in late 1929. The popularity of discs had taken over the ponograph and cylinder market.",
        "source":"Photo and Fact from Wikipedia" ,
        "photoUrl": "PhonographFacts/phonoImages/cylindersRecords.jfif"
    },
    {   "factID": 23,
        "fact": "Thomas Edison was partially inspired by the telephone when inventing the phonograph.  He first conceived of the phonograph in July 1876 in the drawing from his notebook shown here.",
        "source":"Photo and fact from the National Park Service Website" ,
        "photoUrl": "PhonographFacts/phonoImages/edisonTelephone.jpg"
    },
    {   "factID": 24,
        "fact": "Concert cylinders were sold beginning in late 1898.  Due to their size they delivered better sound quality than standard cylinders but due to their high price they did not sell well and not many survive today.",
        "source":"Photo and Fact from the UCSB Cylinder Audio Archive" ,
        "photoUrl": "PhonographFacts/phonoImages/brownWaxCylinder.jpg"
    },
    {   "factID": 25,
        "fact": "The Edison Amberol Cylinders were introduced in 1908 and produced until 1912.  They had wice the grooves of other wax cylinders, making the playing time twice as long.",
        "source":"Photo and Fact from the UCSB Cylinder Audio Archive" ,
        "photoUrl": "PhonographFacts/phonoImages/amberolCylinder.jpg"
    }

]



/*React component that changes the fact and picture upon user click of button */
class PhonoFactDisplay extends React.Component{
    constructor(props){
    super(props);
    this.state = { 
    /*randomFactIndex holds a random number within the index range of the phonoFact array to display a random fact when the page opens */
    randomFactIndex: Math.floor(Math.random() * phonoFacts.length) 
    };

    /*binds the "this" keyword for the makeRandom method to the PhonoFactDisplay component  */
    this.makeRandom = this.makeRandom.bind(this);

    };


    /*this function runs when the user clicks the new fact button.  The equation is the same as above and a random number within the index range is generated */
    makeRandom() {
        this.setState({
        randomFactIndex: Math.floor(Math.random() * phonoFacts.length)
        });

    }


    render(){

    /*variables below hold the current values for fact, source and photo based on the random index that was generated  */
    const factInView = phonoFacts[this.state.randomFactIndex].fact;
    const creditInView = phonoFacts[this.state.randomFactIndex].source;
    const picInView = phonoFacts[this.state.randomFactIndex].photoUrl;
    
    
    return(
        <div>

        
        <div className="row align-items-center text-center ">
            
            <img className="col-md-6 phonoPic align-items-center text-center img-fluid" src={picInView} />
            <div className="col-md-6 phonoText">
              <p id="text">{factInView}</p>
              <p id="author">{creditInView}</p>
            </div>
           
          </div>
            <br />
    
            <div className="text-center">
                 {/*button calls the makeRandom function to generate a new random index to display a new fact */}
             <button className="btn  phonoButton" id="new-quote" onClick={this.makeRandom}>New Fact!</button>
             </div>
        
        
        </div>
   
 
 );
 
} 
}

/* renders the react component to the fact-display div on the html page*/
ReactDOM.render(<PhonoFactDisplay />, document.getElementById('fact-display'));
