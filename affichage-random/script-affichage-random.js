// FOREACH
    if (NodeList.prototype.forEach === undefined){
      NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
      }
    }

// SCRIPT
    var module = document.querySelector('#module');
    var listModule = module.querySelectorAll('.list');
    var listId = new Array();
    var nbDisplay = 3;

    listModule.forEach(function(e){
      listId.push(e.id);
    })

    console.log(listId);
    var randomList = new Array();

    //  copie list de random
    // var listId = listId;
    // console.log('listId ', listAltRandom);

    // Function removing random from list
    function removeRandom(random){
     
          // Find and remove item from an array
            var i = listId.indexOf(random);
            if(i != -1) {
              listId.splice(i, 1);
            }
        return listId;
     
    }


    for (var i=0 ; i< nbDisplay; i++){
      
      //  random
      var random = listId[Math.floor(Math.random()* listId.length)];
      // push random inside the selection list   
      randomList.push(random);
      console.log('random', random);
      // remove random from list
      listId = removeRandom(random);
      console.log('listId', removeRandom(random));
      
    }

    console.log('randomList', randomList);
    // display selection list
    randomList.forEach(function(e){
      module.querySelector('#'+e).classList.add("visible");
    })