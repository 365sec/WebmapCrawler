#coding:utf-8
import requests
import json


postdata="""{
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
}"""

res1 = requests.post("http://127.0.0.1:9000", headers={'Content-Type':"application/x-www-form-urlencoded"},data=postdata)
print res1.json()
