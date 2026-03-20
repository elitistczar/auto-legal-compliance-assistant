jQuery(document).ready(function($){
    // Tab switching
    $('.alca-tab').click(function(){
        $('.alca-tab').removeClass('active');
        $(this).addClass('active');
        $('.alca-tab-content').hide();
        $('#tab-'+$(this).data('tab')).show();
    });

    // Load documents list (called after save/delete)
    function loadDocuments() {
        // In real plugin you would fetch via AJAX; here we refresh page for simplicity
        location.reload();
    }

    window.alcaGenerate = function(type) {
        let data = { action: 'alca_generate', type: type, nonce: alcaAjax.nonce };
        if(type==='privacy'){
            data.name = $('#p_name').val();
            data.email = $('#p_email').val();
        } else {
            data.name = $('#t_name').val();
            data.email = $('#t_email').val();
        }
        $.post(alcaAjax.ajax_url, data, function(res){
            alert(res.data.message);
            loadDocuments();
        });
    };

    window.alcaSaveCookieSettings = function(){
        $.post(alcaAjax.ajax_url, {
            action: 'alca_save_cookie_settings',
            nonce: alcaAjax.nonce,
            enabled: $('#cookie_enabled').is(':checked'),
            message: $('#cookie_message').val()
        }, function(){ alert('Saved!'); });
    };
});
