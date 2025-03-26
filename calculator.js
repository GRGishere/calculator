let buttons = document.querySelectorAll("button");
    let monitor = document.querySelector("input");
    let digits = document.querySelectorAll(".digits");
    let operators = document.querySelectorAll(".operators");
    let anything = document.querySelectorAll(".digits,.operators,#conclusion,.dot,.para");
    let paranthese = document.querySelectorAll(".operators,.para");
    let parameter = [];
    let operation = [];
    let dgtopt = [];
    let paropt = [];
    let conclusion = document.getElementById("conclusion");
    let clear = document.getElementById("clear");
    let par = false;
    let i = 0;
    let n = 0;
    let s = 0;
    let pref = [];
    let posf = [];
    let f = 0;
    let p = 0;
    let hallo;
    let tschuss;
    
    anything.forEach(bt =>{
        bt.addEventListener("click", (e) =>{
            monitor.value += e.target.innerHTML;                        //entering digits and operators in display
        })
    })

    {
    anything.forEach(digt =>{
        digt.addEventListener("click", (p) =>{
            while(p)
            {   
                let any = p.target.innerHTML;
                dgtopt[i] = any;                                        //entering digits,operators and parantheses in dgtopt array
                console.log(dgtopt[i]);
                i++;
                break;
            }
        })
    })}
    {
    paranthese.forEach(paran =>{
        paran.addEventListener("click", (j) =>{
            while(j)
            {   
                let parant = j.target.innerHTML;
                paropt[s] = parant;
                console.log(paropt[s]);
                if(paropt[s]=="(" || paropt[s]==")")                    //entering operators and parantheses in paropt array
                {
                    par = true;                                         //checking if there is a paranthese or not
                }
                console.log("()" + " " + par);
                s++;
                break;
            }
        })
    })}


    
    conclusion.addEventListener("click", () =>{
    {let i = 0;
    let n = 0;
    let num = "";
    while(i < dgtopt.length)                                        //detecting the operands and pushing them in parameter array
    {
        
        if(dgtopt[i] == "+" || dgtopt[i] == "-" || dgtopt[i] == "×" || dgtopt[i] == "÷" || dgtopt[i] == "=" || dgtopt[i] == "^" || dgtopt[i] == "(" || dgtopt[i] == ")")
        {
            if(dgtopt[i] == "-")
            {
                if(dgtopt[i-1] != "0" && dgtopt[i-1] != "1" && dgtopt[i-1] != "2" && dgtopt[i-1] != "3" && dgtopt[i-1] != "4" && dgtopt[i-1] != "5" && dgtopt[i-1] != "6" && dgtopt[i-1] != "7" && dgtopt[i-1] != "8" && dgtopt[i-1] != "9")
                    {
                        num += dgtopt[i];
                        i++;
                    }
            } else {
                i++;
            }

        }else if (dgtopt[i] == "0" || dgtopt[i] == "1" || dgtopt[i] == "2" || dgtopt[i] == "3" || dgtopt[i] == "4" || dgtopt[i] == "5" || dgtopt[i] == "6" || dgtopt[i] == "7" || dgtopt[i] == "8" || dgtopt[i] == "9" || dgtopt[i] == ".") {
            while(dgtopt[i] == "0" || dgtopt[i] == "1" || dgtopt[i] == "2" || dgtopt[i] == "3" || dgtopt[i] == "4" || dgtopt[i] == "5" || dgtopt[i] == "6" || dgtopt[i] == "7" || dgtopt[i] == "8" || dgtopt[i] == "9" || dgtopt[i] == "." )
            {
                num += dgtopt[i];
                i++;
            }
            num = parseFloat(num);
            parameter[n] = num;
            n++;
            i++;
            num = "";
        }
    }
    }   

    {   
        let i = 0;
        let n = 0;
        while(i < dgtopt.length)                                        //detecting the operators and pushing them in operation array
        {
            if(dgtopt[i] == "+" || dgtopt[i] == "-" || dgtopt[i] == "×" || dgtopt[i] == "÷" || dgtopt[i] == "^")
            {
                if(dgtopt[i-1] == "0" || dgtopt[i-1] == "1" || dgtopt[i-1] == "2" || dgtopt[i-1] == "3" || dgtopt[i-1] == "4" || dgtopt[i-1] == "5" || dgtopt[i-1] == "6" || dgtopt[i-1] == "7" || dgtopt[i-1] == "8" || dgtopt[i-1] == "9")
                {
                    operation[n] = dgtopt[i];
                    n++;
                }
            } 
            i++;
        }
            
        
    }
        
        if(par == true)
        {   
            for(let i = 0 ; i < paropt.length ; i++)
            {
                if(paropt[i] == "(")
                {   
                    pref[f] = i;
                    f++;
                }
                if(paropt[i] == ")")
                {   
                    posf[p] = i;
                    p++;
                }

            }
            hallo = pref.length;
            hallo = hallo - 1;
            tschuss = 0;
            while(hallo >= 0)
            {
                let pow = 0;
                paran_calc();
                last_calc();
            
            hallo--;
            tschuss++;
            }
            
        } else if(par == false)
        {   
            
            last_calc();
        
        }
        
        parameter = [];
        dgtopt = [];
        operation = [];
        paropt = [];
        pref = [];
        posf = [];
        i = 0;
        let xor = monitor.value;
        for(i ; i < xor.length ; i++)
        {
            dgtopt.push(String(xor.charAt(i)));
            console.log(dgtopt);
        }
        parameter[0] = parseFloat(xor);
        console.log(parameter);
        
        n = 0;
        s = 0;
        f = 0;
        p = 0;
        pro_div = false;
        add_sub = false;
        power = false;
        par = false;
    });
    clear.addEventListener("click", () =>{
        monitor.value = "";
        parameter = [];
        operation = [];
        dgtopt = [];
        paropt = [];
        pref = [];
        posf = [];
        num = "";
        par = false;
        console.clear();
        i = 0;
        n = 0;
        s = 0;
        f = 0;
        p = 0;
    });

    function production(a,b)
    {
        let c = a * b;
        monitor.value = c;
        console.log(a + " × " + b);
    }
    function division(a,b)
    {
        let c = a / b;
        monitor.value = c;
        console.log(a + " ÷ " + b);
    }
    function sum(a,b)
    {
        
        let c = a + b;
        monitor.value = c;
        console.log(a + " + " + b);
    }
    function subtract(a,b)
    {
        let c = a - b;
        monitor.value = c;
        console.log(a + " - " + b);
    }
    
    function paran_calc()
    {   let pow = 0;
        for(let i = pref[hallo] + 1; i < posf[tschuss] ; i++)
            {
                if(operation[i-1] == "^")
                {
                    pow = parameter[i-1];
                    for(let t = 1 ; t < parameter[i] ; t++)
                    {
                        pow = pow * parameter[i-1];
                        console.log("yay");
                    }
                    parameter[i] = pow;
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    } 
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";

                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                } }
                for(let i = pref[hallo] + 1; i < posf[tschuss] ; i++)
                {
                    if(operation[i-1]=="×" || operation[i-1]=="÷")
                {
                    if(operation[i-1] == "×")
                    {
                        parameter[i] = parameter[i-1] * parameter[i];
                    } else if(operation[i-1] == "÷")
                    {
                        parameter[i] = parameter[i-1] / parameter[i];
                    }
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    }
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";
                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                    
                }
                }
                for(let i = pref[hallo] + 1; i < posf[tschuss] ; i++)
                {
                    if(operation[i-1]=="+" || operation[i-1]=="-")
                {
                    if(operation[i-1] == "+")
                    {
                        parameter[i] = parameter[i-1] + parameter[i];
                    } else if(operation[i-1] == "-")
                    {
                        parameter[i] = parameter[i-1] - parameter[i];
                    }
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    }
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";
                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                    
                }
                }
    }
    
    function last_calc()
    {   let pow = 0;
        console.log("yay here1");
        for(let i = 1; i < parameter.length ; i++)
            {
                if(operation[i-1] == "^")
                {
                    pow = parameter[i-1];
                    for(let t = 1 ; t < parameter[i] ; t++)
                    {
                        pow = pow * parameter[i-1];
                        console.log("yay");
                    }
                    parameter[i] = pow;
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    } 
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";

                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                } }
                for(let i = 1 ; i < parameter.length ; i++)
                {
                    if(operation[i-1]=="×" || operation[i-1]=="÷")
                {
                    if(operation[i-1] == "×")
                    {
                        production(parameter[i-1],parameter[i]);
                        parameter[i] = parameter[i-1] * parameter[i];
                    } else if(operation[i-1] == "÷")
                    {
                        division(parameter[i-1],parameter[i]);
                        parameter[i] = parameter[i-1] / parameter[i];
                        
                    }
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    }
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";
                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                    
                }
                }
                for(let i = 1 ; i < parameter.length ; i++)
                {
                    if(operation[i-1] == "+" || operation[i-1] == "-")
                {
                    if(operation[i-1] == "+")
                    {
                        sum(parameter[i-1],parameter[i]);
                        parameter[i] = parameter[i-1] + parameter[i];
                        
                    } else if(operation[i-1] == "-")
                    {
                        subtract(parameter[i-1],parameter[i]);
                        parameter[i] = parameter[i-1] - parameter[i];
                        
                        
                    }
                    if(operation[i-2] == "×" || operation[i-2] == "÷")
                    {
                        parameter[i-1] = 1;
                    } else if(operation[i-2] == "+" || operation[i-2] == "-" || i-1 == 0)
                    {
                        parameter[i-1] = 0;
                    }
                    if(i-1 == 0)
                    {
                        operation[i-1] = "+";
                    } else if(i-1 != 0)
                    {
                        operation[i-1] = operation[i-2];
                    }
                    
                }
                }
    }