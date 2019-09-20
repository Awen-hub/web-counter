var input = ""
var last_num = ""
var operation = ""
var opertate_num = 0
Clean = ()=> {
	this.input = ""
	this.last_num = ""
    this.point_count = 0
    this.opertate_num = 0 
    this.operation = ""
	var  result_one = document.getElementById("getInput")
    result_one.innerHTML = this.input
    var  result_two = document.getElementById("finalNum")
    result_two.innerHTML = this.last_num
}

backSpace = ()=>{
	var last = this.input.charAt(this.input.length-1)
    if (last == '+' || last == '-' || last == '*' || last == '/' || last == '%') 
    {
        this.operation = ""
    }
    this.input = this.input.slice(0,-1)
	var  result = document.getElementById("getInput")
    result.innerHTML = this.input
}

addElement = (s)=>{
	//console.log(this.input)
    if (this.input.length > 30) 
    {
        alert("超出输入长度限制")
        return 0 
    }
    if(this.last_num.length !== 0)
	{
		
        if (s == '.') 
        {
            alert("请规范输入")
            return 0
        }
        if (s>='0' && s<='9') 
        {
            this.Clean()
            
        }
        
        else
        {
            var temp = this.last_num
            this.Clean()
            this.input += temp.slice(1)
        }
        
	}

	
	if (s == "+" || s == "*" || s == '/' || s == '-' || s == '%') 
	{
		if (this.input.length == 0 && s == '-') 
        {
            this.operation = s
            this.input += s
        }

        else if (this.input.charAt(this.input.length-1) > "9" || this.input.charAt(this.input.length-1) < "0" ) 
        {
            alert("请规范输入")
        }
		else
        {
            this.operation = s
            this.input += s
        }
        this.opertate_num += 1
        
	}
    else if (s == "**" ) 
    {
        if (this.input.charAt(this.input.length-1) > "9" || this.input.charAt(this.input.length-1) < "0" ) 
        {
            alert("请规范输入")
        }
        else
        {
            this.operation = s
            this.input += s
        }
        this.opertate_num += 2
    }
    else if ( s == ".") 
    {
        
        if (this.input.charAt(this.input.length-1) > "9" || this.input.charAt(this.input.length-1) < "0") 
        {
            alert("请规范输入")
        }
        else
        {
            
            this.input += s
        }
    }
    else
    {
        this.input += s
    }

	var  result = document.getElementById("getInput")
    result.innerHTML = this.input
}

