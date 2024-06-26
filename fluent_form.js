<script>
/**
* Author: Md Hasanuzzamna
* Linkedin: https://linkedin.com/md-h
* Email: info@leomeasure.com
* Website: https://leomeasure.com
* Youtube: https://youtube.com/@leomeasure
*/
(function($) {
	var $form = $('form.frm-fluent-form');
	$form.on('fluentform_submission_success', function() {
		var formId = this.getAttribute('data-form_id');
	   	var formData = new FormData(this);
		var inputValues = {};

		formData.forEach(function (value, key) {
			var key = key.replace(/]$/g, '').replace(/[\[\]]/g, '_');
		    inputValues[key] = value;
		});

		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			event: 'fluent_form_submit',
			form_id: formId,
			inputs: inputValues
		});
	});
})(jQuery);
</script>
