$(document).ready(function () {
    // === Carousel ===
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    // === Máscaras ===
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000',
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00',
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000',
    });

    // === Validação do formulário ===
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
                minlength: 14, // (00) 12345-6789
            },
            cpf: {
                required: true,
                minlength: 14, // 123.456.789-00
            },
            endereco: {
                required: true,
                minlength: 10,
            },
            cep: {
                required: true,
                minlength: 9, // 01234-567
            },
        },
        messages: {
            nome: {
                required: 'Este campo é obrigatório.',
                minlength: 'O nome deve ter pelo menos 3 caracteres.',
            },
            email: {
                required: 'Este campo é obrigatório.',
                email: 'Insira um e-mail válido.',
            },
            telefone: {
                required: 'Este campo é obrigatório.',
                minlength: 'O telefone deve seguir o formato (00) 00000-0000.',
            },
            cpf: {
                required: 'Este campo é obrigatório.',
                minlength: 'O CPF deve seguir o formato 000.000.000-00.',
            },
            endereco: {
                required: 'Este campo é obrigatório.',
                minlength: 'Insira um endereço válido.',
            },
            cep: {
                required: 'Este campo é obrigatório.',
                minlength: 'O CEP deve seguir o formato 00000-000.',
            },
        },
        highlight: function (element) {
            $(element).addClass('error-highlight');
        },
        unhighlight: function (element) {
            $(element).removeClass('error-highlight');
        },
        submitHandler: function (form, event) {
            event.preventDefault(); // Bloqueia a atualização da página
            alert('Formulário enviado com sucesso! Parabéns pela sua aquisição.');
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        },
    });
});
