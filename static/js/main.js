function loadDoc(url, cFunction, cArgs) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this, cArgs);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function readYaml(xhttp) {
  var text = xhttp.responseText;
  console.log(text);
  console.log(data);
	var doc = jsyaml.load(text);
// And then create our markup:
	const markup = `
 <div class="person">
		<h2>
				${doc.title}
		</h2>
		<p class="location">${doc.author}</p>
		${doc.checklist}
 </div>
`;

  $("#content").append(markup);
}


/*
function getArticlesList(xhttp) {
  var text = xhttp.responseText;
  console.log(text);
  console.log(data);
  const obj = JSON.parse(text);
  data["content"]=[];
  data["categories"]=[];
  $.each(obj, function( key, categories ) {
    cat_name=categories["name"];
    data.categories.push(cat_name)
    console.log(cat_name);
    $("#menu").append("<li><button onclick=\"displayArticles(['"+cat_name+"']);\">"+cat_name+"</button></li>");
    loadDoc("https://api.github.com/repos/AlxndrPsclt/jasone/contents/articles/"+cat_name, getContentFromCategory, cat_name);
  });
  cat_except_about = data.categories.filter(item => item !== "about me")
  $("#menu").prepend("<li><button onclick='displayArticles("+JSON.stringify(cat_except_about)+");'>everything</button></li>");
}

function displayArticle(article){
  $("#articles").append("<article id='"+article.name+"'>"+article.html+"</article>");
}

*/
var data={ "title":"Main title"};

$( document ).ready(function() {

  var app= Vue({
    el: "#app"
  });
	//$("#content").append(doc);
	loadDoc("https://raw.githubusercontent.com/AlxndrPsclt/yamlview/master/notes/001.yaml", readYaml);
  console.log( "ready!" );
  /*loadDoc('articles/000.md', myFunction);*/
});
