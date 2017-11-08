
// var script = document.createElement('script');
//     script.id = 'tmpScript';
console.log("run");

break;





    // script.appendChild(document.createTextNode("
    
    function filterKids(node) {

        // if(no)
        for (prop in node) {
            if (prop === 'kids') {
                console.log("kids");
               var i;
                for (i =0; i < node.kids.length; i++) {
                   console.log("kid found at:" + i);
                    node.kids[i] = filterKids(node.kids[i]);
                }
            } else if (prop !=='label' && prop !== 'startmoment' &&
                prop !== 'finishmoment' && prop !== 'label') {
                    delete node[prop];
            }
        }
        console.log(node);
        return node;
      }

        function wait() {
            console.log("w");
            if ( typeof window.currModel !== 'undefined' ) {
                console.log("CURRENT MODEL EXISTS!!!");
                console.log(window.currModel.visualGrid);
                filterKids(window.currModel.visualGrid);
            } else {
                setTimeout( wait, 500 );
            }
        }

        wait();
        
      
      //"));
    // (document.body || document.head || document.documentElement).appendChild(script);


 //   var getVars = "var cache = [];\nvar ret =JSON.stringify(currModel, function(key, value) {\nif (typeof value === 'object' && value !== null) {\nif (cache.indexOf(value) !== -1) {\n// Circular reference found, discard key\nreturn;\n}\n// Store value in our collection\ncache.push(value);\n}\n\n$(body).attr('test', ret )\nalert('fuck')\n";