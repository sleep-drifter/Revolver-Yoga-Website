window.onunload=function(){},$(document).ready(function(){function e(){l.addClass("addSpin"),setTimeout(function(){l.removeClass("addSpin")},1e3)}function t(e){var t=w[e].name,a=w[e].title,s=w[e].past,i=w[e].quote,n=w[e].info,o=w[e].img,r=$(".swap-body figure h2"),l=$(".swap-body figure h3"),c=$(".instructor-past"),d=$(".instructor-quote"),h=$(".instructor-body"),u=$(".swap-body figure img");r.html(t),l.html(a),c.html(s),d.html(i),h.html(n),u.attr("src",o)}function a(e){var t=y[e].title,a=y[e].bodyText,s=$(".category-title"),i=$(".new-student-body");s.html(t),i.html(a)}function s(e,s){"instructors"===s&&t(e),"new-students"===s&&a(e)}function i(e,t,a){t.html(b[e].title),a.html(b[e].description)}function n(e,t){C=$(e).find(".loading-logo");var a=$(e).find("h2"),s=$(e).find(".class-description"),n=$(e).find(".sign-up-btn"),o=e.innerHeight(),r;"a1"===t&&(r=0),"a2"===t&&(r=1),"a3"===t&&(r=2),"a4"===t&&(r=3),"a5"===t&&(r=4),"b1"===t&&(r=5),"b2"===t&&(r=6),"b3"===t&&(r=7),"b4"===t&&(r=8),"b5"===t&&(r=9),"b6"===t&&(r=10),"c1"===t&&(r=null),e.animate({height:"100px"}),a.css("opacity","0"),s.css("opacity","0"),n.css("opacity","0"),C.toggleClass("display-loading"),C.css({opacity:.8}),C.addClass("addSpinInf"),setTimeout(function(){return null===r||i(r,a,s),o=a.innerHeight()+s.innerHeight()},400),setTimeout(function(){C.css({opacity:0}),C.toggleClass("display-loading"),C.removeClass("addSpinInf")},1500),setTimeout(function(){o=a.innerHeight()+s.innerHeight(),e.animate({height:o+100+"px"}),a.css("opacity","1"),s.css("opacity","1"),n.css("opacity","1")},2e3)}var o=$(window).width(),r=$(".content-stage"),l=$(".navLogo"),c=$(".plug > p"),d=$(".plug-info"),h=$(".profile-pic"),u=$(".profile-ring"),p=$(".exit"),g=d.innerWidth(),f=h.outerWidth(),m={courtney:"<p>Trained in the YogaWorks method emphasizing safe, proper alignment within a flowing vinyasa context, Courtney aims to teach students in methodical and focused classes so students feel empowered with a deep knowledge of their bodies, clear technique, awareness of breath and quieted minds. As a skier, runner, and youth competitive swimmer with many injuries, Courtney understands tight athletic bodies intimately. She leads her students through well-balanced practices which are challenging both physically and mentally, creating space for more of the good stuff; love, compassion, kindness, and oneness.</p><p>A Walla Walla native and Whitman graduate with an ever-growing love for this fair (little) city, Courtney opened Revolver Yoga in September 2013. It is with the deepest gratitude and respect for her teachers Jason, Chuck and Jodie as well as the community and teachers at Revolver that she continues to be inspired to study, practice, and look within.</p>",chrissy:"<p>Chrissy's love for yoga brought her all the way from the Midwest to the Pacific Northwest to attend a Hatha yoga teacher training program at The Movement Center in Portland, Oregon. Her training provided the foundation for a style focused on establishing a deep connection to oneself, centering the body and mind, and skillful knowledge of breath awareness. Chrissy’s teaching style is slow, provocative, grounding, and leaves practitioners deeply relaxed and aware of their own profound connection to the universe. She is a highly skilled Reiki Master and the creator of TuTara Magikal products which combine healing herbalism theory, lunar-charged energy, and organically grown materials.</p>",tara:"<p>After practicing yoga for nearly twenty years, Tara decided to complete the Teaching Training Program at Peace Through Yoga in Indianapolis, Indiana. Tara's teaching experience ranges from vinyasa classes to pre-natal yoga, as she is also a graduate of Blooma's nationally-recognized Pre-Natal Yoga Teaching Training Program. Tara invites you to come to the mat as you are and to take the mindfulness and presence you cultivate in your practice beyond the mat.</p>",kay:"<p>Kay Lynn views her teaching as the sharing of her practice, which is centered in opening the heart and mind to greater mindfulness and joy, both on and off the mat. She enjoys working with beginners and experienced practitioners alike, and she finds particular joy in working with students who believe “they aren’t flexible enough for yoga.” Under the guidance and encouragement of Terri Cotts, Kay Lynn became a certified yoga teacher in 2006.  Kay Lynn continues her education with Jason Crandell, John Friend, and Shiva Rea.</p> <p>Outside of her yoga life, Kay Lynn is an Associate Professor of Psychology at Columbia Basin College. She shares her world with her husband Shawn, two dogs, two cats, and Stiffler, the retired cutting horse.</p>",robin:"<p>Robin has studied all over the nation and received her teacher training certificate in New Delhi, India with continuing education in the Pattabhi Jois Ashtanga tradition with master teacher Tim Miller. As a former dancer, climber, and outdoor enthusiast she has sustained many injuries that inform her deep awareness and sensitivity of the human body within the yoga context. Robin leads spunky and lighthearted classes often inspired by the Ashtanga sequence and isn’t afraid to bring students to their physical edge. She believes that with modifications, breath, and a sense of humor, all is coming.</p>"},y=[{title:"Guidelines",bodyText:"<p>No one wants to be the buffoon wreaking havoc in a yoga studio with social faux pas, so these are some things we expect from you when you come practice with us:</p> <ul> <li>Turn phones off or to silent upon entering the space</li> <li>Please remove your shoes at the door</li> <li>Please keep most chatting to the back room before class</li> <li>Be respectful of the space and put your props away nicely</li> <li>If you must arrive late, please wait outside until the class is moving</li> <li>If you must leave early, please keep your things in the reception area and leave before savasana</li> </ul>"},{title:"First Class",bodyText:'<p>Please arrive at the studio 5 - 10 minutes before class so we can introduce ourselves to you and have a few minutes to get set up. You can download and <a href="pdf/form.pdf" target"_blank">print the new student form here</a>. Drop ins are welcome however those who have preregistered for class online will have preference. You are welcome to come early (the studio doors open 20 minutes prior to class) to claim your spot, have some tea, and relax. We look forward to having you in class!</p> <p>If you are a brand new student to yoga, please come to Level 1 classes so we can best help you begin your yoga practice.</p>'},{title:"Clothing &amp; Equipment",bodyText:"<p>Wear a pair of shorts, capris, or pants that are stretchy and comfortable. Please wear a shirt and the proper undergarments to avoid distraction. Specific &quot;yoga clothes&quot; are not necessary (but opaque pants are greatly appreciated). Shoes are not allowed in the studio and are to be left at the front desk. Bare feet give you good grip on the mat, therefore we only recommend wearing socks during Restorative Zen and the first half of Yin/Vin classes.</p> <p>Bring a mat! If you don’t have one of your own, we rent high quality, 71&quot; Manduka Black mats for a $3 single class fee and also sell Jade and Manduka mats in the studio. Curious about the mats we sell? We have demos of each...just ask and give them a try!</p>"},{title:"New Student Special",bodyText:'<p>Join us for a solid week of unlimited yoga (really, really unlimited) to check out our teachers, classes, and the community to see if we are the right fit for you. <strong class="italics">The New Student Special is only for - yup, you guessed it - new students to the studio, and is only $25!</strong></p> <p><a href="sign-up.html">Sign up</a> and come check us out today!</p>'}],w=[{name:"Courtney Morgan",title:"ERYT 200",past:"Past: YogaWorks / New York, NY",quote:"<span class='quote'>&quot;Develop the breath, go to the roots, connect with the core. Look inside.&quot;</span><br><span class='quote-author'>- Chuck Miller</span>",info:m.courtney,img:"img/courtney.jpg"},{name:"Chrissy Mueller",title:"RYT 200",past:"Past: The Movement Center / Portland, OR",quote:"<span class='quote'>&quot;Practice with a passionate calm&quot;</span><br><span class='quote-author'>- Erich Schiffman</span>",info:m.chrissy,img:"img/chrissy.jpg"},{name:"Tara",title:"RYT 200, RPYT",past:"Past: Peace Through Yoga / Indianapolis, IN & Blooma / Minneapolis, MN",quote:"<span class='quote'>&quot;Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.&quot;</span><br><span class='quote-author'>-Leo Buscaglia</span>",info:m.tara,img:"img/tara.png"},{name:"Robin Hamilton",title:"ERYT200",past:"Past: Seema Sondhi Yoga Studio / New Delhi, India",quote:"<span class='quote'>&quot;Ninety nine percent practice; one percent theory&quot;</span><br><span class='quote-author'>- Sri K. Pattabhi Jois</span>",info:m.robin,img:"img/robin.jpg"},{name:"Kay Lynn Stevens",title:"RYT2000",past:"Past: Wild Grace Arts Yoga, Olympia, WA.",quote:"<span class='quote'></span>",info:m.kay,img:"img/kay.jpg"}],v=$(".swap-body"),b=[{title:"Overview",description:"<p>Our classes balance precise instruction, alignment with breath, and fluid movement. Classes are carefully themed to deepen the students' experience, understanding, and benefits of yoga both physically and mentally.  A flow of Sun Salutes and postures are skillfully sequenced, and modifications are used to individualize the practice. Each teacher brings their own unique voice to classes, creating a diverse and multi-faceted curriculum for our students.</p> <p>Revolver Yoga signature classes are paced moderately to vigorously depending upon the level. As a beginner, please start with Level 1 and gradually build up to more advanced levels as your practices grows. All signature classes are 75 minutes long.</p>"},{title:"Level 1",description:"<p>Our beginner classes are powerful learning experiences in which you will literally re-discover your body, how it works, and what it can do. All Level 1 classes are designed to give you the time and support to understand the proper alignment of Yoga asanas (postures), language, and breathing technique.</p> <p>You will begin by focusing on the basics, but it won’t stop there. Beginner classes are focused at helping you master form, understand how to breathe, learning how to release tension, and help you build confidence in the postures and experience the wonders of Yoga.</p>"},{title:"Level 1-2",description:"<p>After you feel comfortable with the postures taught in Level 1 classes you will be ready to move to Level 1-2. These more challenging classes continue to emphasize the fundamentals of yoga while presenting the poses and sequencing the class in a more challenging way. In Level 1-2 the teachers love offering new and exciting challenges for their students, while ensuring more difficult positions are practiced safely and effectively.</p>"},{title:"Level 2",description:"<p>Level 2 classes are designed to take you to the intermediate level where you will expand on your strength, stamina and flexibility as you master more advanced postures (inversions, backbends) and more demanding sequences. Level 2 classes will help you take your practice to a whole new level.</p>"},{title:"Level 2-3",description:"<p>Our studio's most physically demanding class for those who love integrating arm balances, big backbends, and strong sequencing into their practice. It is strongly advised that a student has at least two years of solid practice and is familiar and comfortable with the intermediate postures and sun salutations. Some classes will be held &quot;workshop&quot; style with a specific pose we are working towards, while others will be sequenced to integrate many challenging postures together. This class is not appropriate for those newer to yoga practice, no matter your fitness level.</p>"},{title:"Restorative Zen (Level 1)",description:"<p>A super slow and highly relaxing class in which the instructor will guide students into prop-supported restorative postures where techniques such as breath awareness, body scans, meditation, essential oil aromatherapy, yoga nidra, and touchless Reiki may be presented to help aid relaxation and deep physical, psychological, and emotional healing. All levels, including pregnant practitioners, are encouraged.</p> <p>This class limited to 10 students, please sign up online to reserve your place.</p>"},{title:"Yin/Vin (Level 1)",description:"<p>Our Yin/Vin class offers the opportunity to begin your week with 40-45 minutes of Yin Yoga, a meditative, slow-paced and yummy practice in which seated and supine postures are held for 3-5 minutes each. Yin is a wonderful way to access the fascial tissues and ligaments, making it a very effective practice for those with tight hip, pelvic, and low back issues. We juice it up for the second half of class with an accessible vinyasa flow to awaken you to the day!</p>"},{title:"Yin (Level 1)",description:"<p>Yin is a slow, meditative practice appropriate for beginners. We work to open the ligaments and fascial tissues of the hips, spine, and shoulders with postures held for 3 to 5 minutes each. Though it is slow and the postures appear basic, the length of time each asana is held makes this an intense practice that builds mental strength and a deep connection to the breath.</p>"},{title:"Led Primary Series (Level 2)",description:"<p>Based on the Ashtanga system as taught by Pattabhi Jois, the Ashtanga practice is a set routine of asanas (postures). The practice begins with sun salutations A and B and moves through standing postures to prepare the body for seated postures and arm balances with vinyasas between each asana. A very well-balanced practice that moves quickly, we recommend a solid understanding of the sun salutations and most standing asanas and a hearty appetite for a challenging, systematic practice. 1hr 45 minutes.</p>"},{title:"Prenatal Yoga (Level 1)",description:"<p>Pregnancy creates a lot of challenges for the body and prenatal yoga can help you feel more fit, comfortable and relaxed during pregnancy.  Revolver prenatal yoga focuses on breathing, deep focus, and safe sequences which can help work out the daily kinks as well as ease labor and delivery. Yoga can also help you improve sleep, reduce stress, and create a mommy community during and after pregnancy.</p> <p>This class is taught in six-week sessions. If you or a friend are interested in prenatal yoga, please email info@revolveryoga.com to let us know!</p>"},{title:"Gentle Yoga (Level 1)",description:"<p>Designed for those with orthopedic injuries (old or new) who need less intensity and more specific stretchy and gentle strengthening goodness! This easy to follow class provides plenty of time for modifications making postures accessible and a great choice for seniors, pregnant women or anyone looking to develop a yoga practice in a slower, supported way. May include breath work and guided meditation. 60 minutes.</p>"}],k=$(".state-indicator"),C=$(".loading-logo"),T=$(".menu-btn"),q=$("nav ul"),Y=$(".dark-filter"),x=$("nav ul a");setTimeout(function(){r.css("opacity",1)},100),600>o&&$(".sign-up-btn").click(function(e){e.preventDefault();var t="https://clients.mindbodyonline.com/classic/home?studioid=43881";document.location.href=t}),$("nav a").click(function(t){var a=$(this).attr("href"),s=$("nav").find(".active-nav-link");("schedule.html"===a||"sign-up.html"===a)&&(console.log(o),600>o&&(a="https://clients.mindbodyonline.com/classic/home?studioid=43881")),t.preventDefault(),$(this).hasClass("active-nav-link")||(e(),r.css("opacity",0),s.removeClass("active-nav-link"),$(this).not(".homeLink, .std-btn, .social-icon").addClass("active-nav-link"),setTimeout(function(){document.location.href=a},1200))}),$(".sign-up-btn").click(function(t){t.preventDefault();var a=$(this).attr("href");e(),r.css("opacity",0),setTimeout(function(){document.location.href=a},1200)}),h.css("left",(g-f)/2+"px"),u.css("left",(g-f)/2-3+"px"),c.click(function(){d.hasClass("active-plug")?(d.toggleClass("active-plug"),h.toggleClass("scale-pic"),u.toggleClass("add-border"),setTimeout(function(){d.toggleClass("display"),d.toggleClass("slide-up")},300)):(d.toggleClass("slide-up"),d.toggleClass("active-plug"),d.toggleClass("display"),setTimeout(function(){h.toggleClass("scale-pic")},800),setTimeout(function(){u.toggleClass("add-border")},1500))}),p.click(function(){d.toggleClass("active-plug"),h.toggleClass("scale-pic"),u.toggleClass("add-border"),setTimeout(function(){d.toggleClass("display"),d.toggleClass("slide-up")},300)}),$(".content-swap li").click(function(){var t=$(this),a,i,n,o;if(t.parent("ul").parent().hasClass("new-student-list")&&(console.log("this is the new student section"),o=t.parent().find(".active-section"),n=!0),$(".content-swap").hasClass("new-student-list")&&(a="new-students"),$(".content-swap").hasClass("instructor-list")&&(a="instructors"),t.hasClass("courtney")&&(i=0),t.hasClass("chrissy")&&(i=1),t.hasClass("tara")&&(i=2),t.hasClass("robin")&&(i=3),t.hasClass("kay")&&(i=4),t.hasClass("guidelines-link")&&(i=0),t.hasClass("f-c-link")&&(i=1),t.hasClass("c-e-link")&&(i=2),t.hasClass("n-s-s-link")&&(i=3),t.find(".ring").hasClass("active-swap-icon")||t.find(".category").hasClass("active-section"));else{var r;t.hasClass("instructor-item")?(console.log("new instructor"),r=$(".content-swap").find(".ring"),r.removeClass("active-swap-icon"),t.find(".ring").addClass("active-swap-icon")):(r=$(".content-swap").find(".active-section"),r.removeClass("active-section"),t.find(".category").addClass("active-section")),v.css("opacity",0),e(),setTimeout(function(){s(i,a)},400),setTimeout(function(){v.css("opacity",1)},450)}}),$("#accordion").find(".acc-category li").click(function(){var e=$(this).parents("li").find(".acc-category"),t=$(this).attr("target"),a=$(this).parents("li").find(".class-content");if(e.hasClass("active-category")){var s=$(this).siblings(".active-class");$(this).hasClass("active-class")||(s.removeClass("active-class"),n(a,t),$(this).addClass("active-class"))}else n(a,t),e.addClass("active-category"),$(this).addClass("active-class"),$(this).parents("li").find(".class-content").slideToggle("slow"),e.find(k).addClass("toggle-indicator")}),k.click(function(){var e=$(this).parents("li"),t=e.find(".class-content");if($(this).hasClass("toggle-indicator"))$(this).removeClass("toggle-indicator"),$(this).parents("li").find(".active-class").removeClass("active-class"),$(this).parents("li").find(".active-category").removeClass("active-category"),e.find(".class-content").slideToggle("slow");else{var a=e.find("ul.row").find("li").first();e.find(".acc-category").addClass("active-category"),e.find(".class-content").slideToggle("slow"),$(this).addClass("toggle-indicator");var s=a.attr("target");n(t,s),e.find("ul.row").find("li").first().addClass("active-class")}}),$("#accordion > li").each(function(){$(this).hasClass("extended")||($(this).find(".class-content").slideUp(0),$(this).toggleClass("collapse"))});var S;S=800>o?!0:!1,$(window).resize(function(){var e=$("nav ul"),t=$(".dark-filter"),a=$(window).width(),s=function(){var t=!1;return function(){t||(t=!0,e.slideUp(0))}}();return 800>a?e.slideUp(0):(e.slideDown(0),t.removeClass("active-filter")),S}),S&&(q.slideUp(0),x.click(function(){setTimeout(function(){q.slideUp(500)},500)}),T.click(function(){q.slideToggle(500),setTimeout(function(){Y.toggleClass("active-filter")},500)})),S&&$(".sign-up-btn").click(function(e){e.preventDefault();var t="https://clients.mindbodyonline.com/classic/home?studioid=43881";document.location.href=t})});