printResult = ()=>{
	/*if (this.opertate_num >= 2) 
    {
        this.last_num = "="+ String(eval(this.input))
        var  result = document.getElementById("finalNum")
        result.innerHTML = this.last_num
        return 0
    }*/

    //console.log(this.input)
    //console.log(this.operation)
    if (this.operation.length == 0 ) 
    {
        alert('请先输入运算符')
        return 0
    }

    var point_num = 0
    for (var x = 0; x < this.input.length ;x++ ) 
    {
        if (this.input[x] == '.') 
        {
            point_num++
        }
        if (this.input[x] == '+' || this.input[x] == '-' || this.input[x] == '*' || this.input[x] == '/' || this.input[x] == '%' ) 
        {
            if (x != 0) 
            {
                point_num--
            }
            
        }
        if (point_num == 2) 
        {
            alert("请规范输入")
            return 0
        }
    }

    var zeroNum = 0
    var lock2 = 1
    if (this.input.charAt(0) != '0' && this.input.charAt(0) != '-') 
   {
        lock2 = 0
   }

    for (var y = 0; y < this.input.length; y++) 
    {
       


       if (this.input[y] == '.') 
       {
          //console.log("ddd")
          lock2 = 0
          if (zeroNum > 1) 
          {
            alert("请规范输入")
            return 0
          }
          else
          {
            //console.log(zeroNum)
            zeroNum = 0
          }
          
       }
       //console.log(lock2)
       if ((this.input.charAt(y) == '+' || this.input.charAt(y) == '-' || this.input.charAt(y) == '*' || this.input.charAt(y) == '/' || this.input.charAt(y) == '%') )
       {
            if (zeroNum > 0) 
            {
                //console.log(zeroNum)
                //console.log(lock2)
                alert("请规范输入")
                return 0
            }
            if (this.input.charAt(y+1) != '0') 
            {
                console.log("11")
                lock2 = 0
            }
            else
            {
                
                console.log(this.input.charAt(y+1))
                lock2 = 1
            }
       }
       if (lock2 == 1) 
       {
            if (this.input.charAt(y) == '0' && (this.input.charAt(y+1) >= '0' &&  this.input.charAt(y+1) <= '9')) 
            {
                zeroNum++
            }

       }
       
       
       if ( y == this.input.length-1) 
       {
            if (zeroNum > 0) 
            {
                alert("请规范输入")
                return 0
            }
       }
       
    }
    //console.log('iii')
    


    if (this.input.length == 0) 
    {
        alert("请先进行输入")
        return 0
    }
    if (this.input.charAt(this.input.length-1) <'0' || this.input.charAt(this.input.length-1) >'9') 
    {
        alert("请规范输入")
        return 0
    }
    if (this.opertate_num >= 2  && this.input.indexOf('%') == -1) 
    {
        //console.log("hah")
        if (!isFinite(eval(this.input)) ) 
        {
            alert("存在除数为0或者运算数据过大情况，请重新输入")
            return 0
        }
        this.last_num = "="+ String(eval(this.input))
        var  result = document.getElementById("finalNum")
        result.innerHTML = this.last_num
        return 0
    }

	if (this.input.indexOf('%') != -1) 
    {
        //console.log("345")
        if (this.input.indexOf('.') != -1) 
        {
                alert("包含模运算的式子中必须全为整数")
        }
        else
        {
            this.last_num = "="+ String(eval(this.input))
        }
    }

    else if (this.operation == "+" || this.operation == "*" ) 
	{
		
		//console.log("79")
        var numOne = ""
		var numTwo = ""
		var lock = 1
		for (var i = 0; i<this.input.length ; i++)
		{

			if ( this.input.charAt(i) != '+' && this.input.charAt(i) != '*')
			{
				if (lock) 
				{
					numOne += this.input.charAt(i)
				}
				else
				{
					numTwo += this.input.charAt(i)
				}
			}
			else
			{
				lock = 0
			}
		}
        
        if (numOne.split('.').length > 2 || numTwo.split('.').length > 2) 
        {
            alert("请规范输入")
            return 0
        }
        
		if (this.operation == "+") this.addOperate(numOne,numTwo)
		if (this.operation == "*") this.multiOperate(numOne,numTwo)	
        
	}
    else
    {
        //console.log('11e')
        var numOne = ""
        var numTwo = ""
        var lock = 1
        for (var i = 0; i<this.input.length ; i++)
        {

            if ( this.input.charAt(i) != '+' && this.input.charAt(i) != '*' && this.input.charAt(i) != '/' && this.input.charAt(i) != '-' && this.input.charAt(i) != '%')
            {
                if (lock) 
                {
                    numOne += this.input.charAt(i)
                }
                else
                {
                    numTwo += this.input.charAt(i)
                }
            }
            else
            {
                lock = 0
            }
        }
        //console.log(numOne.split('.'))
        
        if (numOne.split('.').length > 2 || numTwo.split('.').length > 2 ) 
        {
            alert("请规范输入")
            return 0
        }
        if (!isFinite(eval(this.input))) 
        {
            alert("存在除数为0或者运算数据过大情况，请重新输入")
            return 0
        }
        this.last_num = "="+ String(eval(this.input))
    }
    //console.log(this.last_num)
	var  result = document.getElementById("finalNum")
	result.innerHTML = this.last_num
	//console.log(this.operation)
}

