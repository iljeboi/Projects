<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <title>Thomas Madden - Front-End Developer</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <link rel="stylesheet" href="style3.css">
    </head>
    <body>
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Portfolio</a>
            <a id="contact-link" href="#contact">Contact</a>
            <a id="projects-link" href="#projects">Projects</a>
            <a id="skills-link" href="#skills">Skills</a>
            <a id="about-link" href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        <section class="banner" id="home">
        <div class="textBx">
            <h2>Thomas<br><span>Madden</span></h2>
            <h3>Front End Web Dev (FEWD)</h3>
            <a href="#about" class="btn">About Me</a>
        </div>
        </section>
        <section class="about"id="about">
            <div class="heading">
                <h2>About Me</h2>
            </div>
            <div class="content">
                <div class="w50">
                    <img src="image2.jpg" class="img">
                </div>
                <div class="contentBx w50">
                    <p>I'm the good looking redhead in the middle there. I grew up in Northeast Philadelphia with two brothers, Matt and Shane, and a sister, Jenna. I was lucky enough to have parents who pushed me towards achieving a higher education than they have had. Right before my senior year of college, I made the decision to drop out due to my mental health and Drexel's lack of course selection pertaining to my specific field of interest. I like to create interfaces that people will enjoy using. I'll be looking for a job in front-end web development, and as time goes on become a full stack dev. Then it's on to mobile applications. One thing at a time, though</p>
                </div>
            </div>
        </section>
        <section class="skills" id="skills">
            <div class="heading white">
                <h2>My Skills</h2>
            </div>
            <div class="content">
                <div class="skillsBx">
                    <img src="icon1.jpg">
                    <h2>Web Design</h2>
                    <p>Creating visually appealing interfaces for users.</p>
                </div>
                <div class="skillsBx">
                    <img src="icon1.jpg">
                    <h2>Back End</h2>
                    <p>Manifesting databases so that it communicates with the website.</p>
                </div>
                <div class="skillsBx">
                    <img src="icon1.jpg">
                    <h2>Content Writing</h2>
                    <p>Coming up with relevant information for the company's website.</p>
                </div>
            </div>
        </section>
        <section class="projects" id="projects">
            <div class="heading">
                <h2>My Projects</h2>
                <p>These pictures will end up being clickable screen captures of my future projects</p>
            </div>
            <div class="content">
                <div class="workBx">
                    <img src="icon1.jpg">
                </div>
                <div class="workBx">
                    <img src="icon1.jpg">
                </div>
                <div class="workBx">
                    <img src="icon1.jpg">
                </div>
                <div class="workBx">
                    <img src="icon1.jpg">
                </div>
                <div class="heading">
                    <a href="#" class="btn">View More</a>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <div class="heading">
                <h2>Contact Me</h2>
                <p>stuffs...</p>
            </div>
            <div class="content">
                <div class="contactInfo">
                    <h3>Contact Info</h3>
                    <div class="contactInfoBx">
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>267-535-0379</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-envelope-open"></i>
                            </div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>maddentom1233@gmail.com</p>
                            </div>                        
                        </div>
                    </div>
                        
                </div>
            <div class="formBx">
                    <form method="POST" action="contact.php">
                        <h3>Message Me</h3>
                        <input type="text" name="name" placeholder="Full Name" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <input type="submit" name="mailBtn" value="Send">
                    </form>
                </div>
            </div>
        </div>
        </section>
        <script src="stuff.js"></script>
    </body>
</html>
