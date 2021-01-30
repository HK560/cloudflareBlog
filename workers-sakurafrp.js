// 定义 Github 项目，文章会从这里读取
const github_base = "HK560/cloudflareBlog";

// 设置站点信息
var default_title = "elbadaernU - HK560's Blog";					// 站点标题（显示在浏览器标题栏）
var default_intitle = "elbadaernU";								// 站点名称（显示在首页）
var default_description = "个人cloudflare博客，随便记录些东西"; 	// 站点简介，有利于 SEO
var site_domain = "blog.hk560.top";								// 站点域名
var site_subtitle = "与光同尘";							// 站点副标题
var site_favicon = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/logp.png";				// 站点 Logo

// 博主信息
var owner_name = "HK560";									// 博主名字
var owner_logo = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/avatar.jpg" //博主头像
var owner_desc = "新世纪佛系战士";					// 博主简介

// 设置站点资源文件地址
var css_bootstrap = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/bootstrap.min.css";		// Boostrap css 文件地址
var css_hljs_github = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/github.css";  	// Highlight js css 地址
var js_jquery = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js";		// JQuery 地址
var js_bootstrap = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/bootstrap.min.js";		// Bootstrap 地址
var js_instantclick = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/instantclick.min.js";		// InstantClick 地址
var js_showdown = "https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js";			// Showdown 地址
var js_showdown_table = "https://cdn.jsdelivr.net/npm/showdown-table@1.0.1/dist/showdown-table.min.js";		// Showdown table 地址
var js_highlight = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/highlight.min.js";		// Highlight 地址
var js_highlight_pack = "https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.1/resource/highlight.pack.js";		// Highlight pack 地址

var intitle = "";
var title2 = "";
var description = "";
var ctime = "unknown";
var isunknown = "";

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
});

