$(document).ready( function(){
    console.log("tested!!");

    var text= null

    $("#targetID").keyup(function () {
        text = $("#targetID").val();
        console.log(text);
    })

    $("#sendButton").click(function () {

        
        $.post('http://localhost:5555/input', {
            "text": text
        },
        function (data1, status) {
            console.log(data1, "From posting ");
            obj = (JSON.stringify(data1));
            // console.log("TOKEN obtained is:");
            console.log(obj);

            var para = document.createElement("p");
            var node = document.createTextNode(text);

            var para1 = document.createElement("p");
            var node1 = document.createTextNode("Me");

            para1.appendChild(node1)
            para.appendChild(node)


            var element1 = document.getElementById("div1");
            element1.appendChild(para1);
            var element = document.getElementById("div1");
            element.appendChild(para);

            para.style.textAlign = "right"; 
            para1.style.textAlign = "right"; 
            para1.style.fontWeight = 800;
            para1.style.marginBottom = 0;
            para1.style.fontSize = "small";


            var para_BOT = document.createElement("p");
            var node_BOT = document.createTextNode("ChatBot");
            para_BOT.appendChild(node_BOT)
            var element_BOT = document.getElementById("div1");
            element_BOT.appendChild(para_BOT);


        })




    })


    
});