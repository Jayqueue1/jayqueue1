import React from 'react';

function SixthComponent(){
return (
    <>
    <nav>
<article>
<section>
    <p><h4>This is My Sixth Component</h4></p>
    Date<input type="date" />
Email<input type="email" />
Color<input type="color" />
Number<input type="number" />
Range<input type="range" /> 
Search<input type="search" />
<input list="Departments" name="Department" />
<datalist id ="Departments">
<option value="Finance" />
<option value="Audit" />
<option value="HR" />
<option value="Operations" />
</datalist>
 
</section>
</article>
</nav>
 </>

);
}
export  default SixthComponent;