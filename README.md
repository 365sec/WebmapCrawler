## WebmapJS Crawler

WebmapJS crawler is based on phantomjs. The architecture is simple:

 * it runs javascript code inside phantomjs and hook javascript function which loads a URL and extracts links, forms and ajax
 * The phantomjs binary is run as a web server to accept the post parameters.
 * The javascript code outputs JSON encoded messages to http output with the links,  forms and ajax
 
## Requirements

For the user the requirement is very simple: "Install phantomjs version > 2.0". This
is solved with `apt install phantomjs` in Debian based distributions.

## Running the crawler

```
phantomjs --ssl-protocol=any --ignore-ssl-errors=true phantomjs_spider.js 9000
```

You can use Burp Suite to send HTTP data to detect the existing links on the current page. It can detect HTML link form and Ajax.

For examples
```
{
	"url":"http://testphp.vulnweb.com/AJAX/index.php",
	"data":"",
	"method":"GET",
	"headers":{
		"User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
	},
	"js_viewport_width":1024,
	"js_viewport_height":768,
	"load_images":false,
	"request_timeout":20,
	"followPreRedirections":false
}
```

The results are as follows
```
{
  "orig_url": "http://testphp.vulnweb.com/AJAX/index.php",
  "status_code": 200,
  "content": "",
  "headers": {
    "Server": "nginx/1.4.1",
    "Date": "Fri, 17 Jan 2020 05:27:14 GMT",
    "Content-Type": "text/html",
    "Transfer-Encoding": "chunked",
    "Connection": "close",
    "X-Powered-By": "PHP/5.3.10-1~lucid+2uwsgi2",
    "Content-Encoding": "gzip"
  },
  "url": "http://testphp.vulnweb.com/AJAX/index.php#",
  "cookies": {
    "mycookie": "3"
  },
  "time": 9.308,
  "js_script_result": [],
  "link": [
    "http://testphp.vulnweb.com/AJAX/index.php#",
    "http://testphp.vulnweb.com/AJAX/artists.php",
    "http://testphp.vulnweb.com/AJAX/infoartist.php?id=1",
    "http://testphp.vulnweb.com/AJAX/infoartist.php?id=2",
    "http://testphp.vulnweb.com/AJAX/infoartist.php?id=3",
    "http://testphp.vulnweb.com/AJAX/categories.php",
    "http://testphp.vulnweb.com/AJAX/infocateg.php?id=4",
    "http://testphp.vulnweb.com/AJAX/titles.php"
  ],
  "form": [],
  "ajax": [
    {
      "url": "http://testphp.vulnweb.com/AJAX/infotitle.php",
      "data": "id=5",
      "headers": [
        [
          "content-type",
          "application/x-www-form-urlencoded"
        ]
      ]
    },
    {
      "url": "http://testphp.vulnweb.com/AJAX/infotitle.php",
      "data": "id=6",
      "headers": [
        [
          "content-type",
          "application/x-www-form-urlencoded"
        ]
      ]
    },
    {
      "url": "http://testphp.vulnweb.com/AJAX/infotitle.php",
      "data": "id=7",
      "headers": [
        [
          "content-type",
          "application/x-www-form-urlencoded"
        ]
      ]
    },
    {
      "url": "http://testphp.vulnweb.com/AJAX/showxml.php",
      "data": "<xml><node name=\"nodename1\">nodetext1</node><node name=\"nodename2\">nodetext2</node></xml>",
      "headers": [
        [
          "content-type",
          "text/xml"
        ]
      ]
    }
  ]
}
```

## Debugging

`--debug=true` is very powerful and can be added as a phantomjs parameter.

```
phantomjs --debug=true ... phantomjs_spider.js 9000


```
## How to test the api
```
python example.py
```