addOperate = (p1,p2)=>{
	//console.log("111")
	if (Number.isInteger(Number(p1)) && p1.indexOf('.') == -1)
    {
        p1 += ".00"
    }
    if (Number.isInteger(Number(p2)) && p2.indexOf('.') == -1)
    {
        p2 += ".00"
    }
    //console.log(p1)

    var temp1 = p1.split(".")
    var int_Num1 = temp1[0].split("")
    var small_Num1 = temp1[1].split("")
    
    var temp2 = p2.split(".")

    var int_Num2 = temp2[0].split("")
    var small_Num2 = temp2[1].split("")

    var small_Array = []
    var int_Array = []

    for(var i = 0; i < Math.max(small_Num1.length,small_Num2.length);i++)
    {
        if(i>small_Num1.length-1)   var a = 0
        else var a = Number(small_Num1[i])
        if(i>small_Num2.length-1)   var b = 0
        else var b = Number(small_Num2[i])

        var c = String(a+b)
        small_Array[i] = c
    
    }

    
    
    for(var j = -1,k=0; k<Math.max(int_Num1.length,int_Num2.length); j--,k++ )
    {
        if(k>int_Num1.length-1) var e = 0
        else var e = Number(int_Num1.slice(j)[0])

        if(k>int_Num2.length-1) var f = 0
        else var f = Number(int_Num2.slice(j)[0])
        
        var g = String(e+f)

        int_Array.unshift(g)
    }
    //console.log(int_Array)
    

    var total_Array = int_Array.concat(['.'],small_Array)
    for(var n = total_Array.length-1; n>= 0 ;n-- )
    {
        if (n-1>=0 && total_Array[n] >= '0' && total_Array[n] <='9') 
		{
			var num1 = Number(total_Array[n])
			if (num1>=10) 
			{
				var num2 = num1%10
                total_Array[n] = String(num2)
                if(total_Array[n-1] >= '0' && total_Array[n-1] <='9')
                total_Array[n-1] = String(Number(total_Array[n-1])+Math.floor(num1/10))
                else total_Array[n-2] = String(Number(total_Array[n-2])+Math.floor(num1/10))
			}
		}
    }
    
    this.last_num = "=" + total_Array.join("")
}


multiOperate = (p1,p2)=>{
    
    /*if (p1.indexOf('.') != -1 || p2.indexOf('.') != -1) 
    {
        
        if (p1.length >16 || p2.length >16) 
        {
            this.last_num = "="+ String(eval(this.input))
            return 0
        }
    }*/
  	if (Number.isInteger(Number(p1)) && p1.indexOf('.') == -1 )
    {
        p1 += ".00"
    }
    if (Number.isInteger(Number(p2)) && p2.indexOf('.') == -1)
    {
        p2 += ".00"
    }
    
    var multiOne_Array = p1.split("")
    var multiTwo_Array = p2.split("")
    var expansion = p1.length - p1.indexOf('.') + p2.length - p2.indexOf('.') - 2
 
    multiOne_Array.splice(p1.indexOf('.'),1)
    multiTwo_Array.splice(p2.indexOf('.'),1)
    //console.log(multiOne_Array)
    //console.log(multiTwo_Array)
    var totalArray = []
    
    for(var i = multiTwo_Array.length-1, m = 0; i>=0 ; i--,m++)
    {
        
        for(var k = multiOne_Array.length-1 , j = m; k>=0 ; k--,j++)
        {    
            
            if(i == multiTwo_Array.length-1)
            {
                totalArray.unshift( String(Number(multiOne_Array[k])*Number(multiTwo_Array[i])))
                //console.log(totalArray)
            }
            else
            {
                if(totalArray.length-1-j < 0)
                {
                    var a = Number(multiOne_Array[k])*Number(multiTwo_Array[i])
                    totalArray.unshift(String(a))
                }
                
                else
                {
                    var a = Number(multiOne_Array[k])*Number(multiTwo_Array[i])
                    var b = Number(totalArray[totalArray.length-1-j])
                    totalArray[totalArray.length-1-j] = String(a+b)
                }
                
            }
        }
        //console.log(totalArray)
        
    }
    for(var n = totalArray.length-1; n>= 0 ;n-- )
    {
        if(n-1>=0)
        {
            var num1 = Number(totalArray[n])
            if (num1>=10) 
            {
                var num2 = num1%10
                totalArray[n] = String(num2)
                totalArray[n-1] = String(Number(totalArray[n-1])+Math.floor(num1/10))
            }
		}
    }
    totalArray = totalArray.join("")
    totalArray = totalArray.split("")
    totalArray.splice(totalArray.length-expansion,0,'.')
    this.last_num = "=" + totalArray.join("")
}	
	

