# Web-Accordion
A simple-to-use, powerful accordion for the web.

To use the accorion, download the `accordion.css` and `accordion.js` files and put them in your website directory.  Then link to them in your html document.
Just put '<link rel="stylesheet" type="text/css" href="accordion.css" />` in your `head` tag (preferably before any other style sheets so that you can overwrite the default styles from `accordion.css`)
And put `<script src="accordion.js"></script>` at the end of your `body` tag.

To make an accordion, simply add the class `accordion` to your `ul` (unordered list) and surround the text of your `li`s (list items) with an `a` (link) tag:
```
<ul class=accordion>
	<li>
		<a>Subber</a>
	</li>
	<li>
		<a href="#go-here">Subber with auto link icon (include an href to the tag to give it a link icon)</a>
	</li>
	<li>
		<a>Subber Section (By including an other unordered list underneath the a tag, a folder icon will automatically appear)<a>
		<ul>
			<li><a>Super Subby</a></li>
			<li><a>Super Subber</a></li>
			<li><a>Super Subbet</a></li>
		</ul>
	</li>
</ul>
```

Accordion supports multilevel accordions, automatically includes icons depending on the role of the `<a>` tag, smoothly animates the opening of each section, and is super easy to use.

## Warning
Accordion is not yet tested with all browsers (so far only known to work on the latest version of Chrome).  Browser supprot will be coming soon.
