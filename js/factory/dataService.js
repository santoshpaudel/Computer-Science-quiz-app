//create a factory for questions and facts that can be used by different controllers
//immediately invoking function
(function () {
    angular
  .module("cscFacts")
  .factory("dataService", DataService);

    function DataService() {

        var DataObj = {
            factData:factData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return DataObj;
    }
 
    //indices of correct answers
    var correctAnswers=[2,0,2,0,1,2,3,3,1,2];
    //JSON data for questions and possible answer options
    var quizQuestions = [
       {
           type: "text",
           text: "A Database is used to store and organize:",
           possibilities: [
    {
        answer: "papers"
    },
                {
                    answer: "records in fields"
                },
                {
                    answer: "records in files"
                },
                {
                    answer: "All of the above"
}
],
selected: null,
correct: null
},
{
    type: "text",
    text: "What type of software is a Operating System?",
    possibilities: [
        {
            answer: "System Software"
    },
{
answer: "Antivirus"
},
{
    answer: "Utility Software"
},
{
answer: "Application Software"
}
],
selected: null,
    correct: null
},
{
    type: "image",
    text: "Brendan Eich created?",
    possibilities: [
        {
            answer: "https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png"
},
{
answer: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300"
},
{
    answer: "https://www.javatpoint.com/images/javascript/javascript_logo.png"
},
{
answer: "http://kmit.in/emagazine/wp-content/uploads/2015/07/python-logo.png"
}
],
selected: null,
    correct: null
},
{
    type: "image",
    text: "James Gosling is inventor of?",
    possibilities: [
        {
            answer: "https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png"
},
{
answer: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300"
},
{
    answer: "https://www.javatpoint.com/images/javascript/javascript_logo.png"
},
{
answer: "http://kmit.in/emagazine/wp-content/uploads/2015/07/python-logo.png"
}
],
selected: null,
    correct: null
},
{
    type: "text",
    text: "WWW stands for?",
        possibilities: [
    {
        answer: "World Wide WAN"
    },
{
answer: "World Wide WEB"
},
{
    answer: "World Wide Window"
},
{
answer: "All of the above"
}
],
selected: null,
    correct: null
},
{
    type: "text",
    text: "Which of the following are extensions of graphics files?",
    possibilities: [
        {
            answer: ".TXT"
        },
        {
            answer: ".EXE"
        },
        {
            answer: ".PNG"
    },
{
answer: "All of the above"
}
],
selected: null,
    correct: null
},
{
    type: "text",
    text: "GUI is short form of?",
    possibilities: [
        {
            answer: "Greater User Interface"
    },
{
answer: "Graphic Utility Interface"
},
{
    answer: "Greater Utility Interface"
},
{
answer: "Graphical User Interface"
}
],
selected: null,
    correct: null
},
{
    type: "image",
    text: "Guido van Rossum introduced?",
    possibilities: [
        {
            answer: "https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png"
},
{
answer: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300"
},
{
    answer: "https://www.javatpoint.com/images/javascript/javascript_logo.png"
},
{
answer: "http://kmit.in/emagazine/wp-content/uploads/2015/07/python-logo.png"
}
],
selected: null,
    correct: null

},
{
    type: "text",
    text: "RAM stands for",
        possibilities: [
    {
        answer: "Random Action Memory"
    },
{
answer: "Random Access Memory"
},
{
    answer: "Random All Memory"
},
{
answer: "Random Authority Memory"
}
],
selected: null,
    correct: null
},
{
    type: "text",
    text: "ROM stands for?",
        possibilities: [
    {
        answer: "Random Only Memory"
    },
{
answer: "Random Object Memory"
},
{
    answer: "Read Only Memory"
},
{
answer: "Read Object Memory"
}
],
selected: null,
    correct: null
}
];

//JSON for fact sheets

    var factData = [


        {
            topic: "Databse",
            image_url: "http://www.dbta.com/Images/Default.aspx?ImageID=17412",
            description: "A database is an organized collection of data.[1] A relational database, more restrictively, is a collection of schemas, tables, queries, reports, views, and other elements. Database designers typically organize the data to model aspects of reality in a way that supports processes requiring information, such as (for example) modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.",
            link: "https://en.wikipedia.org/wiki/Database"

        },
        {
            topic: "Operating System",
            image_url: "https://www.computerhope.com/issues/pictures/operating-system-install.jpg",
            description: "An operating system (OS) is system software that manages computer hardware and software resources and provides common services for computer programs. Time-sharing operating systems schedule tasks for efficient use of the system and may also include accounting software for cost allocation of processor time, mass storage, printing, and other resources.",
            link: "https://en.wikipedia.org/wiki/Operating_system"
        },
         {
             topic: "Python",
             image_url: "http://kmit.in/emagazine/wp-content/uploads/2015/07/python-logo.png",
             description: "Python is a general-purpose interpreted, interactive, object-oriented, and high-level programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License (GPL). This tutorial gives enough understanding on Python programming language.",
             link: "https://www.tutorialspoint.com/python/index.htm"
         },
         {
             topic: "JavaScript",
             image_url: "https://www.javatpoint.com/images/javascript/javascript_logo.png",
             description: "JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language",
             link: "https://www.w3schools.com/js/"
         },
          {
              topic: "Java",
              image_url: "https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png",
              description: "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible",
              link: "https://www.tutorialspoint.com/java/index.htm"
          },
           {
               topic: "HTML",
               image_url: "https://lh3.googleusercontent.com/zwwddqxgFlP14DlucvBV52RUMA-cV3vRvmjf-iWqxuVhYVmB-l8XN9NDirb0687DSw=w300",
               description: "HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags",
               link: "https://www.w3schools.com/html/html_intro.asp"
           },
    {
        topic: "WWW",
        image_url: "https://communitysense.files.wordpress.com/2014/03/world-wide-web.jpg",
        description: "The World Wide Web is an information space where documents and other web resources are identified by Uniform Resource Locators, interlinked by hypertext links, and can be accessed via the Internet",
        link: "https://en.wikipedia.org/wiki/World_Wide_Web"
    },
       {
           topic: "File Extensions",
           image_url: "https://tech2040.wikispaces.com/file/view/docschart.png/304191264/426x237/docschart.png",
           description: "A file extension or file name extension is the ending of a file that helps identify the type of file in operating systems, such as Microsoft Windows. In Microsoft Windows, the file name extension is a period that is often followed by three characters, but may also be one, two, or four characters long.",
           link: "https://www.computerhope.com/jargon/f/fileext.htm"
       },
       {
           topic: "GUI",
           image_url: "https://www.javatpoint.com/fullformpages/images/gui.png",
           description: "A GUI (usually pronounced GOO-ee) is a graphical (rather than purely textual) user interface to a computer. As you read this, you are looking at the GUI or graphical user interface of your particular Web browser. The term came into existence because the first interactive user interfaces to computers were not graphical; they were text-and-keyboard oriented and usually consisted of commands you had to remember and computer responses that were infamously brief. The command interface of the DOS operating system (which you can still get to from your Windows operating system) is an example of the typical user-computer interface before GUIs arrived.",
           link: "https://en.wikipedia.org/wiki/Graphical_user_interface"
       },
       {
           topic: "Memory",
           image_url: "https://www.computerhope.com/cdn/computer-memory.jpg",
           description: "Computer memory is any physical device capable of storing information temporarily or permanently. For example, Random Access Memory (RAM), is a volatile memory that stores information on an integrated circuit used by the operating system, software, and hardware.",
           link: "https://www.computerhope.com/jargon/m/memory.htm"
       },

    ];
   
})();