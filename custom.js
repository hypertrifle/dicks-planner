var script = document.createElement('script');    
script.id = 'tmpScript';

script.appendChild(document.createTextNode("function isCyclic (obj) {\n        var seenObjects = [];\n      \n        function detect (obj) {\n          if (obj && typeof obj === 'object') {\n            if (seenObjects.indexOf(obj) !== -1) {\n              return true;\n            }\n            seenObjects.push(obj);\n            for (var key in obj) {\n              if (obj.hasOwnProperty(key) && detect(obj[key])) {\n                console.log(obj, 'cycle at ' + key);\n                return true;\n              }\n            }\n          }\n          return false;\n        }\n      \n        return detect(obj);\n      }\n     \n\n    function buildCustomView(data){\n        console.log(data);\n        isCyclic(data);\n        $(\"body\").html(\"<div id='dicks-planner' data-content='\"+ JSON.stringify(data)+ \"'> </div>\");\n    }\n    \n    function filterKids(node, level) {\n\n       \n        // if(no)\n        for (prop in node) {\n            if (prop === 'kids' ) {\n               var i;\n                for (i =0; i < node.kids.length; i++) {\n                    node.kids[i] = filterKids(node.kids[i]);\n                }\n            } else if (prop !=='label' && prop !== 'startmoment' &&\n                prop !== 'finishmoment' && prop !== 'full') {\n                    delete node[prop];\n            } else if(prop === \"label\" && typeof node[prop] === 'object'){\n                node[prop] = filterKids(node[prop]);\n            }\n\n            \n        }\n        return node;\n      }\n\n        function wait() {\n            if ( typeof window.currModel !== 'undefined' ) {\n                console.log(window.currModel.visualGrid);\n                buildCustomView(filterKids(window.currModel.visualGrid));\n\n                \n\n\n\n            } else {\n                setTimeout( wait, 500 );\n            }\n        }\n\n        wait();"));
(document.body || document.head || document.documentElement).appendChild(script);




$( document ).ready(function() {
    console.log( "extension initilised" );
    console.log( "waiting to remove all of tom's mess" );

    var shit = true;

    while(shit){

        if($('#dicks-planner').length){
            shit = false;
            window.not_so_shit = JSON.parse($('#dicks-planner').attr('data-content'));
            console.log(window.not_so_shit);
        }

    }



});


//var getVars = "var cache = [];\nvar ret =JSON.stringify(currModel, function(key, value) {\nif (typeof value === 'object' && value !== null) {\nif (cache.indexOf(value) !== -1) {\n// Circular reference found, discard key\nreturn;\n}\n// Store value in our collection\ncache.push(value);\n}\n\n$(body).attr('test', ret )\nalert('fuck')\n";