var header = `<!DOCTYPE HTML>
<!-- 由 CloudFlare Workers Blog 强力驱动 -->
<!-- SakuraFrp Blog 模板 1.0 by Akkariin -->
<html lang="zh_CN">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=11">
		<meta name="application-name" content="HK560 Blog">
		<meta name="msapplication-TileColor" content="#F1F1F1">
		<link rel="shortcut icon" href="${site_favicon}" />
		<meta name="description" content="{description}">
		<link rel="stylesheet" href="${css_bootstrap}" crossorigin="anonymous">
		<link rel="stylesheet" href="${css_hljs_github}">
		<title>{title}{title_2}</title>
		<style type="text/css">#instantclick-bar {
			background: #FF8700
		}
		
		hr {
			border-top: 1px solid rgba(255,255,255,0.3);
		}
		
		a {
			color: #00A6FF;
			text-decoration: none;
		}
		
		a:focus,a:hover {
			color: #786344;
			text-decoration: underline;
		}
		
		.pageid {
			margin-bottom: -26px
		}
		
		code {
			color: #00BFFF;
			background-color: rgba(0,0,0,0.655);
			border-radius: 0px;
			border: 1px solid rgba(255,255,255,0.2);
			margin-left: 3px;
			margin-right: 3px;
		}
		
		pre>code {
			color: #FFF;
			background-color: unset;
			border-radius: unset;
			border: 0px;
		}
		
		.post-a {
			color: #FFF;
			text-decoration: none ! important;
		}
		
		.post-a:hover {
			color: #00A6FF;
		}
		
		.post-box {
			padding: 12px 20px 12px 20px;
			border-bottom: 1px solid rgba(0,0,0,0.07);
			cursor: pointer;
			border-left: 0px solid rgba(66,66,66,0);
			transition-duration: 0.3s;
		}
		
		.post-box:hover {
			transition-duration: 0.3s;
			border-left: 5px solid #0E639C;
		}
		
		.thread h2 {
			border-bottom: 1px solid rgb(238,238,238);
			padding-bottom: 10px;
		}
		
		.editor-preview pre,.editor-preview-side pre {
			padding: 0.5em;
		}
		
		.hljs {
			background: unset ! important;
			padding: 0px;
		}
		
		.CodeMirror {
			height: calc(100% - 320px);
			min-height: 360px;
		}
		
		.msgid {
			font-family: Consolas;
		}
		
		.tooltip {
			word-break: break-all;
		}
		
		h2 a {
			font-weight: 400;
		}
		
		body {
			background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/62973f40-27f8-4910-9d98-49fe00f0358d.jpg);
			font-family: '-apple-system','BlinkMacSystemFont','Segoe UI','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol' ! important;
			font-weight: 400;
			background-attachment: fixed;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
			color: #FFF;
			text-shadow: 0px 0px 8px #000;
		}
		
		body:before {
			content: "";
			display: block;
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -10;
			background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/62973f40-27f8-4910-9d98-49fe00f0358d.jpg);
			background-size: cover;
			background-position: center;
			background-attachment: fixed;
			background-repeat: no-repeat;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
		}
		
		h2 a:hover {
			text-decoration: none;
			width: 100%;
		}
		
		.thread img {
			vertical-align: text-bottom ! important;
			max-width: 100% ! important;
			margin-top: 8px;
			margin-bottom: 8px;
		}
		
		.thread table {
			display: block;
			width: 100%;
			overflow: auto;
			margin-bottom: 8px;
		}
		
		.thread table tr {
			border-top: 1px solid rgba(0,0,0,0.3);
		}
		
		.thread table tr:nth-child(2n) {
			background-color: rgba(0,0,0,0.4);
		}
		
		.thread table th,.thread table td {
			padding: 10px 12px 0px 12px;
			border: 1px solid rgba(255,255,255,0.3);
			font-size: 14px;
		}
		
		.thread table th {
			padding-bottom: 10px;
			background: rgba(0,0,0,0.4);
		}
		
		.thread pre {
			margin-bottom: 16px;
			background: rgba(0,0,0,0.4);
			box-shadow: 0px 0px 16px rgba(0,0,0,0.7);
		}
		
		pre {
			border: none ! important;
		}
		
		blockquote {
			font-size: 15px ! important;
			border-color: #0E639C;
		}
		
		.comments-body .comment-input {
			background: none;
			border-color: rgba(255,255,255,0.3) ! important;
			color: #FFF ! important;
		}
		
		.comments-body .comment-input:focus {
			border-color: #d0a85c ! important;
			outline: 0 ! important;
			-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #d0a85c ! important;
			box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #d0a85c ! important;
		}
		
		.btn-golden,#submitdata {
			color: #fff;
			background-color: #d0a85c;
			border-color: #d0a24b;
		}
		
		.btn-golden:hover,#submitdata:hover {
			background: #b78c3a;
			border-color: #c39641;
		}
		
		@media screen and(max-width:768px) {
			.copyright {
				text-align: center;
			}
		}
        
        </style>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/HK560/cloudflareBlog@0.2/resource/atom-one-dark.css"/>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2><a href="/" class="post-a">{intitle}</a></h2>
					<p>${site_subtitle}</p>
					<hr>
				</div>
				<div class="col-sm-9">
					<div class="thread">
						`;

var modifyHeader = {};
var cookieText = "";

