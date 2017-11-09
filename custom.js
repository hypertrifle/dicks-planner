var script = document.createElement('script');    
script.id = 'tmpScript';

script.appendChild(document.createTextNode("function isCyclic (obj) {\r\n            var seenObjects = [];\r\n          \r\n            function detect (obj) {\r\n              if (obj && typeof obj === \'object\') {\r\n                if (seenObjects.indexOf(obj) !== -1) {\r\n                  return true;\r\n            }\r\n            seenObjects.push(obj);\r\n            for (var key in obj) {\r\n                  if (obj.hasOwnProperty(key) && detect(obj[key])) {\r\n                    console.log(obj, \'cycle at \' + key);\r\n                return true;\r\n              }\r\n            }\r\n          }\r\n          return false;\r\n        }\r\n      \r\n        return detect(obj);\r\n      }\r\n     \r\n\r\n    function buildCustomView(data){\r\n            console.log(data);\r\n            filterKids(data);\r\n            $(\'body\').html(\'<div id=\\\'dicks-planner\\\' data-content=\\\'\'+ JSON.stringify(data)+ \'\\\'><\/div>\');\r\n    }\r\n    \r\n    function filterKids(node, level) {\r\n    \r\n           \r\n            \/\/ if(no)\r\n            for (prop in node) {\r\n                if (prop === \'kids\' ) {\r\n                   var i;\r\n                    for (i =0; i < node.kids.length; i++) {\r\n                            node.kids[i] = filterKids(node.kids[i]);\r\n                    }\r\n           \r\n            } else if (prop !==\'label\' && prop !== \'startmoment\' && prop !== \'finishmoment\' && prop !== \'full\') {\r\n              delete node[prop];\r\n            } else if(prop === \"label\" && typeof node[prop] === \'object\'){\r\n                    node[prop] = (node[prop][0].full);\r\n            }\r\n\r\n            \r\n        }\r\n        return node;\r\n      }\r\n\r\n        function wait() {\r\nif ( window.currModel.visualGrid.kids[0].kids.length > 5){ \r\n                    console.log(window.currModel.visualGrid);\r\n    buildCustomView(window.currModel.visualGrid.kids[0]);                \r\n\r\n                \r\n\r\n\r\n\r\n            } else {\r\n                    setTimeout( wait, 100 );\r\n            }\r\n        }\r\n\r\n       wait();\r\n"));
(document.body || document.head || document.documentElement).appendChild(script);


function checkStuff(){
    if($('#dicks-planner').length){
        shit = false;
        window.not_so_shit = JSON.parse($('#dicks-planner').attr('data-content'));
        $('#dicks-planner').attr('data-content', "");
        console.log(window.not_so_shit);

        $("#dicks-planner").html(window.not_so_shit.kids[10]);
    } else {
        setTimeout( checkStuff, 100 );
    }


}

$( document ).ready(function() {
    console.log( "extension initilised" );
    console.log( "waiting to remove all of tom's mess" );

    checkStuff();

});