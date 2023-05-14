//change Color-theme 

function GreenTheme() {
    const element1 = document.getElementById("green");
    element1.classList.add("green-1");

    const element2 = document.getElementById("1");
    element2.classList.add("green-1");

    const element3 = document.getElementById("2");
    element3.classList.add("green-1");
    
    const element4 = document.getElementById("3");
    element4.classList.add("green-1");
   
    const element5 = document.getElementById("4");
    element5.classList.add("green-1");
    
  }
  
 
  function PurpleTheme() {
   
    const element1 = document.getElementById("green");
    element1.classList.remove("green-1");

    const element2 = document.getElementById("1");
    element2.classList.remove("green-1");


    const element3 = document.getElementById("2");
    element3.classList.remove("green-1");

    const element4 = document.getElementById("3");
    element4.classList.remove("green-1");

    const element5 = document.getElementById("4");
    element5.classList.remove("green-1");
  }
  




document.getElementById("green-button").addEventListener("click", GreenTheme);
document.getElementById("purple-button").addEventListener("click", PurpleTheme);



////////////////////////////////////

//display cards
var imageUrls = [
    "./assets/images/1.png",
    "./assets/images/2.png",
    "./assets/images/3.png",
    "./assets/images/4.png",
    "./assets/images/5.png",
    "./assets/images/6.png",
  ];

  var divIds = ["div1", "div2", "div3", "div4", "div5", "div6"];


  var items =
  [

{


id:1,
title: "الأكثر تنويعاً",
text:"تمكنك دراية من الاستثمار في أكثر من 60 منتج استثماري من 10 مدراء مختلفين. هذه المنتجات تستثمر في كافة الفئات الاستثمارية (كالأسهم، والصكوك، والمرابحة...إلخ) والأسواق كما يمكنك التداول في ما يزيد عن 1,200 من صناديق المؤشرات المتداولة ETF",
button:"Read More",


},


{


  id:2,
  title: "الأكثر راحة",
  text:"لن تحتاج إلى فتح حسابات متعددة؛ أو حفظ أسماء دخول مختلفة لأن دراية تتيح لك الاستثمار في كافة المنتجات الاستثمارية من مكان واحد، بل أصبح بإمكانك متابعة كل استثماراتك وإدارتها عبر موقع واحد وحساب واحد.",
  button:"Read More",
  
},


{

  id:3,
  title: "الأفضل مشورة",
  text:"بالإضافة إلى استقلاليتنا في دراية، فقد طورنا العديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل.",
  button:"Read More",

},

{

  id:4,
  title: "الأكثر استقلالية",
  text:"راية تركز على جمع كافة المنتجات الاستثمارية تحت سقف واحد بدلأ من التركيز على بيع منتجات بعينها، الأمر الذي يعطيها قدر أكبر من الاستقلالية والحيادية في تعاملها ومشورتها.",
  button:"Read More",
},

{


  id:5,
  title: "الأكثر شفافية",
  text:"أصبح من السهل عليك المقارنة بين المنتجات التي تقدمها دراية من خلال حساب موحد بشكل شفاف لانتقاء الأفضل من بينها.",
  button:"Read More",
},

{
  
id:6,
title: "وبلا تكلفة إضافية",
text:"كافة المنتجات الاستثمارية متاحة بنفس التكلفة المتاحة عند الاستثمار مع الجهة الاستثمارية مباشرة (أي بدون أي رسوم إضافية).",
button:"Read More",
},

  ];
  var original_text ="";
  var trimmed_text ="";
  var remaining_text="";

   var popup = document.createElement("div");
  popup.className="popup"
  var parent_div_text = document.createElement("div");
  parent_div_text.className= "parent_text";

  var poptext = document.createElement("span");
  poptext.className="popuptext";

 // popup.style= "display:none";
  //popup.classList.toggle("show");

      
  
      
  

     
   
    

  

 

  
function create_card(item, imageUrl) {
    // Create the card div

    

    var parentdiv = document.createElement("div");
    parentdiv.className="col-md-4 final"

    var card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data', item.text);
  
    // Create an image element
    var image = document.createElement("img");
    image.src = imageUrl;
    image.className = "card-img-top img-fluid text-align-end";
    image.style = "width: 50px; height: 50px;"

    // Create card body
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    // Create card title
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = item.title;
  
    // Create card text
    var cardText = document.createElement("p");
    cardText.className = "card-text";

    var length_text =item.text.length;
    if(length_text>120){

      trimmed_text = item.text.substring(0,120);
      cardText.innerText=trimmed_text;
      cardText.innerText+='.....'
    }
    else{cardText.innerText =item.text;
    }
    
    var button = document.createElement("button");
    button.className ="button text-light"
    button.id = item.id;
    button.style = "background-color:#6f42c1; padding: 8px 25px"
    button.innerText = item.button
    

    //
   // cardText.innerText=item.text;
 
    //Max-length

    // Append title and text to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
  
    // Append card body to card
    card.appendChild(image);
    card.appendChild(cardBody);
    parentdiv.appendChild(card);
  
    // Append card to the card row
    var cardRow = document.getElementById("rowunique");
    cardRow.appendChild(parentdiv);

    
    
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
   
    for (var i = 0; i < items.length; i++) {
       
        create_card(items[i], imageUrls[i]);
      }



    
    var buttons = document.getElementsByClassName("button");

    


for(var i=0; i<buttons.length;i++){
  var button = buttons[i];
  button.addEventListener("click", handleClick);
}



  
 
    
     





  })





function handleClick(e) {



  var max=120;

  for(var i=0;i<items.length;i++){
    if(items[i].text.length>max){
      var card = e.target.closest(".card");
  
      if(card.getAttribute("data") == items[i].text){

        
       
        poptext.innerText=items[i].text;
        
        // Display the text
        
        
        popup.style="display:block";
        parent_div_text.appendChild(poptext);
        popup.appendChild(parent_div_text);
    
        var cardRow = document.getElementById("wrap");
        cardRow.appendChild(popup)

          
        popup.addEventListener('click',function(){
      
        popup.style="display:none"

  })
      }

    }
  }



    

    }



    