function getRequestParams(str) {
	var index = str.indexOf("?");
	str = str.substring(index + 1, str.length);
	if (typeof (str) == "string") {
		u = str.split("&");
		var get = {};
		for (var i in u) {
			var j = u[i].split("=");
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
}

async function bloghandle(request) {
	var cookie = {};
	var clist = undefined;
	try {
		cookieText.split(';').forEach(l => {
			var parts = l.split('=');
			cookie[parts[0].trim()] = unescape((parts[1] || '').trim());
		});
	} catch (e) {
		// 无可奉告
	}
	var $_GET = getRequestParams(request.url);
	var urls = new URL(request.url);
	var data = header;
	if (urls.pathname == "/") {
		var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
		const init = {
			method: "GET"
		};
		const response = await fetch(url, init);
		var resptxt = await response.text();
		if (cookie['list'] == undefined) {
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			modifyHeader = {
				"Set-Cookie": "list=" + escape(resptxt) + ";expires=" + exp.toGMTString()
			};
		}
		var json = JSON.parse(resptxt);
		// console.log(json);
		data += `<p>所有文章</p>
						`;
		var before_page = 0;
		var current_page = 1;
		var next_page = 2;
		var pagenow = json.length;
		var pageval = json.length - 5;
		if ($_GET['p'] != undefined && $_GET['p'] != "") {
			pageval = json.length - (parseInt($_GET['p']) * 5);
			pagenow = json.length - ((parseInt($_GET['p']) - 1) * 5) - 1;
			next_page = parseInt($_GET['p']) + 1;
			current_page = parseInt($_GET['p']);
			before_page = parseInt($_GET['p']) - 1;
		}
		console.log(pageval);
		var update_i = 0;
		for (var i = pagenow; i >= pageval; i--) {
			try {
				var tmpfilename = encodeURIComponent(json[i].file
					.replace(/"/g, "").replace(/posts\//ig, "").replace(/\.md/ig, ""));
				var tmptime = json[i].time;
				var tmptitle = json[i].title;
				data += `<a href="/${tmpfilename}" class="post-a">
							<div class="post-box">
								<h4>${tmptitle}</h4>
								<p>发表于 ${tmptime}</p>
							</div>
						</a>
						`;
				update_i++;
			} catch (e) {
				// 收声
			}
		}
		console.log(update_i);
		if (update_i == 0) {
			data += `<p><blockquote>暂时没有文章！</blockquote></p>
				`
		}
		data += `<br>
						<p class="text-left pageid">当前在第 ${current_page} 页</p>
						<p class="text-right">
							`;
		if (current_page > 1) {
			data += `<a href="/?p=${before_page}"><button class="btn btn-default">上一页</button></a>&nbsp; &nbsp;`;
		}
		if (update_i >= 5) {
			data += `<a href="/?p=${next_page}"><button class="btn btn-default">下一页</button></a>`;
		}
		data += `
						</p>
					</div>
				`;
		title = default_title;
		intitle = default_intitle;
		title2 = "";
	} else {
		var uname = unescape("posts" + urls.pathname + ".md");
		try {
			clist = cookie['list'];
		} catch (e) {
			var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
			const init = {
				method: "GET"
			};
			const response = await fetch(url, init);
			clist = await response.text();
		}
		if (clist != undefined) {
			try {
				var json = JSON.parse(clist);
				var found = false;
				for (var i in json) {
					tmpfilename = json[i].file.replace(/"/g, "");
					tmptime = json[i].time;
					tmptitle = json[i].title;
					if (tmpfilename == uname) {
						title = tmptitle;
						intitle = tmptitle;
						ctime = tmptime;
						found = true;
					}
				}
				if (!found) {
					var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
					const init = {
						method: "GET"
					};
					const response = await fetch(url, init);
					clist = await response.text();
					var json = JSON.parse(clist);
					for (var i in json) {
						tmpfilename = json[i].file.replace(/"/g, "");
						tmptime = json[i].time;
						tmptitle = json[i].title;
						if (tmpfilename == uname) {
							title = tmptitle;
							intitle = tmptitle;
							ctime = tmptime;
						}
					}
					var Days = 30;
					var exp = new Date();
					exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
					modifyHeader = {
						"Set-Cookie": "list=" + escape(clist) + ";expires=" + exp.toGMTString()
					};
				}
			} catch (e) {
				// 收声
			}
		} else {
			var url = "https://raw.githubusercontent.com/" + github_base + "/master/list.json";
			const init = {
				method: "GET"
			};
			const response = await fetch(url, init);
			var clist = await response.text();
			var json = JSON.parse(clist);
			for (var i in json) {
				tmpfilename = json[i].file.replace(/"/g, "");
				tmptime = json[i].time;
				tmptitle = json[i].title;
				if (tmpfilename == uname) {
					title = tmptitle;
					intitle = tmptitle;
					ctime = tmptime;
				}
			}
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			modifyHeader = {
				"Set-Cookie": "list=" + escape(clist) + ";expires=" + exp.toGMTString()
			};
		}
		data += `</div>
						<p class="text-center{isunknown}"><small>发表于 ${ctime}</small></p>
						<textarea id="textdata" style="display: none;">`;
		var url = "https://raw.githubusercontent.com/" + github_base + "/master/posts" + urls.pathname + ".md";
		const init = {
			method: "GET"
		};
		const response = await fetch(url, init);
		if (response.status == 200) {
			var resptxt = await response.text();
			data += resptxt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			description = resptxt.substring(0, 128).replace(/"/ig, "").replace(/\n/g, " ");
			data += `</textarea>
					<hr>
					
				`;
		} else {
			data += `### 404 Not Found
未找到您访问的页面，原因可能是：
- 该文章已被删除
- 该文章已经更改名称
- 您输入的链接不正确
<a href="/">返回 ${default_intitle} 首页</a>
					</textarea>
				`;
			title = `404 Not Found`;
			title2 = ` - ${default_title}`;
			intitle = `未找到指定的页面`;
			description = ``;
			isunknown = " hidden";
		}
		title2 = ` - ${default_title}`;
	}
	data += `</div>
				<div class="col-sm-3">
					<div style="padding: 16px;text-align: center;">
						<img src="${owner_logo}" style="max-width: 150px;width: 100%;border-radius: 50%;">
						<h2>${owner_name}</h3>
						<p class="text-middle">${owner_desc}</p>
						<hr>
						<div class="text-left">
							<h5>友情链接</h4>
							<p><a href="https://onedrive.hk560.top/" target="_blank">HK560's Onedrive</a> | <a href="https://proxy.hk560.top/" target="_blank">MyJSProxy</a></p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
				<p>Powered by CloudFlare Workers | Thanks for <a href="https://github.com/kasuganosoras/cloudflare-worker-blog" target="_blank">CloudflareWorkerBlog</a></p>
				<p>&copy; 2021 ${default_intitle}</p>
				<br><br>
				</div>
			</div>
		</div>
		<script src="${js_jquery}"></script>
		<script src="${js_bootstrap}" crossorigin="anonymous"></script>
		<script src="${js_instantclick}" data-no-instant></script>
		<script src="${js_showdown}" type="text/javascript"></script>
		<script src="${js_showdown_table}" type="text/javascript"></script>
		<script src="${js_highlight}"></script>
		<script src="${js_highlight_pack}"></script>
				
		<script type="text/javascript">
			var init = {
			site: "${site_domain}",
			cid: "posts${urls.pathname}.md"
			};
			hljs.initHighlightingOnLoad();
			var md = new showdown.Converter({extensions: ['table']});
			md.setOption('simplifiedAutoLink', true);
			md.setOption('simpleLineBreaks', true);
			md.setOption('openLinksInNewWindow', true);
			md.setOption('noHeaderId', true);
			window.onload = function() {
				 
					$(".thread").html(md.makeHtml($("#textdata").val()));
					document.querySelectorAll('pre code').forEach(function(e) {
						hljs.highlightBlock(e);
					});
					
				
			}
		</script>
		<script data-no-instant>
			InstantClick.init();
			InstantClick.on('change', function() {
				
					$(".thread").html(md.makeHtml($("#textdata").val()));
					document.querySelectorAll('pre code').forEach(function(e) {
						hljs.highlightBlock(e);
					});
					
				 
			});
		</script>
	</body>
</html>
	`;
	data = data.replace(/\{title\}/ig, title)
		.replace(/\{intitle\}/ig, intitle)
		.replace(/\{title\_2\}/ig, title2)
		.replace(/\{isunknown\}/ig, isunknown)
		.replace(/\{description\}/ig, description);
	return data;
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	if (new URL(request.url).protocol != "https:") {
		var rhttps = new Response("Location to https", { status: 301 });
		rhttps.headers.set("Location", request.url.replace("http://", "https://"));
		return rhttps;
	}
	cookieText = request.headers.get("cookie");
	var resp = new Response(await bloghandle(request), { status: 200 });
	resp.headers.set("Content-Type", "text/html");
	if (modifyHeader != undefined) {
		for (var index in modifyHeader) {
			resp.headers.set(index, modifyHeader[index]);
		}
	}
	return resp;
}