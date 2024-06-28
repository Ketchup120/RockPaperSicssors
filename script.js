let playerscore = parseInt(localStorage.getItem('playerscore')) || 0;
        let pcscore = parseInt(localStorage.getItem('pcscore')) || 0;
        function updatescore()
        {
            const elem = document.getElementById("player");
            elem.innerHTML = playerscore;
            console.log(pcscore);
            const elem1= document.getElementById("pc");
            elem1.innerHTML = pcscore;
        }
        const popup = document.getElementById("rulebox");
        let flag = 0;
        function closerules()
        {
            popup.style.visibility = "hidden";
        }
        function openrules()
        {
            popup.style.visibility = "visible";
        }
        const body = document.getElementById("playbuttons");
        function rockpick()
        {
            let a = Math.floor(Math.random() * 3)+1;
            console.log(a);
            if(a == 1)
            {
                resultdisplay("rock","rock","TIED UP");
            }
            if(a == 2)
            {
                resultdisplay("rock","paper","LOST");
            }
            if(a == 3)
            {
                resultdisplay("rock","sicssors","WON");
            }
        }
        function sicssorspick()
        {
            let a = Math.floor(Math.random() * 3)+1;
            console.log(a);
            if(a == 1)
            {
                resultdisplay("sicssors","rock","LOST");
            }
            if(a == 2)
            {
                resultdisplay("sicssors","paper","WON");
            }
            if(a == 3)
            {
                resultdisplay("sicssors","sicssors","TIED UP");
            }
        }
        function paperpick()
        {
            let a = Math.floor(Math.random() * 3)+1;
            console.log(a);
            if(a == 1)
            {
                resultdisplay("paper","rock","WON");
            }
            if(a == 2)
            {
                resultdisplay("paper","paper","TIED UP");
            }
            if(a == 3)
            {
                resultdisplay("paper","sicssors","LOST");
            }
        }
        function resultdisplay(class1,class2,result){
            if(result == "WON")
            {
                playerscore++;
                localStorage.setItem("playerscore",playerscore);
                updatescore();
            }
            if(result == "LOST")
            {
                pcscore++;
                localStorage.setItem("pcscore",pcscore);
                updatescore();
            }
            body.innerHTML = ""
            body.classList.remove("triangle")
            body.classList.add("result");
            const parent = document.createElement("div");
            const schild1 = document.createElement("div");
            schild1.innerHTML = "YOU CHOSE";
            schild1.style.textAlign = "center";
            schild1.style.fontSize = "15px";
            schild1.style.marginBottom = "10px"
            schild1.style.zIndex = "99 !important";
            schild1.style.position = "relative";
            const schild2 = document.createElement("button");
            schild2.classList.add(class1);
            schild2.style.height = "150px";
            schild2.style.width = "150px";
            if(result == "WON")
            {
            schild2.style.boxShadow = "0 0 0 40px rgb(2, 162, 47), 0 0 0 65px rgba(2, 162, 47, 0.705), 0 0 0 90px rgba(0, 153, 43, 0.49)";
            }
            const child1 = document.createElement("div");
            child1.classList.add("title");
            child1.appendChild(schild1);
            child1.appendChild(schild2);
            const child2 = document.createElement("div");
            if(result == "TIED UP")
            {
                const schild1 = document.createElement("div");
                schild1.innerHTML = "TIED UP";
                schild1.style.textAlign = "center";
                const schild2 = document.createElement("button");
                schild2.classList.add("button");
                schild2.setAttribute("onclick","reset()");
                schild2.innerHTML = "REPLAY";
                schild2.style.textAlign = "center";
                child2.appendChild(schild1);
                child2.appendChild(schild2);
                child2.classList.add("title");
            }
            else
            {
            const schild1 = document.createElement("div");
            schild1.innerHTML = "YOU "+result;
            schild1.style.textAlign = "center"
            const schild2 = document.createElement("div");
            schild2.innerHTML = "AGAINST PC";
            schild2.style.textAlign = "center"
            const schild3 = document.createElement("button");
            schild3.classList.add("button");
            schild3.setAttribute("onclick","reset()");
            schild3.innerHTML = "PLAY AGAIN";
            child2.classList.add("title");
            child2.appendChild(schild1);
            child2.appendChild(schild2);
            child2.appendChild(schild3);
            }
            const xchild1 = document.createElement("div");
            xchild1.innerHTML = "PC CHOSE";
            xchild1.style.fontSize = "15px";
            xchild1.style.marginBottom = "10px";
            xchild1.style.textAlign = "center";
            xchild1.style.zIndex = "99 !important";
            xchild1.style.position = "relative";
            const xchild2 = document.createElement("button");
            xchild2.classList.add(class2);
            xchild2.style.height = "150px";
            xchild2.style.width = "150px";
            if(result == "LOST")
            {
            xchild2.style.boxShadow = "0 0 0 40px rgb(2, 162, 47), 0 0 0 55px rgba(2, 162, 47, 0.705), 0 0 0 70px rgba(0, 153, 43, 0.49)";
            }
            const child3 = document.createElement("div");
            child3.classList.add("title");
            child3.appendChild(xchild1);
            child3.appendChild(xchild2);
            body.appendChild(child1);
            body.appendChild(child2);
            body.appendChild(child3);
            if(result == "WON")
            {
                flag = 1;
                const node = document.createElement("button");
                node.classList.add("bottombuttton");
                node.innerHTML = "NEXT";
                node.onclick = function(){
                    window.location.href = "win.html"
                }
                const elem = document.getElementById("rulebuttons");
                elem.children[0].style.cssFloat = "none";
                elem.appendChild(node);
                elem.classList.add("rulebuttons");
            }
        }
        function reset(){
            if(flag == 1)
            {
                flag = 0;
                const elem = document.getElementById("rulebuttons");
                elem.removeChild(elem.lastChild);
                elem.children[0].style.cssFloat = "right";
                elem.classList.remove("rulebuttons");
            }
            body.innerHTML = "";
            body.classList.remove("result");
            body.classList.add("triangle");
            const child1 = document.createElement("button");
            child1.classList.add("trirock");
            child1.setAttribute("onclick","rockpick()");
            const child2 = document.createElement("button");
            child2.classList.add("trisicssors");
            child2.setAttribute("onclick","sicssorspick()");
            const child3 = document.createElement("button");
            child3.classList.add("tripaper");
            child3.setAttribute("onclick","paperpick()");
            body.appendChild(child1);
            body.appendChild(child2);
            body.appendChild(child3);
        }