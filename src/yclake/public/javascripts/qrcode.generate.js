$(document).ready(function () {
    $('#generateButton').click(function () {
        var count = $('#generateCount').val();
        if (!/^\d+$/.test(count)) {
            $('#errorHolder').html('<div style="text-algin:center" class="alert alert-danger">生成个数必须为正确的数字</div>');
            return;
        }
        var num = parseInt(count, 10);

        $.ajax({
            type: 'POST',
            url: '/qrcode/data/generate',
            data: {
                count: num
            },
            dataType: 'json',
            success: function (data) {
                if (data.success) {
                    window.location.href = '/login';
                }
            }
        });
    });
});