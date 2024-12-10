const hamburger = document.querySelector('.header_hamburger');
const mobileMenu = document.querySelector('.container_calc_list')

const texasInstruments = document.querySelectorAll('.ti');
const hewlettPackard = document.querySelectorAll('.hp');
const brandImage = document.querySelector('.brand_image');

const calculatorDescription = document.querySelector('.container_calc_text');

const calculatorImages = document.querySelectorAll('.container_calc_pictures_img');



const brandState = {
    logo: 'undefined',
    model: 'undefined'
}

function showMenu() {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

function logoOpacity100() {
    brandImage.style.opacity = '1';
}

function switchLogo() {
    const currentLogoState = brandState.logo;

    switch(currentLogoState) {
        case 'TI':
            brandImage.src = './src/texas-instruments-logo-300x100.png';
            brandImage.alt = 'Texas Instruments';
            break;
        case 'HP':
            brandImage.src = './src/hewlett-packard-logo-300x100.png';
            brandImage.alt = 'Hewlett Packard';
            break;
    }
}

function textImageOpacity100() {
    document.querySelectorAll(".text").forEach((item) => {
        item.style.transition = "0.3s";
        item.style.opacity = "1";
    });
    calculatorImages.forEach((item) => {
        item.style.opacity = '1';
    })
}

///////////////////////////////////////////////////
const ti108 = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">TI-108 Elementary Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Every story has their beginning, and for many of us, this calculator is the start of our journey into math.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'I first used this calculator way back in elementary school, and thought it was fantastic. These calculators sell in batches of ' +
    'ten and are distributed in a yellow carrying case. Looking back into my childhood memories, I specifically remember the blue rectangular ' +
    'body, the colored buttons, and the large equal button. I could not remember the brand or the model, so I searched online and found this ' +
    'calculator using the keywords \"calculator\", \"blue\", \"rectangle\", and \"elementary\". Suffice it to say, this calculator ' +
    'brings back memories of a simpler childhood, a simpler life, and a simpler level of math to learn.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The operators are very simple: addition, subtraction, multiplication, and division. It can also manage percentages and square roots. ' +
    'While there is no dedicated button for squaring a number, you could do so with a little trick. Just press the buttons: \"3 * =\" and 3 ' +
    'will be squared to 9. This is a feature that a lot of websites don\'t include in their calculator emulators. However, squaring has ' +
    'its limits. If you were to take the square root of 2, then square that number, you would end up with: \"1.999998\". ' +
    'That\'s right, it is not clever enough to resolve the square root of two, squared back into two.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The TI-108 does its job as being a child\'s very first calculator. It is tough, durable, and calculates well enough as an introductory ' +
    'tool for kids to first learn how to use a calculator.' +
    '<br></p>'

const ti30xiis = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">TI-30X<i>IIS</i> Scientific Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Eventually, our mathematical pursuits move beyond the basic calculations and become more complex. Scientific calculators are ' +
    'a classification of calculators that can perform algebraic, trigonometric, and geometric functions.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'For a calculator to be of the category "Scientific", it does not need to show data in scientific notation, and it does not need ' +
    'to respect the order of operations. Scientific calculators are simply more complex than their basic calculator brethren.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The TI-<b>30X</b><i>IIS</i> is what got me through algebra and basic trigonometry. I remember the heavy use of SIN, COS, and TAN ' +
    'to solve triangular angles and side measurements. While I also appreciated the ability to wrap math functions in ' +
    'parentheses, ( and ), they simply were not utilized for the math work I was doing. I also remember using π alot, so seeing this ' +
    'symbol again brings back some good memories of circles and spheres. ' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'When I thought that I had finished using this calculator, shelving it for good, there suddenly became a need to use it again. ' +
    'In college, I needed to take a chemistry class, and the only approved calculator was the TI-<b>30X</b><i>IIS</i>. This rather shocked ' +
    'me, that this calculator was so flexible that even chemists could continue using it in their education and profession.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'I would have been fine with never using the calculator again, so having to take it out of its case one last time for one more class ' +
    'was quite fun.</p>'

const ti36XPro = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">TI-36X Pro</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Moving out of middle school and into high school, the TI-<b>36X Pro</b> becomes the calculator where you know that your math work ' +
    'is going to be something special. This is one of two calculators that got me through the remainder of high school, the other being the ' +
    'TI-83 Plus. If you have never used this calculator before, think of the mathematical power of the TI-83 Plus graphing calculator, then, ' +
    'imagine that you remove the ability to have the calculator draw graphs. That is what this calculator is capable of.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'This is one of the most advanced scientific calculators you can get before advancing into the graphing calculators, because the display ' +
    'no longer uses a seven-segment display to show numbers. This is dot-matrix display, a whole different level of displaying numbers ' +
    'and text. This means that when using this calculator, text appears like text and numbers have a different style of sharpness and ' +
    'design that a classic seven-segment display simply is not capable of.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The reason my high school required this calculator is to prevent cheating on tests. There is no way of storing letters or connecting ' +
    'this calculator to a computer, unlike the bigger graphing calculators, so it was more trusted to use during tests.' +
    '<br><p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'For whatever reason, the strongest memory I have with this calculator is when I saw another student using it, ' +
    'and thought it looked really cool compared to the calculator I was using. I had no idea just how useful it is, and how ' +
    'it can solve much higher levels of math than what I was taking.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'If needed, this calculator could last through calculus, with functions to solve derivates and integral calculus equations. ' +
    'If I never stopped using the 36X Pro, and had it as my most advanced scientific calculator, then I\'d be content and ignorant of the other ' +
    'amazing scientific calculators from HP.</p>'

const ti83Plus = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">TI-83 Plus Graphing Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'This calculator is what I imagine most people my age remembers. Perhaps it is something that you remember seeing as well and being forced to use ' +
    'in school. This is the original graphing calculator before the abundance and might of the TI-84 series.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Here, we get into the category of \"Graphing Calculators\". These machines were quite a beast when my class was first introduced to them. ' +
    'When your only experience of pocket calculators has been the TI-<b>30X</b><i>IIS</i> or TI-<b>36X Pro</b>, then this calculator makes ' +
    'quite an introduction with its size. That is a massive dot-matrix display that was capable of drawing graphs right on the screen. ' +
    'I\'m old enough where modern day cell phones did not exist. Other students traded home phone numbers rather than cell numbers because ' +
    'that was our only way of communicating back then. This kind of tech was astonishing for its time; I could write a SIN function, ' +
    'have a selectable area be less than the plotted graph, and see the large screen draw everything. I was amazed.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The other thing I remember this calculator for is being our first pocket computers. Link cables existed that allowed calculators to ' +
    'transfer data between each other, written in the programming language TI_BASIC. This was intended to be used to make interactive ' +
    'math programs, but as kids, we used it for transferring launchers, where these launchers would have games inside of them. ' +
    'Our calculators were the first times that we could bring video games into the classroom and spend our time gaming on calculators ' +
    'rather than paying attention to the professor. This then created a new rule for my high school. Graphing calculators would only be ' +
    'permitted in the classroom when the professor gave us instructions to do so. If your graphing calculator was on your desk before ' +
    'the professor permitted it, then they would take it from you.</p>'

const ti84PlusCE = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">TI-84 Plus Color Edition Graphing Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The 84 series of graphing calculators have been one of the most interesting lines of technology to follow. The 84 series have many different ' +
    'kinds of calculators, which the color edition is the one that I picked, missing out on the former TI-84 Plus.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The TI-84 Plus CE introduced us to having many colors..... on the body of the calculator. Today, if interested, they can be picked up in ' +
    'black, blue, white, gray, purple, coral, mint, red, rose gold and teal. The gray model is the one I got, as I rather like the shade much ' +
    'more than the other colors.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The other colorful feature of the Color Edition is the colored screen. Previously, when making graphs, the plotted lines could only ' +
    'appear as solid, dash, or dotted lines to differentiate. Shading would also be done by making a series of horizontal lines and ' +
    'vertical lines with gaps in between them so that the overlap produces a darker shade. Now, with this calculator, actual color ' +
    'separation can happen on the line or in the shaded area greater-than or less-than the plotted line.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'I picked up this calculator when getting into college. I knew that I wanted to have a calculator that could get me through all ' +
    'the math courses I would need to take and decided to purchase the TI-84 Plus CE. The math courses that I took leading up ' +
    'to calculus utilized this calculator a lot. However, this is when I would take a huge shift and start investing into HP calculators, ' +
    'when I started to become obsessed with math and numbers. Writing and solving math problems in a new way of thinking.</p>'

const hpPrime = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">HP Prime Graphing Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Of all the different graphing calculators that show coordinate planes and plot graphs, this one is my favorite.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The HP Prime is my second HP calculator. Hewlett Packard is not new to the calculator market, originally developing pocket ' +
    'calculators intended to be used by professionals and engineers since 1972 with the HP-35. In comparison to the TI-83 and TI-84 ' +
    'calculators, the HP Prime is a monster with how useful and powerful it is. It only comes in one color, black and gray, ' +
    ' matching HP\'s previous calculator designs of the \"10C\" series from the 1980\'s.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'When powering on this beast, you are open right into a basic calculation screen, as you would expect from a normal calculator. ' +
    'Solving basic math problems is nice and easy, but when graphing is needed, there are options. HP includes several graphing ' +
    'apps inside the calculator, to specify what kind of math equations and graphs you want to use and appear. This is important because some graphs ' +
    'that may need to be generated are in 3D. That\'s right, 3D plots can be made and rotated by using a finger on the touch screen.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;"> ' +
    'The design of the calculator\'s gesture input is based around cell phones. Rotation, sliding, and pinch-to-zoom all work as gestures on the ' +
    'touch screen. The setting menu also provides different ways to display the time, allows for color customization in the screen, and, ' +
    'very much ahead of its time, there is also a dark mode that can be enabled if a white background with black text is not desired. Last, ' +
    'math problems can be solved in different styles, not just infix notation written in a textbook style. Math problems can also ' +
    'be entered using Reverse Polish Notation, and Algebraic styling.</p>'

const hp15c = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s">HP 15C Limited Edition ' +
    'Programmable Scientific Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Sometimes, when you are at home, you just feel the need to solve some difficult math problems. This is where my 15C comes in. ' +
    'This is my favorite calculator to use for fun.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'When I learned about Reverse Polish Notation (RPN), I became a bit obsessed. I learned of this style of mathematical problem-' +
    'solving, and wanted to use an old-fashioned calculator that is made to use RPN. Of the 10C series of calculators, the only one ' +
    'remaining that may still be sold today is the 12C financial calculator. For a short time, the 15C had a revival as a short-run ' +
    'upgraded release. The Limited Edition and the original are very expensive because they are discontinued and considered collectables. ' +
    'Finding one nowadays in good condition will cost a lot.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Reverse Polish Notation is a way of writing and solving math problems without needing to infer an order of operations. Using ' +
    'infix notation, if I were to show the math problem: \"1 + 2 * 3\", then the expectation is that multiplication takes priority over ' +
    'addition, so 2 * 3 is solved first, the product being 6, and the sum of 6 and 1 is 7. Pretty easy.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'In RPM, the same problem would be written as: \"1 2 3 * +\". With the R in RPN meaning Reverse, we solve backwards, right-to-left ' +
    'with our numbers, and left-to-right with our operators. The numbers 1, 2, then 3, are added to a stack, then we multiply ' +
    '3 and 2, which immediately provides the product of 6, and sum with 1 to make 7. To solve on this calculator, the keys pressed ' +
    'are: \"1 ENTER 2 ENTER 3 * +\". There is no need to have an equals button with this style of mathematical problem-solving.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The other unique feature of the 15C is that it is programmable. Functions can be written and stored in the calculator. Therefore, ' +
    'a function to solve for a spherical volume can be entered, where a number can be provided as an argument to the function, so multiple ' +
    'spherical volumes can be found by providing different lengths of a radius when invoking the calculator function.</p>'

const hp35s = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s;">HP 35s Programmable Scientific Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Work needs to get done, and your pocket calculator better be up to the task of being a professional tool for professional work. ' +
    'This is why I like the HP 35s. It is my favorite calculator for work.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The 35s is a remake of the original HP35, Hewlett Packard\'s first pocket calculator. The calculator uses a traditional LCD to show ' +
    'numbers, instead of red LEDs that were in the older 35, which drained batteries very quickly. This calculator is also designed to be ' +
    'an RPN calculator first. While there is a way to activate infix notation, I would not recommend using it due to the very apparant display ' +
    'issues that happen. The 35s is vertically minded, seeing the current numbers in a call stack, where infix is horizontally minded.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'This is one of the preferred calculators to use for engineering tests. This is because unlike graphing calculators, there is no memory to store ' +
    'letters, and no computer or other device that it can connect to. This is also a programmable calculator, so during math and engineering ' +
    'tests, functions can be programmed into the calculator during the test and used repeatedly to solve problems. Like the 15C, functions can ' +
    'be made to accept a number as an argument so that if multiple questions need the same function, but different values, then they can ' +
    'be solved quickly by programming it once and solving for multiple values.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The reason I purchased this calculator was to get the most recent and available RPN calculator that HP sells. For the math work that ' +
    'I do, it works perfectly fine. There are limitations to this calculator, such as not being designed to support matrices or complex ' +
    'linear systems. This is a fine tradeoff for my use of a calculator, but as I dive more into the field of computer science, I ' +
    'may need to use a calculator that can solve these kinds of problems.</p>'

const tiNSpire = '<h4 class="text" style="font-size: 2rem; opacity: 0; transition: 0.3s">TI-n<b>spire</b> CX II Graphing Calculator</h4>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'This calculator is something different. I got it to satisfy my curiosity, to see if the TI-n<b>spire</b> CX II would be the ' +
    'ultimate calculator. It certainly has the appearance of one, with a full-sized keyboard on the bottom of the calculator, and what looks ' +
    'like some very impressive graphical plotting and control.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Problems immediately show up right when powering on. The calculator does not open a screen which math problems can be solved. ' +
    'Instead, it opens a file manager that wants to have a new document created. This takes additional steps just to get to a screen ' +
    'that will allow math problems to be solved. The TI-n<b>spire</b> CX II is designed around the creation and saving of documents over ' +
    'performing calculations.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'Navigation is also a bit different too. The large navigation pad under the screen is touch sensitive. Moving a finger across this pad ' +
    'displays a mouse cursor that is stated to track movement like a laptop trackpad. However, I found the touchpad to be very lacking ' +
    'and not tracking finger movements well. The math operation buttons on the left and right side of the number pad, are rocking style ' +
    'buttons, which feel very cramped. This leaves an impression on me that there are simply too many buttons to make the calculator ' +
    'comfortable to use.' +
    '<br></p>' +
    '<p class="text" style="opacity: 0; transition: 0.3s; padding-top: 1rem; text-indent: 2rem; font-size: 20px;">' +
    'The structure of the common calculator document has files named \"problems\", that have multiple pages to define the problem and show graphs. ' +
    'There can be four different graphs that can appear at once. This is useful if being a student, where an assignment or homework is ' +
    'intended to be viewed, edited, and saved on the calculator itself. Essentially, creating a closer approximation of a pocket computer ' +
    'than other calculators. However, I find the use of documents to take away from the experience of solving math problems quickly and ' +
    'efficiently. This is a calculator for documents, which slows down the user experience in solving problems.</p>'
///////////////////////////////////////////////////

function changeSources() {
    const currentState = brandState.model;

    switch (currentState) {
        case 'TI-108':
            calculatorDescription.innerHTML = ti108;
            calculatorImages[0].src = './src/ti108-188x250.png';
            calculatorImages[1].src = './src/ti108-188x250-2.png';
            break
        case 'TI-30XIIS':
            calculatorDescription.innerHTML = ti30xiis;
            calculatorImages[0].src = './src/ti30xiis-188x250.png';
            calculatorImages[1].src = './src/ti30xiis-188x250-2.png';
            break
        case 'TI-36X Pro':
            calculatorDescription.innerHTML = ti36XPro;
            calculatorImages[0].src = './src/ti36xpro-188x250.png';
            calculatorImages[1].src = './src/ti36xpro-188x250-2.png';
            break
        case 'TI-83 Plus':
            calculatorDescription.innerHTML = ti83Plus;
            calculatorImages[0].src = './src/ti83plus-188x250.png';
            calculatorImages[1].src = './src/ti83plus-188x250-2.png';
            break
        case 'TI-84 Plus CE':
            calculatorDescription.innerHTML = ti84PlusCE;
            calculatorImages[0].src = './src/ti84plusce-188x250.png';
            calculatorImages[1].src = './src/ti84plusce-188x250-2.png';
            break
        case 'HP Prime':
            calculatorDescription.innerHTML = hpPrime;
            calculatorImages[0].src = './src/hpprime.png';
            calculatorImages[1].src = './src/hpprime-2.png';

            break
        case 'HP 15C Limited Edition':
            calculatorDescription.innerHTML = hp15c;
            calculatorImages[0].src = './src/hp15c.png';
            calculatorImages[1].src = './src/hp15c-2.png';
            break
        case 'HP 35s':
            calculatorDescription.innerHTML = hp35s;
            calculatorImages[0].src = './src/hp35s.png';
            calculatorImages[1].src = './src/hp35s-2.png';
            break
        case 'TI-nspire CX II':
            calculatorDescription.innerHTML = tiNSpire;
            calculatorImages[0].src = './src/tinspirecxiicas-188x250.png';
            calculatorImages[1].src = './src/tinspirecxiicas-188x250-2.png';
            break;
    }
}

function changeModel() {
    setTimeout(changeSources, 300);
    setTimeout(textImageOpacity100, 315);
}

function changeTextAndImages(item) {
    if (brandState.model !== item) {
        brandState.model = item;
        calculatorImages.forEach((item) => {
            item.style.opacity = '0';
        })
        document.querySelectorAll(".text").forEach((item) => {
            item.style.opacity = "0";
        });
        changeModel();
    }
}
function switchBrandTI(item) {
    if (brandState.logo !== 'TI') {
        brandState.logo = 'TI';
        brandImage.style.opacity = '0';
        setTimeout(switchLogo, 300);
        setTimeout(logoOpacity100, 300);
    }
    changeTextAndImages(item);
    closeMenu();
}

function switchBrandHP(item) {
    if (brandState.logo !== 'HP') {
        brandState.logo = 'HP';
        brandImage.style.opacity = '0';
        setTimeout(switchLogo, 300);
        setTimeout(logoOpacity100, 300);
    }
    changeTextAndImages(item);
    closeMenu();
}

hamburger.addEventListener('click', showMenu);

texasInstruments.forEach((item) => {
    item.addEventListener('click', () => {
        switchBrandTI(item.innerText);
    });
});

hewlettPackard.forEach((item) => {
    item.addEventListener('click', () => {
        switchBrandHP(item.innerText);
    });
});



/* Very old code that should not be used, but learned from

hewlettPackard.forEach(function (item) {
    item.addEventListener("click", function (item) {
        switchBrandHP(item.target.innerText);
        // switchBrandHP(item);
    });
});

const testText = '<h4>The calculator</h4>' +
    '<p>Here is a paragraph about the calculator.</p>'

console.log(item.target.innerText);

*/

/*

    function changeDescriptionText() {
        const currentState = brandState.model;

        if (currentState.includes("TI-108")) {
            calculatorDescription.innerHTML = ti108;
        } else if (currentState.includes("IIS") ||
            currentState.includes("30X")) {
                calculatorDescription.innerHTML = ti30xiis;
        } else if (currentState.includes("36X Pro")) {
            calculatorDescription.innerHTML = ti36XPro;
        } else if (currentState.includes("TI-83 Plus")) {
            calculatorDescription.innerHTML = ti83Plus;
        } else if (currentState.includes("Plus CE")) {
            calculatorDescription.innerHTML = ti84PlusCE;
        } else if (currentState.includes("HP Prime")) {
            calculatorDescription.innerHTML = hpPrime;
        } else if (currentState.includes("Limited Edition")) {
            calculatorDescription.innerHTML = hp15c;
        } else if (currentState.includes("HP 35s")) {
            calculatorDescription.innerHTML = hp35s;
        } else if (currentState.includes("CX II") ||
            currentState.includes("spire") ||
            currentState === "n") {
                calculatorDescription.innerHTML = tiNSpire;
        }
    }
 */
