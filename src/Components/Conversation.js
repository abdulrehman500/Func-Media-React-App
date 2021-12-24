import React from 'react';
import './conversation.css';

export default function conversation() {
    return (
        <section className='conversation'>
        <div>

<h5 class="form05_h5">Let's start a<br/>conversation<strong class="bold-text-30">.</strong></h5>
<div class="container ">
<div class="form05_form_block w-form">
   <form data-name="func media form" name="wf-form-func.media-form" id="email-form" method="get" class="form05_form"
    aria-label="func media form">
      <div class="form05_wrap"><label for="Name" class="form05_title">Hey, my name is</label>
      <input type="text" class="form05_input w-input" maxlength="256" name="Name" data-name="Name" placeholder="..." id="Name" required=""/></div>
      <div class="form05_wrap"><label for="Email" class="form05_title">My email address is</label>
      <input type="email" class="form05_input w-input" maxlength="256" name="Email" data-name="Email" placeholder="..." id="Email" required=""/></div>
      <div class="form05_wrap"><label for="I-m-Looking-For-2" class="form05_title">I am looking for help with a</label>
      <input type="text" class="form05_input project w-input" maxlength="256" name="I-m-Looking-For" data-name="I'm Looking For" placeholder="website, branding, etc" id="I-m-Looking-For-2"/></div>
      <div class="form05_wrap"><label for="My-max-budget-is" class="form05_title">My maximum budget is</label>
      <input type="text" class="form05_input budget w-input" maxlength="256" name="My-max-budget-is" data-name="My Max Budget Is" placeholder="$" id="My-max-budget-is" required=""/></div>
      <div class="form05_wrap"><label for="I-need-my-project-within-3" class="form05_title">I need my project within</label>
      <input type="text" class="form05_input budget w-input" maxlength="256" name="I-need-my-project-within" data-name="I need my project within" placeholder="..." id="I-need-my-project-within-3" required=""/></div>
    
     <div className='d-flex'>

      <input type="submit" value="send" data-wait="please wait..." class="form05_button w-button"/>
     </div>
      <div class="repcatcha">
         <div data-theme="dark" data-sitekey="6Lc-jcMUAAAAAKAymQV3wjIz8ed2eXLtLAue9p5M"
          class="w-form-formrecaptcha recaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled">
            <div style={{width: "304px",height: "78px",}}>
               <div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc-jcMUAAAAAKAymQV3wjIz8ed2eXLtLAue9p5M&amp;co=aHR0cHM6Ly93d3cuZnVuYy5tZWRpYTo0NDM.&amp;hl=en&amp;v=VZKEDW9wslPbEc9RmzMqaOAP&amp;theme=dark&amp;size=normal&amp;cb=9xexu2llosaj" 
               width="304" height="78" role="presentation" name="a-hzdsqo63kpdx" frameborder="0" scrolling="no" 
              ></iframe></div>
  
            </div>
         </div>
      </div>
   </form>
   
</div>
</div>

  <div class="g-recaptcha"
       data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
  <p></p>
        </div>
        </section>
    )
}
