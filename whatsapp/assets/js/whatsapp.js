/*
Theme Name: WHATSAPP
Author: Taciara Furtado
Version: 1.0
Author URI: http://taciara.com.br/
*/

// MASCARA
$(document).ready(function(){
	$('.celular').mask('(99) 99999-9999'); 
});

window.jQuery(function ($) {



	//var API_URL = 'https://api.whatsapp.com/send?phone={{phone}}&text={{text}}';
	var API_URL = '<a href="https://api.whatsapp.com/send?phone={{phone}}&text={{text}}" target="_blank" id="btn_chat_whatsapp"><span style="">Chat WhatsApp</span><i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="margin-top: 15px;fill: #fff;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></i></a><style type="text/css">#btn_chat_whatsapp{white-space:nowrap;overflow:hidden;position:fixed;width:60px;height:60px;bottom:20px;right:20px;background-color:#0e843a;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow:1px 1px 2px #888;z-index:99999;text-decoration:none;transition:width .35s ease-in-out}#btn_chat_whatsapp span{font-size:15px;float:left;margin-top:22px;margin-left:30px;vertical-align:middle;white-space:nowrap;display:none}#btn_chat_whatsapp:hover{width:220px}#btn_chat_whatsapp:hover span{display:inline}</style>';


	var clipboard = new ClipboardJS('.button-copy');

	clipboard.on('success', function(e) {
		$button = $('.response .button-copy');
		var label = $button.text();
		$button.text('Copiado!');
		$button.attr('disabled', true);
		setTimeout(function () {
			$button.text(label);
			$button.attr('disabled', false);
		}, 1000);
	});

	$('.wpp-link-generator .button-reset').on('click', function (evt) {
		var $parent = $(this).closest('.wpp-link-generator');

		$parent.find('.response').hide();
		$parent.find('form').show().get(0).reset();
	});

	$('.wpp-link-generator .button-short-url').on('click', function (evt) {
		var $button = $(this);
		var $parent = $button.closest('.wpp-link-generator');
		var $response = $button.closest('.response');
		var $inputURL = $response.find('#wpp-response');
		var label = $button.text();
		var longURL = $inputURL.data('long-url');
		var $errors = $response.find('.errors');

		$button.text('encurtando');
		$button.addClass('loading');
		$button.attr('disabled', true);
		$errors.find('.error').hide();

		var req = $.ajax({
			url: 'https://api-ssl.bitly.com/v3/shorten',
			type: 'POST',
			data: {
				longUrl: longURL,
				access_token: '758a46caacf9237a890dcecfa017a023f93af235'
			},
			dataType: 'json'
		});

		req.always(function () {
			$button.text(label);
			$button.removeClass('loading');
			$button.attr('disabled', false);
		});

		req.done(function (res) {
			console.log(res);
			if (200 == res.status_code) {
				$inputURL.val(res.data.url);
			}
		});

		req.fail(function () {
			$errors.show();
			$errors.find('.error').hide();
			$errors.find('.error-shorten').show();
		})
	});

	$('.wpp-link-generator form').on('submit', function (evt) {
		evt.preventDefault();

		var $form = $(this);
		var $parent = $form.parent();
		var hasError = false;
		var dataArray = $form.serializeArray();
		var data = serializeObject(dataArray);
		var $errors = $form.find('.errors');
		var $response = $parent.find('.response')

		dataArray.forEach(function (item) {
			if ( 'phone' === item.name ) {
				data[item.name] = item.value.replace(/[^0-9]/gi, '')
				if (data[item.name].length > 0) {
					data[item.name] = '55' + data[item.name];
				}
			}

			if (hasError) return;

			if (0 === data[item.name].length) hasError = true;
		});

		if (hasError) {
			$errors.show();
			$errors.find('.error').hide();
			$errors.find('.error-invalid').show();
		} else {
			$errors.hide();
			$errors.find('.error').hide();

			console.log(data);

			data.message = encodeURI(data.message);

			var url = renderTemplate(API_URL, {
				phone: data.phone,
				text: data.message
			});

			$response.find('.field-response input').val(url).data('long-url', url);
			$form.hide();
			$response.show();
		}
	});

	function renderTemplate (template, data) {
		var result = template;
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var regex = new RegExp('{{\\s*' + key + '\\s*}}', 'g');
				result = result.replace(regex, data[key]);
			}
		}
		return result;
	}

	function serializeObject (array) {
		var obj = {};
		array.forEach(function (item) {
			obj[item.name] = item.value
		})
		return obj;
	}
});

