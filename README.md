# wmatrix
Matrix in the web
# Getting Started
Wmatrix is a tiny jquery plugin to make a matrix effect
First of all, You need to import Jquery scritp to your page ( You can use CDN )
after that download the plugin and import 'js/wmatrix.js' and 'css/wmatrix.css' in your web page
One last thing to note is that you have to import jQuery before importing wmatrix.js! 
Your HTML structure will be look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="content-language" content="fa-IR">
	<title>Wmatrix</title>
	<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
	<link href="./css/wmatrix.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" src="./js/wmatrix.js"></script>
</head>
<body>

</body>
</html>
```
## start Wmatrix
to start wmatrix to make a characters, just add "wmatrix" class to your div
```html
<div class="wmatrix"></div>
```
and after that, before ending your body tag, call wmatrix function
```html
<script type="text/javascript">
		wmatrix();
</script>
```

### changing font size and font family and font color

to change fonts and colors, in your css, use this selectors:
```css
  .wmatrix{
    color: #d4f8e3; // change this to change font color
    font-size: 21px; // change this to change font size
    font-family: Inconsolata, "Lucida Console", Monaco, Courier, monospace; // change this to change font family

}
```
