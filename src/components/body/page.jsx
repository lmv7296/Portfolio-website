import React from "react";
import './page.css'
export default function page(){


    return(
        <>
    <body>
 
<div class="Main_body_div">

<section class="section_text_header">
    <h3 class="intro_me">Hi, my name is</h3>
    <h1 class="my_name">Lorenzo Vredeveld</h1>
    <h3 class="expression">I create things for the web.</h3>
    <p class="introduction">I'm a software engineer specializing in front-end web development.
        Currently, I'm focused on learning all I need to know about making a good functional website.
        On this website, you will read about how I became a programmer, what I want to learn in the future 
        and all my progress and projects. As well you will be able to download my resume and there will also be a way to contact me.</p>


</section>
<section id="About">
<div class="aboutme_main">
 <h2>About Me</h2>
 <div className="flex items-center ">
 <p class="about_me_main_text mt-8 mb-6 ">Hello! My name is Lorenzo and I started my programming journey in 2020. Let me explain all by going back to December 2020.
        That month a lot changed in my life, since I moved to Argentina.
        It all started when a company here in Cordoba, Argentina became interested in me and ended up hiring me as a second-level support agent.
        The type of work that was included in this position was the creation of queries for a SQL database, finding out why a query is slow and improving it. It also included 
        localizing bugs that customers or we found and trying to find a solution that would resolve them. This code was written in C# and was not easy to understand for someone that just started.
        However, I had a good supervisor that helped me a lot, being these my very first steps into programming.
        One year later, in December 2021, my passion for programming made me switch paths, and that is when I started to work at Globant, as a web UI trainee. 
        Before that, I had never worked with HTML CSS and JS, so entering this level made a lot of sense.
        Now fast forwarding to today, I got promoted to web UI JR, and I'm enjoying what I'm doing every day, trying to learn as much as I can.
        i have been working with globant more than 1 year and a half learning react.js and also other frameworks and librarys.  
           </p>
 <img class="pic_of_me ml-72" src="./media/profile-pic.jpg" alt=""/>
</div>
</div>
</section>




</div>

</body>
        </>
    )
}