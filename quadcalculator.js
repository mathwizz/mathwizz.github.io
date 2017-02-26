//code to teach quadratic expressions
function quadratic(){
alert("A quadratic expression is one in which the highest power is two eg x²-2x+1.The general formula of a quadratic expression is ax²+bx+c where a and b are coefficients of x² and x and c is a constant.");
alert("To factorise a quadratic expression find two numbers by trial and error which when you multiply give ac and when you add give b and you replace b with those numbers eg factorise 2x²+x-1. Two numbers by trial and error are 2 and -1 ie 2×-1=-2(a×c) and 2-1=1(b), now 2x²+x-1=2x²+2x-1x-1 and factor out 2x and -1 and this gives 2x(x+1)-1(x+1) and factor out (x+1) and this gives (x+1)(2x-1)");
alert("Lets do more examples on quadratics");
alert("x²+x-6=x²+3x-2x-6=x(x+3)-2(x+3)=(x+3)(x-2).");
alert("x²-2x-15=x²-5x+3x-15=x(x-5)+3(x-5)=(x-5)(x+3).");
}
//code to teach factors and multiples
function prime(){
alert("A factor is a number that can divide another without leaving a remainder eg 3 is a factor of 6.");
alert("A number can have more than one factor eg 2,3,4,6 are all factors of 12.");
alert("A multiple is a number that can be divided by another without leaving a remainder eg 6 is a multiple of 3 ");
alert("A number can have more than one multiple eg 6,9,12,15,18,21 etc are all multiples of 3.");
alert("Two or more numbers can have common factors eg factors of 12 are 2,3,4,6 and factors of 18 are 2,3,6,9.It can be seen that 2,3 and 6 are common factors of 12 and 18.The most useful common factor is the Highest common factor(HCF) in this case 6.");
alert("Two or more numbers can have common multiples eg multiples of 2 are 4,6,8,10,12,14,16,18,20,22,24 etc and multiples of 3 are 6,9,12,15,18,21,24 etc.It can be seen that 6,12,18,24 are common multiples of 2 and 3.The most useful common multiple is the Lowest common multiple(LCM) in this case 6.");
}
//code to teach prime factors
function prime2(){
alert("A prime factor is a factor that has only itself and 1 as factors eg 5 is a prime factor of 10. 5 has only two factors ie itself and 1.All other numbers result in a remainder if they divide 5.");
alert(" Among the factors of a number there exists prime factors eg 2,3,4,6 are factors of 12 and among these 2 and 3 are prime factors.");
alert("Prime factors are useful in calculating the Highest common factor(HCF) and the Lowest common multiple(LCM) of a set of numbers.");
}
//code to teach Highest common factor
function hcf(){
alert("To find the HCF of a set of numbers express each number as a product of its prime factors.To do so divide each number by the first prime factor which does not leave a remainder.Divide the result succesively using this prime factor until it starts leaving a remainder and then move to the next prime factor.Do this until you get 1 as the result.");
alert("For example find the HCF of 56 and 42.First express each number  as a product of its prime factors.To express 52 first divide by 2. 2√56=28 next 2√28=14 next 2√14=7 next 7√7=1 hence 56=2×2×2×7.To express 42 also first divide by 2.That is 2√42=21 next 3√21=7 next 7√7=1 hence 42=2×3×7. Looking at the two  numbers 2 and 7 are the common factors hence HCF=2×7=14.");
}
//code to teach Lowest common multiple
function lcm(){
alert("To find the LCM of a set of numbers first express each number as a product of its prime factors."); alert("For example find the LCM of 18 and 24.Expressing 18 as a product of its prime factors: 2√18=9 next 3√9=3 next 3√3=1 hence 18=2×3×3.Expressing 24 as a product of its prime factors: 2√24=12 next 2√12=6 next 2√6=3 next 3√3=1 hence 24=2×2×2×3. Take each factor where it appears most ie take all the 2's in 24 and the 3's in 18 hence LCM=2×2×2×3×3=72.");
}
//code to teach approximation
function approx(){
alert("Numbers can be rounded off to the nearest whole number,certain number of decimal places and to a certain number of significant figures.");
alert("To round off look at the digit next to the one to be rounded off.If this digit is less than 5 the digit to be rounded off remains unchanged.If the digit is greater than or equal to 5 the digit to be rounded off increases by 1.");
alert("For example rounding off 6.471 to the nearest whole number. We are rounding off at 6 and so we look at 4 which is less than 5 hence 6 remains unchanged.Therefore 6.471=6(to the nearest whole number).");
alert("Rounding off 32.63 to the nearest whole number.We are rounding off at 2 hence we look at 6 which is greater than 5 hence 2 increases by 1.Therefore 32.63=33(to the nearest whole number.)");
alert("Rounding off 4.0561 to 1 decimal place.We are rounding off at 0 so we look at 5 which is greater than or equal to 5 hence zero increases by 1.Therefore 4.0561=4.1(to 1 dp)=4.06(to 2 dp)=4.056(to 3dp)");
alert("A significant figure is a figure with a value higher than zero.Zero becomes a significant figure when located between other figures after the decimal point.To count number of significant figures start from the first non zero number.");
alert("Writing 0.070603 to 5 significant figures. We start counting at 7.Hence 0.070603=0.070603(to 5 sf).We keep the first two zeros to keeo the value of the number as a decimal.");
alert("More examples. 0.070603=0.0706(to 3 sf)=0.071(to 2 sf)=0.07(to 1 sf)");
alert("More examples.45.2637=45.264(to 5 sf)=45.26(to 4 sf)=45.3(to 3 sf)=45(to 2 sf)=50(to 1 sf).");
}
//function to teach estimation
function est(){
alert("To estimate we round off to the nearest whole number.For example estimate 9.41×4.52×2.01.Round off each number to the nearest whole number ie 9×5×2=90.Hence 9.41×4.52×2.01 is approximately 9×5×2 is approximately 90.");
alert("More examples. Estimating (3.78×4.93)÷1.88=(4×5)÷2=10.");
alert("Estimating 2.02³√26.61=2³√27=8×3=24.");
}
//code to teach solving quadratic equations
function quad(){
alert("The general formula of quadratic equations is ax²+bx+c=0 where a is the coefficient of x²,b is the coefficient of x and c is a constant.");
alert("Quadratic equations can be solved by factorisation,completing the square and by the quadratic formula.");
alert("To solve 2x²+3x+1=0 by factorisation multiply 2 and 1(a and c) and this is 6.Now look for two numbers which when you add give you 3(b) and these are 2 and 1.Substitute these for 3 and we get 2x²+2x+1x+1=0.Notice that 2x+1x=3x.Now we factor out 2x and 1 and we get 2x(x+1)+1(x+1)=0.We factor out (x+1) and we get (x+1)(2x+1)=0 hence x+1=0 or 2x+1=0, x=-1 or 2x=-1, x=-1 or x=-0.5");
}
//code to teach number bases
function base(){
alert("Everyday numbers we use are in base 10 or denary system.The denary system has digits 0,1,2,3,4,5,6,7,8,9.");
alert("Other number base systems exist such as base 2,3,4,5,6,7,8,9.A number base system has digits one less than the base eg base 2 has digits 0-2,base 7 has digits 0-6 and so on.");
alert("Base 10 numbers can be expanded by their place values eg the number 43521 can be written as 40000+3000+500+20+1=4×10⁴+3×10³+5×10²+2×10¹+1×10°(1×1).This same principle is applicable to other base systems eg 43212(base 5)=4×5⁴+3×5³+2×5²+1×5¹+2×1.To expand a number to the powers of its base start with the last digit(the right-most) and multiply it by the base raised to power 0 in other words multiply by 1( this is unit),the next digit is multiplied by the base raised to power 1,the next multiplied by the base raised to the power 2 and so on.");
alert("To convert from other bases to base 10 expand the number to the powers of its base and add together eg Converting 23134(base 5) to base 10. 23134(base 5)=2×5⁴+3x5³+1×5²+3×5¹+4×1=1250+375+25+15+4=1669");
alert("More examples.Converting 456(base 7) to base 10.456(base 7)=4×7²+5×7¹+6×1=196+35+6=237.");
alert("To convert from base 10 to other bases divide the base 10 number and the resultants by the base you want to convert to writing the remainders eg converting 123 to base 5 do this: 5|123=24 rem 3,read this as 5 into 123 =24 remainder 3,next 5|24=4 rem 4, 5|4=0 rem 4.Now read the remainders from the right and you get 443 hence 123(base 10)=443(base 5).");
alert("More examples.To Convert 45 to base 2 do this: 2|45=22 rem 1, 2|22=11 rem 0, 2|11=5 rem 1, 2|5=2 rem 1, 2|1=0 rem 1.Now read remainders from the right and 45(base 10)=11101(base 2).");
alert("To convert from a non base 10 number to another non base 10 number first convert to base 10 and then to the other base eg to convert 101(base 2) to base three do this: Convert 101(base 2) to base 10 ie 1×2²+0×2¹+1×1=4+0+1=5(base 10),now convert to base 3 ie 3|5=1 rem 2, 3|1=0 rem 1, now read remainders from the right hence 101(base 2)=12(base 3).");
alert("More examples.To convert 432(base 5) to base 7 do this: First convert 432(base 5) to base 10 ie 4×5²+3×5¹+2×1=100+15+2=117(base 10),now convert to base 7 ie 7|117=16 rem 5, 7|16=2 rem 2, 7|2=0 rem 2, now read remainders from the right hence 432(base 5)=225(base 7).");
}
//code to teach number sequences
function seq(){
alert("A sequence is a set of numbers arranged in a particular order eg 2,4,6,8,10,.....In this sequence to get the next number add 2 to the previous number. If these numbers are given in no particular order eg 10,2,6,4,8 they no longer form a sequence.");
alert("A sequence can be defined by giving a connection between one term and the next.This connection can be given in words or as a formula eg The first term of a sequence is 2 and the next term is given by Un+1=2Un-1.Write down the next three terms of the sequence.Do this:U1=2, to get the next term we do something to U1. We insert U1 into the formula hence  U1+1=2×U1-1 this gives U2=2×2+1 this gives U2=4-1 and this gives U2=3.To get the next term we insert U2 into the formula ie U2+1=2×U2-1,this gives U3=2×3-1=6-1=5.To get the next term we insert U3 into the formula and this gives U3+1=2×U3-1 and this gives U4= 2×5-1=10-1=9 hence U1=2,U2=3,U3=5 and U4=9.");
alert("We can also relate a term to its position in the sequence eg The nth term of a sequence,Un, is given by Un=2ⁿ+1.Find the third and fourth terms.Do this: third term is term 3 hence n=3 and so U3=2³+1=8+1=9. Fourth term is term 4 so n=4 hence U4=2⁴+1=16+1=17.");
}
//code to teach algebra
function alg(){
alert("Algebra is a branch of mathematics in which letters of the alphabet represent numbers. Algebraic expressions are a mixture of letters and numbers eg 3x+4y is an algebraic expression. More examples are 5z, 7g-4t, 2r(d-3) etc.");
alert("An algebraic expression is made up of terms eg 3x+5y is made up of the terms 3x and 5y. The terms are joined by either the plus(+) or minus(-) signs. In a term like 3x this is the same as 3×x or 3(x).In other words the number and letter are multiplying each other.In whatever operation you do the term always goes with its sign.In other words in the term 3x+5y the + sign goes with the term 5y.");
alert("Terms can either be like or unlike terms. Terms of the same letter are called like terms eg 2a and -7a are like terms. Terms of different letters are called unlike terms eg 8y and 7p are unlike terms.Always remember that LIKE TERMS COMBINE AND UNLIKE TERMS DO NOT COMBINE.In other words you can add or subtract like terms but you cannot do so with unlike terms.");
alert("Expressions  in which the highest power is 1 are called linear expressions eg 3x+y, 5y+3x+y-7x+3 are linear terms.Expressions in which the highest power is two are called quadratic expressions eg 4x²-3, a²(a+1)-a²(a-1) are quadratic expressions.");
alert("Lets do some examples on like and unlike terms.");
alert("Simplify 5y+3x+y-7x+3.First rearrange the expression to group like terms like this: 5y+y+3x-7x+3.Now combine like terms like this:6y-4x+3.There are no more like terms hence we stop here.");
alert("7-(x-2y)+3(5x-2).First multiply each term in the bracket by the term outside the bracket(- is the same as -1) ie multiply bracket (x-2y) by -1 and (5x-2) by 3 hence 7-x+2y+15x-6.Now group like terms like this 7-6-x+15x+2y and combining like terms 1+14x+2y(REMEMBER A TERM GOES WITH ITS SIGN)");
alert("Simplify 5x-(3-x+3y)-7(5-y). First 5x-3+x-3y-35+7y. Now 5x+x-3y+7y-3-35 and this gives 6x+4y-38.");
alert("Sometimes you need to multiply a bracket by a bracket eg (x+1)(x-1). To do so break up the first bracket into two ie into x and +1.Now multiply the second bracket by each term from the first bracket ie x(x-1)+1(x-1)=x²-x+x-1=x²-1.");
alert("Lets do more examples on multiplying a bracket by a bracket.");
alert("(x+3)(x-5)=x(x-5)+3(x-5)=x²-5x+3x-15=x²-2x-15.");
alert("(3x-2)(3x+2)=3x(3x+2)-2(3x+2)=9x²+6x-6x-4=9x²-4.");
alert("(2y+3)²=(2y+3)(2y+3)=2y(2y+3)+3(2y+3)=4y²+6y+6y+9=4y²+12y+9.");
}
//code to teach factorisation
function factorisation(){
alert("In an algebraic expression common terms can be factored out effectively writting the expression as a product of its factors.");
alert("Factorise 5xy-10x. The term 5x is common in the expression and we divide each term in the expression by 5x hence 5xy-10x=5x(y-2).");
alert("Lets do more examples on factorisation.");
alert("Factorise a²-16. There are no common factors,this is a difference of two squares hence a²-16=a²-4²=(a+4)(a-4).");
alert("Factorise 5a²+45b². The common factor is 5 hence 5a²+45b²=5(a²+9b²).The bracketed terms can be factorised further since they are the difference of two squares hence 5a²+45b²=5(a²+9b²)=5(a+3b)(a-3b).");
alert("Factorise 3p-3q+pq-q²=3(p-q)+q(p-q), now p-q is common hence (p-q)(3+q).");
}
//code to teach directed numbers
function direct(){
alert("It is important to know how to deal with directed numbers eg 2-3.In this case we are subtracting a bigger number from a smaller number.One useful trick to use is this: write down the negative sign and then say 3-2 and you get -1.Also note that 2-3 is the same as -3+2. The numbers have been rearranged carrying their signs with them.");
alert("Lets do more examples on directed numbers");
alert("4-7. Write down  the minus sign and say 7-4 and you get -3.");
alert("-6+2=2-6=-4.");
alert("When multiplying or dividing directed numbers a minus sign and a minus sign give a plus sign eg -2×-7=14, -40÷-5=8.");
alert("When multiplying or dividing directed numbers a minus sign and a plus sign give a minus sign eg -6×5=-30, -8÷4=-2.");
alert("Lets do more examples on directed numbers.");
alert("-7×-5=35, -45÷9=-5, -4×3×-2=24, -55÷-11=5.");
}
//code to teach more algebra
function alg1(){
alert("Sometimes we have to find the HCF and LCM of algebraic expressions.This depends on our ability to identify factors correctly");
alert("For example lets find the HCF and LCM of a²b,a³b² and a²b³.Now a and b are the common factors in the three terms.Use a and b with the lowest powers for HCF and those with the highest powers for LCM.In this case HCF=a²b(pick out the lowest power of each common factor.LCM=a³b³(pick out the highest power of each factor.)");
alert("Lets do more examples on HCF and LCM of algebraic expressions");
alert("Find the HCF and LCM of 3x+3,2x+2,x²-1.First factorise the terms ie 3x+3=3(x+1),2x+2=2(x+1) and x²-1=(x-1)(x+1). Looking at the three terms (x+1) is common hence HCF=(x+1).Now for the LCM take each factor where its most abundant hence LCM=2×3(x-1)(x+1)**Note-no need to expand brackets.");
alert("Find the HCF and LCM of x²-9,x²+6x+9 and 2x²+7x+3.First factorise the above quadratic expressions ie x²-9=(x+3)(x-3),x²+6x+9=(x+3)(x+3) and 2x²+7x+3=(2x+1)(x+3).Looking at the above terms (x+3) is common hence HCF=(x+3).For LCM take each factor where its most common hence LCM=(x+3)²(x-3)(2x+1).");
}
//code to teach changing subject of the formula
function sof(){
alert("The subject of the formula is a single term in an algebraic formula which is expressed in terms of the others eg in the formula d=v-2t, d is the subject of the formula. The formula can be manipulated such that v or t are made the subject of formulae.");
alert("In manipulating algebraic formulae there are certain rules to follow.When a term crosses the equal sign it changes sign.We also  need to separate all other letters and numbers from the one to be made the subject of the formula.To do this we look at what each letter or number is doing to the one to be made subject and we do the opposite to both sides of the formula to keep things balanced eg lets make x the subject of the formula in a+x=c. Now a is adding to x so we subtract a from both sides of the formula ie a+x-a=c-a and we get x=c-a");
alert("Lets do a more complicated example");
alert("Lets make x the subject of the formula in mx-p=bx+w. First we collect the terms containing x to one side of the formula ie mx-bx=w+p.Now we factorise the left hand side ie x(m-b)=w+p.Now the bracketed terms (m-b) are multipying x so we divide both sides by (m-b) ie x(m-b)/(m-b)=(w+p)/(m-b) hence x=(w+p)/(m-b).");
alert("In the formula √(x+a)=p make a the subject of the formula.The first obstacle to x is the square root sign hence we square both sides to remove the square root sign ie [(√x+a)]²=p² and this gives x+a=p².Now x is adding to a hence we subtract x from both sides ie x+a-x=p²-x and this results in a=p²-x.");
}
//code to teach solving equations
function seq(){
alert("An equation is created when two algebraic expressions are equal eg 2-5x=x+14");
alert("We will look at two types of equations namely linear and quadratic equations. 2-5x=x+14 is a linear equation because the highest power in the expressions is 1.If a graph of the equation is plotted it is a straight line.For quadratic equations see the topic on quadratics.");
alert("Solving an equation is the process of finding the numbers represented by the variables in the equation.These numbers should make the equation true ie the left and right hand become equal when this number is inserted in the equation.");
alert("Lets start with a simple example.Lets solve the equation x+3=7.We want to make x the subject of the equation.We subtract  3 from both sides of the equation ie x+3-3=7-3 and we get x=7-3=4 hence the solution to the equation is 4.");
alert("Lets do a more complicated example.Lets solve the equation 7-5x=4x-11. In this case we first collect like terms to one side of the equal sign ie numbers to one side and algebraic terms to the other side.REMEMBER WHEN A NUMBER OR TERM CROSSES THE EQUAL SIGN IT CHANGES SIGNS,hence -5x-4x=-11-7,this gives -9x=-18.To isolate x we divide by -9 on both sides of the equation ie -9x/-9=-18/-9 and this gives x=2.");
alert("To solve the equation 3(2x-1)-2(x-1)=0 we first clear the  brackets ie we multiply each term in the bracket by the term outside the bracket so it becomes 6x-3-2x+2=0 and combining like terms this becomes 4x-1=0.Taking -1 to the other side 4x=1.To isolate x we divide both sides by 4 ie 4x/4=1/4, hence x=¼.");
alert("Lets look at equations with fractions.Lets  solve the equation ⅓x+¾x=12.We must first clear the fractions.To do so we multiply through by the common denominator of the two fractions which is 12 ie ⅓x ×12+¾x ×12=12×12 this becomes 4x+9x=144 this becomes 13x=144.To isolate x we divide both sides by 13 ie 13x/13=144/13 hence x=11.1(to 1 decimal place).");
alert("Now attempt to solve the equation (c+1)/4 - (c-1)/3 =1.Click OK to view the working and answer.");
alert("To solve first multiply through by the common denominator which is 12 ie (c+1)/4 ×12 - (c-1)/3 ×12 = 1×12 and this becomes 3(c+1)-4(c-1)=12 now we clear the brackets ie 3c+3-4c+4=12,combining like terms this becomes -c+7=12.Now we subtract 7 from both sides ie -c+7-7=12-7 and this becomes -c=5.Now we have a negative c and to make it positive we divide both sides by -1 ie -c/-1=5/-1, hence c=-5.");
alert("See test questions section for more practice questions.");
}
//code to teach simultaneous equations
function sim(){
alert("Simultaneous means at the same time.We are going to deal with a system of linear equations with two variables  which have to be solved at the same time.When two unknown variables are involved then 2 equations are needed to find the two unknowns and these are known as simultaneous equations.");
alert("We are going to make use of two methods of solving simultaneous equations known as the SUBSTITUTION method and the ELIMINATION method.");
alert("Lets do an example using the substitution method.Lets solve the equations x-5y=5 and 2x+y=-1 simultaneously.To solve first make either x or y the subject in any of the equations.In this case we are going to make x the subject in the first equation ie x=5+5y.Now substitute  5+5y for x in the second equation(since x=5+5y) ie 2(5+5y)+y=-1, expand the bracket ie 10+10y+y=-1,now move numbers to one side ie 10y+y=-1-10,this gives 11y=-11 hence y=-1. Now substitute -1 for y in any of the first two equations.In this case we substitute into the first equation ie x+5(-1)=5, this gives x-5=5 hence x=0.The solutions are x=0 and y=-1.");
alert("To eliminate is to get rid of something.The aim of this method is to get rid of one of the letters so the remaining can be found.");
alert("Lets do an example using the elimination method.Lets solve x-y=6 and 4x+7y=-9 simultaneously.To solve make the coefficients of either x or y the same magnitude in both equations.In this case lets make coefficients of y the same magnitude hence multiply the first equation by 7 ie x-y=6 ×7 and this becomes 7x-7y=42.To eliminate y we add the first equation to this new equation ie add the left hand terms together and the right hand terms together ie 4x+7y+7x-7y=-9+42 this gives 11x=33 hence x=3.Now substitute 3 for x in any one of the  original equations.In this case we substitute 3 for x in the first equation ie 3-y=6,taking numbers to one side -y=6-3,this gives -y=3 hence y=-3.The solutions are x=3 and y=-3.");
alert("Lets do one more example.Lets solve 10x+7y=-1 and 2x+y=5 simultaneously.Lets make the coefficients of x the same in both equations.To do so we multiply the second equation by 5 ie 2x+y=5×5 and this gives 10x+5y=25.Now subtract this equation from the first equation ie 10x+7y-10x-5y=-1-25 and this gives 2y=-26 hence y=-13.Now substitute -13 for y in any one of the original equations.In this case we substitute -13 for y in the second equation ie 2x-13=5,this gives 2x=5+13, 2x=18 hence x=9.Hence the solutions are x=9 and y=-13.");
alert("See test questions section for more work on simultaneous equations.");
}
//code to teach indices and logarithms
function indi(){
alert("If a number is written in the form 2⁴, the number 2 is called the base and 4 is the index or power of the number.2⁴ means 2×2×2×2. The same applies for all numbers and algebraic letters.");
alert("Lets look at the laws of indices.");
alert("LAW 1: a^x × a^y=a^(x+y).This is interpreted as follows:When multiplying numbers in index form to the same base add the powers eg 3²×3²=3⁴(notice the powers have been added). Another example is x² × x¹=x³.");
alert("LAW 2: a^x÷a^y=a^(x-y).This is interpreted as follows:When dividing numbers in index form to the same base subtract the powers eg 4¹÷4³=4-².Another example y³÷y²=y(notice how the powers have been subtracted.");
alert("LAW 3:(a^x)^y=a^xy.This is interpreted as follows:When raising a number in index form to another power multiply the powers and maintain the base eg (5²)²=5⁴(notice the powers have been multiplied and the base remains unchanged)");
alert("Any number or letter raised to the power 1 equals the number itself eg 5¹=5 and d¹=d.");
alert("Any number or letter raised to the power zero equals 1 eg 6°=1 and x°=1.");
alert("Any number or letter raised to a negative power equals to the inverse or reciprocal of the positive power of the number eg 3-²=1/3² and g-⁴=1/g⁴");
alert("×√a=a^(1/x) interpreted as follows: The root of a number equals that number raised to the inverse of the root eg √a=a^½, ³√a=a^⅓, ⁴√8=8^¼ etc.");
alert("Lets work on some examples.");
alert("Lets simplify a^5÷a^6=a-¹=1/a (use law 2).");
alert("Lets evaluate x² × x-²=x°=1(use law 1)");
alert("Evaluate (⅔)-²=1/(⅔)²=1/(2²/3²)=1×(3²/2²)=3²/2²=9/4(use law 3)");
alert("Simplify 3y²×4y-⁴=3×4×y²×y-⁴=12×y-²=12/y².");
alert("Simplify √x × x-¹=x^½ × x-¹=x^-½=1/x^½=1/√x.");
alert("Simplify 5^¾×5^¼=5^(¾+¼)=5¹=5.");
alert("Simplify (7^²)^-¼=7^(2×-¼)=7^-½=1/7^½=1/√7.");
alert("Lets look at equations with indices.Remember the ultimate goal of solving equations is to end up with the numerical value of the unknown letter.");
alert("Lets solve x^½=3.We should strive to make the power of x be 1.To do so we square both sides ie (x^½)²=3² and this becomes x¹=9 hence x=9.");
alert("Lets solve 3x-³=24.Dividing through by 3 this becomes x-³=8.Again we want to make the power of x be 1.To do so we raise both sides to the power of -⅓ ie (x-³)^-⅓=8^-¼.Remember 8=2³ hence the equation can be written as (x-³)^-⅓=(2³)^-⅓ and this becomes x=2-¹ hence x=½.");
alert("Lets solve 4^x=32.Express each side in index form using the same base ie (2²)^x=2^5.Now equate the powers ie 2x=5 hence x=5/2, x=2½.");
}
// code to teach logarithms
function log(){
alert("A number in index form such as 8=2³ can be written as log 8 to base 2=3.In other words a logarithm is a power.In general if M=x^a, then log M to base x =a.");
alert("Lets do some examples.");
alert("Evaluate log 81 to base 3.Let log 81 base 3=x, then 3^x=81.Now lets write 81 as a number to base 3 ie 3^x=3⁴,equating powers x=4 hence log 81 base 3=4.");
alert("Evaluate log 0.2 base 25.This can be written as 25^x=0.2,but 0.2 can be written as 1/5 so the equation becomes 25^x=1/5.Now express both sides as numbers to the same base ie (5²)^x=5-¹ and equating powers, we get 2x=-1,and so x=-½ hence log 0.2 base 25=-½.");
alert("Lets look at the laws of logarithms.");
alert("LAW 1: log (MN) base x=log M base x + log N base x eg Given that log 2= 0.301 and log 3=0.477 find log 6. Applying law 1 log 6= log(2×3)= log2+log3=0.301+0.477=0.778.");
alert("LAW 2:log(M/N) base x=log M base x-log N base x eg Given that log 2=0.301,log 3=0.477 and log 7=0.845 find log 3.5.Applying law 2 log 3.5=log(7/2)=log 7-log2=0.845-0.301=0.544.");
alert("LAW 3: log(M)^p base x=plog M base x eg Given that log 2=0.301,log 3=0.477 and log 7=0.845 find log 9.Log 9=log 3²=2log3=2×0.477=0.954");
alert("Given that log 2=0.301,log 3=0.477 and log 10 =1 find log 0.8 Log 0.8=log(8/10)= log 8-log 10.Log 8=log 2³ hence log 0.8=log(8/10)=log 8-log 10=log 2³-log 10=3log2-log 10=3×0.301-1=0.903-1=-0.097.");
alert("Evaluate log16/log 4. Log 16/log 4=log2⁴/log2²=4log2/2log2=4/2=2.");
alert("Evaluate ⅔ log 27 base 3.To evaluate do this: ⅔ log 27 base 3=⅔ log 3³ base 3=3×⅔ log 3 base 3= 2 log 3 base 3=2(since log 3 base 3=1).");
}
//code to teach ratio 
function ratio(){
alert("A ratio compares similar quantities eg 40g and 160g can be expressed in the ratio 40:160(pronounced as 40 is to 160).This ratio can be expressed in several ways such as 40 to 160 and 40/160. The ratio 40/160 suggests that ratio can be reduced to simplest form ie 40:160=1:4");
alert("Consider the ratio 115cm:1.5m.To simplify this ratio first express the parts to the same units ie 115cm:150cm.Now 115/150=23/30=23:30.");
alert("To simplify ⅔:¾ first multiply each part by the LCM of the denominator ie ⅔×12 : ¾×12=8:9.");
alert("Ratios like fractions have equivalences.We can find missing parts in ratios by comparing these equivalences eg Given that x:7=12:21 find x. The ratio can be written in fraction form ie x/7=12/21, now x=12/21×7 hence x=4.");
alert("Just like fractions ratios can be compared eg Which ratio is greater 3:7 or 4:9?To tackle this question first write the ratios as fractions ie 3/7 and 4/9.Now convert these fractions to decimals ie 3/7=0.4285 and 4/9=0.4,therefore 3/7 is greater.");
alert("Quantities can be increased or decreased by given ratios eg Increase 5.4 in the ratio 5:8.By equivalences 5.4:x=5:8(5.4 has been linked to 5 since its the smaller part).Now x/5.4=8/5, x=8/5×5.4=8.64 hence 5.4 increases to 8.64");
alert("Decrease 726kg in the ratio 7:11.By equivalences x:726=7:11(7 26 has been linked to 11 since its the bigger part).Now x/726=7/11, x=7/11×726=462, hence 726kg reduces to 462kg.");
}
//code to teach rate
function rate(){
alert("Rate connects quantities of different kinds eg speed(km/hr) connects distance with time.Rate is mostly connected with time.It usually refers to change of a quantity with time.");
alert("For example a bus travels 40km in 10 minutes.Find the speed in km/hr.Lets use simple proportion ie 40km:10minutes so x:60minutes(1hour).Now we cross multiply ie 40×60=10× x, x=(40×60)/10=240km/hr.");
alert("A vehicle used 30 litres of fuel to cover a distance of 300km.Find the rate of fuel consumption of the vehicle(fuel consumed per km). Again we use simple proportion ie 30litres:300km and x: 1km, now cross multiply ie 30×1=300× x,  x=(30km×1litre)/300km=0.1litre hence fuel consumption is 0.1l/km.");
alert("The density of aluminium is 2.7g/cm³.Calculate the volume in cm³,of a piece of aluminium of mass 16.2g.Using simple proportion 2.7g:1cm³ and 10g:x, now lets cross multiply ie 2.7× x=16.2×1 and x=(16.2×1)/2.7=6, hence the piece of aluminium has a volume of 6cm³.");
}
//code to teach proportion
function prop(){
alert("Proportion  compares changes which affect one quantity when another quantity changes eg the time taken by a vehicle to cover a given distance changes with speed ie as the speed increases the vehicle takes less time and as the speed decreases the vehicle takes more time to cover the same distance.");
alert("20 packs of sweets cost $20.What will be the cost of 12 packs.ANSWER: the cost will increase or decrease in proportion to amount  of packs ie 20packs:$20 and 12packs:x, now lets cross multiply ie 20× x=12×20, x=(12×20)/20=12, hence 12 packs will cost $12.");
alert("4 man can do a job in 7 days.How many days will 8 man take to do the same job,assuming they are all working at the same rate?ANSWER: lets do a simple proportion ie 4men: 7 days and 8men: x, in this case we dont cross multiply,but do a direct multiplication ie 4×7=8× x,  4/8× 7=½×7=3.5 hence 8 men will take 3. 5 days.");
alert("10 adults can sow 150kg of seed per day.How much seed will 8 adults sow at the same rate?ANSWER:Lets do a simple proportion ie 10:150 and 8:x .Do a direct multiplication 10×150=8× x, x=(10×150)/8=187.5 hence 8 men will sow 187.5kg per day.");
}
//code to teach map scale
function scale(){
alert("Map scales are linear meaning they give a relationship between distance on a map and the actual distance on the ground. Scale can be given in various ways eg 1cm to represent 50m can be given as 1cm:50m or 1:5000 or 1cm:5000cm or 1/5000.");
alert("The map scale with components reduced to the same basic unit is called REPRESENTATIVE FRACTION(RF). Always remember that RF=distance on the map/distance on the ground eg Given that the scale of a map is 1cm:2km, then RF=1/200 000 ie 2km has been changed to cm.");
alert("The scale of the area represented by the map can be derived from the linear scale.The scale of the area is the square of the linear scale eg Given that the scale of a map is 1cm:2.5km the area scale is (1cm×1cm):(2.5km×2.5km)=1cm²:6.25km².");
alert("Lets do some examples on scale.");
alert("Find the area scale given that the linear scale is 1:250.ANSWER: Area scale=linear scale²= 1×1:250×250=1:62500.");
alert("What is the RF of the scale 1cm:3km?ANSWER:RF=1/3×1000=1/3000(3km has been changed to cm)");
alert("The scale of a map is given as 1:150 000, find the distance in km on the ground represented by 2cm on the map.ANSWER:Lets use simple proportion ie 1cm:150 000cm, so 2cm:x, cross multiplying 1 × x=2×150 000, x= (2× 150 000)/1, x=300 000cm hence 2cm on the map represent 300 000cm on the ground which is 300 000/100 000=3km.(note that 1km=100 000cm).");
}